"use server"

import { z } from "zod"
import { Resend } from "resend"
import { EmailTemplate } from "@/components/email-template"
import { addBooking } from "@/lib/db"

// Initialize Resend with API Key from environment
const resend = new Resend(process.env.Resend_Key || process.env.RESEND_API_KEY)

const bookingSchema = z.object({
  name: z.string().min(2, "Name must be at least 2 characters"),
  email: z.string().email("Invalid email address"),
  phone: z.string().min(10, "Phone number must be at least 10 digits"),
  address: z.string().min(5, "Address must be at least 5 characters"),
  serviceType: z.string().min(1, "Please select a service"),
  date: z.date({
    required_error: "A date of service is required",
  }),
  timeSlot: z.string().min(1, "Please select a preferred time"),
  description: z.string().optional(),
})

export type BookingState = {
  success: boolean
  message: string
  fields?: Record<string, string>
  errors?: Record<string, string[] | undefined>
}

export async function submitBooking(prevState: BookingState, formData: FormData): Promise<BookingState> {
  const rawData = {
    name: formData.get("name"),
    email: formData.get("email"),
    phone: formData.get("phone"),
    address: formData.get("address"),
    serviceType: formData.get("serviceType"),
    date: formData.get("date") ? new Date(formData.get("date") as string) : undefined,
    timeSlot: formData.get("timeSlot"),
    description: formData.get("description"),
  }

  const validatedFields = bookingSchema.safeParse(rawData)

  if (!validatedFields.success) {
    return {
      success: false,
      message: "Please fix the errors below.",
      fields: Object.fromEntries(
        Object.entries(rawData).map(([k, v]) => [k, v?.toString() || ""])
      ),
      errors: validatedFields.error.flatten().fieldErrors,
    }
  }

  const { name, email, phone, address, serviceType, date, timeSlot, description } = validatedFields.data

  // Save to Supabase
  try {
    await addBooking({
      name,
      email,
      phone,
      address,
      service_type: serviceType,
      date: date.toISOString(),
      time_slot: timeSlot,
      description,
    });
  } catch (error) {
    console.error("Failed to save booking:", error);
    return {
      success: false,
      message: "Failed to save booking. Please try again.",
    }
  }

  // Send confirmation email
  try {
    const resendKey = process.env.Resend_Key || process.env.RESEND_API_KEY
    if (resendKey) {
      const data = await resend.emails.send({
        from: 'Plumbing Pros <onboarding@resend.dev>',
        to: [email],
        subject: 'Booking Received - Plumbing Pros',
        react: await EmailTemplate({ 
          name, 
          serviceType, 
          date: date.toDateString(), 
          timeSlot 
        }),
      });
      console.log("Email sent successfully:", data)
    } else {
      console.log("Resend API Key missing - skipping email send. Data:", validatedFields.data)
    }
  } catch (error) {
    console.error("Failed to send email:", error)
    // We don't fail the booking if email fails, just log it
  }

  return {
    success: true,
    message: "Booking request submitted successfully! We have sent a confirmation email.",
  }
}

