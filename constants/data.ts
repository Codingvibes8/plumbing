import {
  Clock,
  ShieldCheck,
  Wrench,
  Droplet,
  Thermometer,
  Home,
} from "lucide-react";

export const navItems = [
  { href: "/", label: "Home" },
  { href: "/services", label: "Services" },
  { href: "/about", label: "About" },
  { href: "/blog", label: "Blog" },
  { href: "/contact", label: "Contact" },
];

export const services = [
  {
    id: "emergency",
    icon: Wrench,
    title: "Emergency Plumbing",
    description:
      "24/7 emergency plumbing services to quickly resolve urgent issues and prevent further damage.",
    features: [
      "Available 24/7, 365 days a year",
      "Fast response times",
      "Fully equipped service vehicles",
      "Upfront pricing with no overtime charges",
      "Licensed and experienced technicians",
    ],
    image: "/placeholder.svg?height=600&width=800",
    href: "/services/emergency-plumbing",
  },
  {
    id: "leaks",
    icon: Droplet,
    title: "Leak Detection & Repair",
    description:
      "Advanced technology to locate and fix hidden leaks with minimal disruption to your property.",
    features: [
      "Non-invasive leak detection",
      "Thermal imaging technology",
      "Slab leak specialists",
      "Water line repairs",
      "Preventative solutions",
    ],
    image: "/placeholder.svg?height=600&width=800",
    href: "/services/leak-detection",
  },
  {
    id: "water-heater",
    icon: Thermometer,
    title: "Water Heater Services",
    description:
      "Installation, repair, and maintenance for all types of water heaters to ensure reliable hot water.",
    features: [
      "Tank and tankless water heaters",
      "Energy-efficient options",
      "Repairs and maintenance",
      "Replacement and installation",
      "Water heater flushing",
    ],
    image: "/placeholder.svg?height=600&width=800",
    href: "/services/water-heater",
  },
  {
    id: "bathroom",
    icon: Home,
    title: "Bathroom Remodeling",
    description:
      "Transform your bathroom with our expert plumbing and fixture installation services.",
    features: [
      "Fixture installation and upgrades",
      "Shower and tub replacement",
      "Toilet installation",
      "Vanity and sink installation",
      "ADA-compliant bathroom solutions",
    ],
    image: "/placeholder.svg?height=600&width=800",
    href: "/services/bathroom-remodeling",
  },
  {
    id: "drains",
    icon: ShieldCheck,
    title: "Drain Cleaning",
    description:
      "Professional drain cleaning services to eliminate clogs and keep your plumbing flowing smoothly.",
    features: [
      "Hydro jetting services",
      "Drain snaking",
      "Video camera inspections",
      "Preventative maintenance",
      "Sewer line cleaning",
    ],
    image: "/placeholder.svg?height=600&width=800",
    href: "/services/drain-cleaning",
  },
  {
    id: "maintenance",
    icon: Clock,
    title: "Maintenance Plans",
    description:
      "Preventative maintenance plans to keep your plumbing system in optimal condition year-round.",
    features: [
      "Annual plumbing inspections",
      "Priority scheduling",
      "Discounted service rates",
      "Extended warranties",
      "Customized maintenance schedules",
    ],
    image: "/placeholder.svg?height=600&width=800",
    href: "/services/maintenance",
  },
];

export const testimonials = [
  {
    id: 1,
    name: "John Smith",
    location: "Camden, Nw1 1AA",
    avatar: "/placeholder.svg?height=100&width=100",
    rating: 5,
    text: "The plumbers arrived promptly and fixed our emergency leak quickly. Professional service and fair pricing. Highly recommend!",
  },
  {
    id: 2,
    name: "Sarah Johnson",
    location: "Barnet, NW2 9KJ",
    avatar: "/placeholder.svg?height=100&width=100",
    rating: 5,
    text: "We had our bathroom completely remodeled and couldn't be happier with the results. The team was professional, clean, and finished on schedule.",
  },
  {
    id: 3,
    name: "Michael Brown",
    location: "Hyde Park,W1 5RR",
    avatar: "/placeholder.svg?height=100&width=100",
    rating: 4,
    text: "Called for a clogged drain on a Sunday and they were at my house within an hour. Great service when you need it most!",
  },
  {
    id: 4,
    name: "Emily Davis",
    location: "Islington, N14 6YL",
    avatar: "/placeholder.svg?height=100&width=100",
    rating: 5,
    text: "We've been using Plumbing Pros for all our rental properties for years. Reliable, honest, and they stand behind their work.",
  },
  {
    id: 5,
    name: "Robert Wilson",
    location: "Golder Green,Nw4,9KJ",
    avatar: "/placeholder.svg?height=100&width=100",
    rating: 5,
    text: "Had a water heater emergency and they installed a new one the same day. Excellent service and the technician explained everything clearly.",
  },
];
