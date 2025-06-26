import type React from "react"
import type { Metadata } from "next"
import { notFound } from "next/navigation"
import { getServiceData } from "@/lib/services"

export async function generateMetadata({ params }: { params: { slug: string } }): Promise<Metadata> {
  const service = getServiceData(params.slug)

  if (!service) {
    return {
      title: "Service Not Found",
    }
  }

  return {
    title: service.title,
    description: service.description,
  }
}

export default function ServiceLayout({
  children,
  params,
}: {
  children: React.ReactNode
  params: { slug: string }
}) {
  const service = getServiceData(params.slug)

  if (!service) {
    notFound()
  }

  return <>{children}</>
}

