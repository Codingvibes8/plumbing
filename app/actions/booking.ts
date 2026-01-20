"use server"

import { z } from "zod"

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

  // Simulate API call / Database insertion
  console.log("Booking Received:", validatedFields.data)
  
  await new Promise((resolve) => setTimeout(resolve, 1000))

  return {
    success: true,
    message: "Booking request submitted successfully! We will contact you shortly.",
  }
}
