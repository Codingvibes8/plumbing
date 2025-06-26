"use client"

import type React from "react"

import { useState } from "react"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { Textarea } from "@/components/ui/textarea"
import { RadioGroup, RadioGroupItem } from "@/components/ui/radio-group"
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select"
import { useToast } from "@/hooks/use-toast"

export function ContactForm() {
  const { toast } = useToast()
  const [isSubmitting, setIsSubmitting] = useState(false)

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault()
    setIsSubmitting(true)

    // Simulate form submission
    await new Promise((resolve) => setTimeout(resolve, 1500))

    toast({
      title: "Form submitted successfully",
      description: "We'll get back to you as soon as possible.",
    })

    setIsSubmitting(false)
    e.currentTarget.reset()
  }

  return (
    <form onSubmit={handleSubmit} className="space-y-6">
      <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
        <div className="space-y-2">
          <Label htmlFor="first-name">First Name</Label>
          <Input id="first-name" name="first-name" required />
        </div>
        <div className="space-y-2">
          <Label htmlFor="last-name">Last Name</Label>
          <Input id="last-name" name="last-name" required />
        </div>
      </div>

      <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
        <div className="space-y-2">
          <Label htmlFor="email">Email</Label>
          <Input id="email" name="email" type="email" required />
        </div>
        <div className="space-y-2">
          <Label htmlFor="phone">Phone</Label>
          <Input id="phone" name="phone" type="tel" required />
        </div>
      </div>

      <div className="space-y-2">
        <Label htmlFor="address">Address</Label>
        <Input id="address" name="address" />
      </div>

      <div className="space-y-2">
        <Label>Service Type</Label>
        <RadioGroup defaultValue="residential">
          <div className="flex items-center space-x-2">
            <RadioGroupItem value="residential" id="residential" />
            <Label htmlFor="residential">Residential</Label>
          </div>
          <div className="flex items-center space-x-2">
            <RadioGroupItem value="commercial" id="commercial" />
            <Label htmlFor="commercial">Commercial</Label>
          </div>
        </RadioGroup>
      </div>

      <div className="space-y-2">
        <Label htmlFor="service">Service Needed</Label>
        <Select name="service">
          <SelectTrigger>
            <SelectValue placeholder="Select a service" />
          </SelectTrigger>
          <SelectContent>
            <SelectItem value="emergency">Emergency Repair</SelectItem>
            <SelectItem value="leak">Leak Detection & Repair</SelectItem>
            <SelectItem value="water-heater">Water Heater Service</SelectItem>
            <SelectItem value="bathroom">Bathroom Remodeling</SelectItem>
            <SelectItem value="drain">Drain Cleaning</SelectItem>
            <SelectItem value="maintenance">Maintenance</SelectItem>
            <SelectItem value="other">Other</SelectItem>
          </SelectContent>
        </Select>
      </div>

      <div className="space-y-2">
        <Label htmlFor="message">Message</Label>
        <Textarea id="message" name="message" placeholder="Please describe your plumbing issue or project" required />
      </div>

      <div className="space-y-2">
        <Label htmlFor="preferred-contact">Preferred Contact Method</Label>
        <Select name="preferred-contact" defaultValue="email">
          <SelectTrigger>
            <SelectValue placeholder="Select contact method" />
          </SelectTrigger>
          <SelectContent>
            <SelectItem value="email">Email</SelectItem>
            <SelectItem value="phone">Phone</SelectItem>
            <SelectItem value="text">Text Message</SelectItem>
          </SelectContent>
        </Select>
      </div>

      <Button type="submit" className="w-full" disabled={isSubmitting}>
        {isSubmitting ? "Submitting..." : "Submit"}
      </Button>
    </form>
  )
}

