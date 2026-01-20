"use server"

import { cookies } from "next/headers"
import { redirect } from "next/navigation"

export async function loginAction(prevState: any, formData: FormData) {
  const password = formData.get("password") as string
  const username = formData.get("username") as string

  // Simple hardcoded check for demo purposes
  // In production, use env variables: process.env.ADMIN_PASSWORD
  const isValid = 
    username === (process.env.ADMIN_USERNAME || "admin") && 
    password === (process.env.ADMIN_PASSWORD || "admin123")

  if (!isValid) {
    return { error: "Invalid username or password" }
  }

  // Set auth cookie
  const cookieStore = await cookies()
  cookieStore.set("admin_session", "true", {
    httpOnly: true,
    secure: process.env.NODE_ENV === "production",
    maxAge: 60 * 60 * 24, // 1 day
    path: "/",
  })

  redirect("/admin/dashboard")
}

export async function logoutAction() {
  const cookieStore = await cookies()
  cookieStore.delete("admin_session")
  redirect("/admin/login")
}
