import type React from "react"
export type ServiceProcess = {
  title: string
  description: string
}

export type ServiceBenefit = {
  title: string
  description: string
}

export type ServiceFAQ = {
  question: string
  answer: string
}

export type RelatedService = {
  title: string
  description: string
  href: string
}

export type Service = {
  id: string
  title: string
  description: string
  category: string
  image: string
  icon?: React.ReactNode
  features?: string[]
  benefitDescription: string
  benefits: ServiceBenefit[]
  processDescription: string
  processImage: string
  process: ServiceProcess[]
  faqs?: ServiceFAQ[]
  relatedServices: RelatedService[]
}

const services: Record<string, Service> = {
  "emergency-plumbing": {
    id: "emergency-plumbing",
    title: "Emergency Plumbing Services",
    description:
      "24/7 emergency plumbing services to quickly resolve urgent issues and prevent further damage to your property.",
    category: "Emergency Services",
    image: "/placeholder.svg?height=800&width=1200",
    benefitDescription:
      "Our emergency plumbing services are designed to provide immediate relief and prevent costly damage to your property.",
    benefits: [
      {
        title: "24/7 Availability",
        description:
          "Our team is available around the clock, 365 days a year, to handle any plumbing emergency that may arise.",
      },
      {
        title: "Rapid Response",
        description:
          "We understand that plumbing emergencies can't wait, which is why we aim to arrive at your location within 1-2 hours of your call.",
      },
      {
        title: "Fully Equipped Vehicles",
        description:
          "Our service vehicles are stocked with all the necessary tools and parts to handle most emergency repairs on the first visit.",
      },
      {
        title: "Transparent Pricing",
        description: "Even in emergencies, we provide upfront pricing with no hidden fees or overtime charges.",
      },
      {
        title: "Experienced Technicians",
        description:
          "Our emergency plumbers are highly trained and experienced in handling all types of plumbing crises quickly and effectively.",
      },
      {
        title: "Comprehensive Solutions",
        description:
          "We don't just fix the immediate problem—we identify the root cause to prevent future emergencies.",
      },
    ],
    processDescription:
      "Our emergency plumbing service follows a systematic approach to quickly address your urgent plumbing issues while ensuring quality workmanship.",
    processImage: "/placeholder.svg?height=1000&width=800",
    process: [
      {
        title: "Initial Contact",
        description:
          "Call our emergency line for immediate assistance. Our dispatcher will gather essential information about your emergency and provide initial guidance if needed.",
      },
      {
        title: "Rapid Dispatch",
        description:
          "We'll immediately dispatch the nearest available technician to your location, typically arriving within 1-2 hours.",
      },
      {
        title: "Assessment & Diagnosis",
        description:
          "Upon arrival, our plumber will quickly assess the situation, identify the source of the problem, and explain what needs to be done.",
      },
      {
        title: "Upfront Quote",
        description:
          "Before any work begins, we'll provide a clear, upfront quote for the necessary repairs, with no hidden fees or surprises.",
      },
      {
        title: "Emergency Repair",
        description:
          "Our technician will perform the necessary repairs using quality parts and materials to ensure a lasting solution.",
      },
      {
        title: "Verification & Clean-up",
        description:
          "We'll test all repairs to ensure everything is functioning properly and clean up the work area before we leave.",
      },
    ],
    faqs: [
      {
        question: "What constitutes a plumbing emergency?",
        answer:
          "Plumbing emergencies include burst pipes, major leaks, sewer backups, gas leaks, no hot water in winter, or any plumbing issue that poses an immediate risk to your property or health.",
      },
      {
        question: "How quickly can you respond to an emergency call?",
        answer:
          "We typically arrive within 1-2 hours of your call, depending on your location and current demand. For severe emergencies like burst pipes or gas leaks, we prioritize these calls.",
      },
      {
        question: "Do you charge extra for emergency services?",
        answer:
          "While our emergency service does have a standard call-out fee, we don't charge extra for evenings, weekends, or holidays. We provide upfront pricing before any work begins.",
      },
      {
        question: "What should I do while waiting for the plumber to arrive?",
        answer:
          "If possible, shut off the water supply to the affected area or at the main water shut-off valve. Move valuable items away from the water, and try to contain the water with towels or buckets.",
      },
    ],
    relatedServices: [
      {
        title: "Leak Detection & Repair",
        description: "Advanced technology to locate and fix hidden leaks with minimal disruption to your property.",
        href: "/services/leak-detection",
      },
      {
        title: "Water Heater Services",
        description:
          "Installation, repair, and maintenance for all types of water heaters to ensure reliable hot water.",
        href: "/services/water-heater",
      },
      {
        title: "Drain Cleaning",
        description: "Professional drain cleaning services to eliminate clogs and keep your plumbing flowing smoothly.",
        href: "/services/drain-cleaning",
      },
    ],
  },
  "leak-detection": {
    id: "leak-detection",
    title: "Leak Detection & Repair",
    description: "Advanced technology to locate and fix hidden leaks with minimal disruption to your property.",
    category: "Diagnostic Services",
    image: "/placeholder.svg?height=800&width=1200",
    benefitDescription:
      "Our leak detection services use cutting-edge technology to find hidden leaks quickly and accurately, saving you time, money, and preventing property damage.",
    benefits: [
      {
        title: "Non-Invasive Detection",
        description:
          "We use advanced acoustic equipment, thermal imaging, and other non-invasive methods to locate leaks without unnecessary damage to your property.",
      },
      {
        title: "Precise Location",
        description:
          "Our technology can pinpoint the exact location of leaks, even those hidden behind walls, under floors, or in your yard.",
      },
      {
        title: "Early Detection",
        description:
          "Identifying and fixing leaks early prevents water damage, mold growth, and structural issues that can be costly to repair.",
      },
      {
        title: "Water Bill Reduction",
        description:
          "Even small leaks can waste thousands of gallons of water annually. Our services help reduce your water bills and conserve water.",
      },
      {
        title: "Comprehensive Solutions",
        description: "We don't just find the leak—we provide complete repair services to fix the problem permanently.",
      },
      {
        title: "Preventative Recommendations",
        description:
          "Our experts can identify potential problem areas and provide recommendations to prevent future leaks.",
      },
    ],
    processDescription:
      "Our leak detection process combines advanced technology with expert knowledge to accurately locate and repair leaks with minimal disruption.",
    processImage: "/placeholder.svg?height=1000&width=800",
    process: [
      {
        title: "Initial Consultation",
        description:
          "We'll discuss your concerns, water bill history, and any signs of leaks you've noticed to better understand the potential issues.",
      },
      {
        title: "Visual Inspection",
        description:
          "Our technicians will visually inspect accessible areas for signs of leaks, water damage, or moisture.",
      },
      {
        title: "Advanced Detection",
        description:
          "Using specialized equipment such as acoustic leak detectors, thermal imaging cameras, and moisture meters, we'll locate hidden leaks.",
      },
      {
        title: "Confirmation & Documentation",
        description:
          "Once a leak is detected, we'll confirm its location and document our findings, showing you exactly where and what the problem is.",
      },
      {
        title: "Repair Options",
        description:
          "We'll provide you with repair options, explaining the pros and cons of each approach and providing upfront pricing.",
      },
      {
        title: "Professional Repair",
        description:
          "Our skilled plumbers will repair the leak using quality materials and techniques that ensure a long-lasting solution.",
      },
    ],
    faqs: [
      {
        question: "How can I tell if I have a hidden water leak?",
        answer:
          "Signs of hidden leaks include unexplained increases in water bills, the sound of running water when no fixtures are in use, damp or warm spots on floors or walls, mold or mildew growth, and decreased water pressure.",
      },
      {
        question: "Can you detect leaks in concrete slabs?",
        answer:
          "Yes, we specialize in slab leak detection using non-invasive methods that can locate leaks under concrete foundations without extensive demolition.",
      },
      {
        question: "How accurate is your leak detection equipment?",
        answer:
          "Our advanced equipment can pinpoint leaks with accuracy to within inches of their location, minimizing the need for exploratory demolition.",
      },
      {
        question: "How long does leak detection typically take?",
        answer:
          "Most residential leak detection services take between 1-3 hours, depending on the size of the property and the complexity of the plumbing system.",
      },
    ],
    relatedServices: [
      {
        title: "Emergency Plumbing",
        description: "24/7 emergency plumbing services to quickly resolve urgent issues and prevent further damage.",
        href: "/services/emergency-plumbing",
      },
      {
        title: "Water Line Services",
        description: "Repair, replacement, and installation of water supply lines for your home or business.",
        href: "/services/water-heater",
      },
      {
        title: "Maintenance Plans",
        description: "Preventative maintenance plans to keep your plumbing system in optimal condition year-round.",
        href: "/services/maintenance",
      },
    ],
  },
  "water-heater": {
    id: "water-heater",
    title: "Water Heater Services",
    description:
      "Installation, repair, and maintenance for all types of water heaters to ensure reliable hot water for your home or business.",
    category: "Installation & Repair",
    image: "/placeholder.svg?height=800&width=1200",
    benefitDescription:
      "Our comprehensive water heater services ensure you have reliable hot water while maximizing energy efficiency and extending equipment life.",
    benefits: [
      {
        title: "Expert Installation",
        description:
          "Proper installation by our certified technicians ensures optimal performance, efficiency, and safety of your water heater.",
      },
      {
        title: "All Types Serviced",
        description:
          "We work with all water heater types including traditional tank, tankless, heat pump, and solar water heaters from all major brands.",
      },
      {
        title: "Energy Efficiency",
        description:
          "We can help you select and install energy-efficient models that reduce utility bills while providing excellent performance.",
      },
      {
        title: "Preventative Maintenance",
        description:
          "Regular maintenance extends the life of your water heater, improves efficiency, and prevents unexpected breakdowns.",
      },
      {
        title: "Fast Repairs",
        description:
          "When problems arise, our technicians quickly diagnose and repair issues to restore your hot water with minimal downtime.",
      },
      {
        title: "Code Compliance",
        description:
          "All our installations and repairs meet or exceed local building codes and manufacturer specifications for safety and reliability.",
      },
    ],
    processDescription:
      "Our water heater service process is designed to provide you with the most appropriate solution for your hot water needs while ensuring safety and efficiency.",
    processImage: "/placeholder.svg?height=1000&width=800",
    process: [
      {
        title: "Needs Assessment",
        description:
          "We'll evaluate your hot water requirements based on household size, usage patterns, and preferences to recommend the right solution.",
      },
      {
        title: "Inspection & Diagnosis",
        description:
          "For existing systems, we thoroughly inspect your water heater to identify any issues, inefficiencies, or potential problems.",
      },
      {
        title: "Options & Recommendations",
        description:
          "We'll present repair or replacement options, explaining the benefits, costs, and expected lifespan of each solution.",
      },
      {
        title: "Professional Installation",
        description:
          "Our technicians handle all aspects of installation, including removal of old units, proper positioning, and connection of all components.",
      },
      {
        title: "System Testing",
        description:
          "After installation or repair, we thoroughly test the system to ensure proper operation, temperature settings, and safety features.",
      },
      {
        title: "Maintenance Guidance",
        description:
          "We provide instructions on basic maintenance and optimal settings to maximize efficiency and extend the life of your water heater.",
      },
    ],
    faqs: [
      {
        question: "How long should a water heater last?",
        answer:
          "Traditional tank water heaters typically last 8-12 years, while tankless models can last 15-20 years with proper maintenance. Factors affecting lifespan include water quality, usage patterns, and maintenance frequency.",
      },
      {
        question: "What are the signs that I need to replace my water heater?",
        answer:
          "Signs include age (over 10 years), rusty water, noise or rumbling sounds, water leaking around the base, inconsistent temperature, or reduced hot water capacity.",
      },
      {
        question: "Are tankless water heaters worth the investment?",
        answer:
          "Tankless water heaters cost more upfront but offer energy savings, endless hot water, longer lifespan, and space savings. For many households, the long-term benefits outweigh the initial cost.",
      },
      {
        question: "How often should water heaters be maintained?",
        answer:
          "We recommend annual maintenance for tank water heaters, which includes flushing the tank, checking the anode rod, and inspecting safety components. Tankless units should be descaled every 1-2 years depending on water hardness.",
      },
    ],
    relatedServices: [
      {
        title: "Emergency Plumbing",
        description: "24/7 emergency plumbing services to quickly resolve urgent issues and prevent further damage.",
        href: "/services/emergency-plumbing",
      },
      {
        title: "Bathroom Remodeling",
        description: "Transform your bathroom with our expert plumbing and fixture installation services.",
        href: "/services/bathroom-remodeling",
      },
      {
        title: "Maintenance Plans",
        description: "Preventative maintenance plans to keep your plumbing system in optimal condition year-round.",
        href: "/services/maintenance",
      },
    ],
  },
  "bathroom-remodeling": {
    id: "bathroom-remodeling",
    title: "Bathroom Remodeling",
    description:
      "Transform your bathroom with our expert plumbing and fixture installation services for a beautiful and functional space.",
    category: "Remodeling",
    image: "/placeholder.svg?height=800&width=1200",
    benefitDescription:
      "Our bathroom remodeling services combine expert plumbing knowledge with design expertise to create beautiful, functional spaces that increase your home's value.",
    benefits: [
      {
        title: "Complete Plumbing Solutions",
        description:
          "We handle all plumbing aspects of your bathroom remodel, from moving water lines to installing fixtures and ensuring proper drainage.",
      },
      {
        title: "Quality Fixture Installation",
        description:
          "Our technicians are experts at installing all bathroom fixtures including toilets, sinks, showers, bathtubs, and specialty items.",
      },
      {
        title: "Water Efficiency",
        description:
          "We can help you select and install water-efficient fixtures that reduce water usage while maintaining excellent performance.",
      },
      {
        title: "Aging-in-Place Options",
        description:
          "We offer specialized solutions for accessibility including walk-in tubs, barrier-free showers, and ADA-compliant fixtures.",
      },
      {
        title: "Proper Ventilation",
        description:
          "We ensure your bathroom has adequate ventilation to prevent moisture problems and extend the life of your remodel.",
      },
      {
        title: "Coordinated Services",
        description:
          "We work seamlessly with other contractors or can recommend trusted partners for a complete bathroom renovation.",
      },
    ],
    processDescription:
      "Our bathroom remodeling process ensures that all plumbing aspects of your project are handled professionally, on schedule, and to code.",
    processImage: "/placeholder.svg?height=1000&width=800",
    process: [
      {
        title: "Initial Consultation",
        description:
          "We'll discuss your vision, needs, budget, and timeline to understand the scope of your bathroom remodeling project.",
      },
      {
        title: "Site Assessment",
        description:
          "Our plumbers will evaluate your existing bathroom, checking plumbing lines, water pressure, drainage, and identifying any potential challenges.",
      },
      {
        title: "Design & Planning",
        description:
          "We'll help plan the plumbing layout, recommend appropriate fixtures, and ensure all elements work together functionally and aesthetically.",
      },
      {
        title: "Detailed Proposal",
        description:
          "You'll receive a comprehensive proposal outlining all plumbing work, fixtures, timeline, and costs for your bathroom remodel.",
      },
      {
        title: "Professional Installation",
        description:
          "Our skilled plumbers will handle all aspects of the plumbing installation, ensuring everything is done to code and built to last.",
      },
      {
        title: "Final Inspection",
        description:
          "We thoroughly test all fixtures, check for leaks, ensure proper drainage, and verify that everything functions perfectly before completion.",
      },
    ],
    faqs: [
      {
        question: "How long does a typical bathroom remodel take?",
        answer:
          "The plumbing portion of a bathroom remodel typically takes 2-5 days, depending on complexity. A complete bathroom renovation usually takes 2-4 weeks from demolition to completion.",
      },
      {
        question: "Can you help me select fixtures for my bathroom?",
        answer:
          "Yes, we can recommend fixtures that balance quality, style, functionality, and budget. We work with all major brands and can advise on water-efficient options.",
      },
      {
        question: "Do I need permits for a bathroom remodel?",
        answer:
          "Most bathroom remodels that involve changes to plumbing, electrical, or structural elements require permits. We can help with the permitting process and ensure all work is inspected and approved.",
      },
      {
        question: "Can you make my small bathroom feel larger?",
        answer:
          "Yes, through strategic fixture placement, appropriate sizing, and features like walk-in showers with glass doors, we can maximize both actual and perceived space in small bathrooms.",
      },
    ],
    relatedServices: [
      {
        title: "Water Heater Services",
        description:
          "Installation, repair, and maintenance for all types of water heaters to ensure reliable hot water.",
        href: "/services/water-heater",
      },
      {
        title: "Leak Detection & Repair",
        description: "Advanced technology to locate and fix hidden leaks with minimal disruption to your property.",
        href: "/services/leak-detection",
      },
      {
        title: "Drain Cleaning",
        description: "Professional drain cleaning services to eliminate clogs and keep your plumbing flowing smoothly.",
        href: "/services/drain-cleaning",
      },
    ],
  },
  "drain-cleaning": {
    id: "drain-cleaning",
    title: "Drain Cleaning Services",
    description: "Professional drain cleaning services to eliminate clogs and keep your plumbing flowing smoothly.",
    category: "Maintenance",
    image: "/placeholder.svg?height=800&width=1200",
    benefitDescription:
      "Our professional drain cleaning services restore proper flow to your plumbing system while preventing future clogs and extending the life of your pipes.",
    benefits: [
      {
        title: "Complete Clog Removal",
        description:
          "We don't just punch holes through clogs—we completely remove blockages to restore full flow capacity to your drains.",
      },
      {
        title: "Advanced Equipment",
        description:
          "Our professional-grade equipment, including hydro-jetters and specialized snakes, can handle any clog from grease buildup to tree roots.",
      },
      {
        title: "Camera Inspections",
        description:
          "We use video camera inspections to identify the exact location and nature of blockages and to inspect pipes for damage or potential issues.",
      },
      {
        title: "Preventative Maintenance",
        description:
          "Regular drain cleaning prevents future clogs, eliminates odors, and extends the life of your plumbing system.",
      },
      {
        title: "Safe for Pipes",
        description:
          "Our methods are effective yet gentle on your pipes, unlike harsh chemical drain cleaners that can cause damage over time.",
      },
      {
        title: "All Drains Serviced",
        description:
          "We clean all types of drains including sinks, tubs, showers, toilets, floor drains, and main sewer lines.",
      },
    ],
    processDescription:
      "Our drain cleaning process is thorough and effective, addressing not just the symptoms but the root cause of drainage issues.",
    processImage: "/placeholder.svg?height=1000&width=800",
    process: [
      {
        title: "Initial Assessment",
        description:
          "We'll discuss the symptoms you're experiencing and the history of the problem to better understand the potential causes.",
      },
      {
        title: "Drain Inspection",
        description:
          "Using specialized cameras when necessary, we inspect the drain to identify the location and nature of the blockage.",
      },
      {
        title: "Method Selection",
        description:
          "Based on our findings, we'll select the most appropriate cleaning method, whether that's snaking, hydro-jetting, or other specialized techniques.",
      },
      {
        title: "Professional Cleaning",
        description:
          "Our technicians will thoroughly clean the drain using professional equipment that removes the clog completely without damaging pipes.",
      },
      {
        title: "Flow Verification",
        description:
          "After cleaning, we test the drain to ensure proper flow has been restored and that there are no additional blockages.",
      },
      {
        title: "Preventative Recommendations",
        description:
          "We provide advice on preventing future clogs and may recommend regular maintenance for problem-prone drains.",
      },
    ],
    faqs: [
      {
        question: "How often should drains be professionally cleaned?",
        answer:
          "For residential properties, we recommend professional drain cleaning every 1-2 years as preventative maintenance. Properties with a history of clogging issues, older plumbing systems, or large trees near sewer lines may benefit from more frequent cleaning.",
      },
      {
        question: "Are chemical drain cleaners safe to use?",
        answer:
          "We generally don't recommend chemical drain cleaners as they can damage pipes, are harmful to the environment, pose health risks, and often only partially clear clogs. Professional mechanical cleaning is more effective and safer for your plumbing system.",
      },
      {
        question: "What is hydro-jetting and when is it necessary?",
        answer:
          "Hydro-jetting uses high-pressure water to thoroughly clean the inside of pipes, removing buildup, grease, and even tree roots. It's particularly effective for severe clogs, recurring problems, or as preventative maintenance for commercial properties.",
      },
      {
        question: "Can you clean main sewer lines?",
        answer:
          "Yes, we specialize in main sewer line cleaning using powerful equipment designed specifically for these larger pipes. We can clear blockages caused by tree roots, debris buildup, or collapsed pipes.",
      },
    ],
    relatedServices: [
      {
        title: "Emergency Plumbing",
        description: "24/7 emergency plumbing services to quickly resolve urgent issues and prevent further damage.",
        href: "/services/emergency-plumbing",
      },
      {
        title: "Leak Detection & Repair",
        description: "Advanced technology to locate and fix hidden leaks with minimal disruption to your property.",
        href: "/services/leak-detection",
      },
      {
        title: "Maintenance Plans",
        description: "Preventative maintenance plans to keep your plumbing system in optimal condition year-round.",
        href: "/services/maintenance",
      },
    ],
  },
  maintenance: {
    id: "maintenance",
    title: "Plumbing Maintenance Plans",
    description:
      "Preventative maintenance plans to keep your plumbing system in optimal condition year-round and prevent costly emergencies.",
    category: "Preventative Care",
    image: "/placeholder.svg?height=800&width=1200",
    benefitDescription:
      "Our maintenance plans provide regular professional care for your plumbing system, preventing costly emergencies and extending the life of your fixtures and pipes.",
    benefits: [
      {
        title: "Prevent Emergencies",
        description:
          "Regular maintenance identifies and addresses small issues before they become major problems or emergencies.",
      },
      {
        title: "Extended System Life",
        description:
          "Proper maintenance extends the life of your plumbing system, fixtures, and appliances, saving you money in the long run.",
      },
      {
        title: "Priority Service",
        description:
          "Maintenance plan members receive priority scheduling for both routine maintenance and any necessary repairs.",
      },
      {
        title: "Discounted Repairs",
        description: "Plan members enjoy discounted rates on any repairs or additional services that may be needed.",
      },
      {
        title: "Comprehensive Inspections",
        description:
          "Our thorough inspections cover all aspects of your plumbing system, from fixtures to pipes to water heaters.",
      },
      {
        title: "Customized Schedules",
        description:
          "We tailor maintenance schedules to your specific needs, property type, and plumbing system requirements.",
      },
    ],
    processDescription:
      "Our maintenance process is systematic and thorough, designed to keep your entire plumbing system in optimal condition year-round.",
    processImage: "/placeholder.svg?height=1000&width=800",
    process: [
      {
        title: "Initial System Assessment",
        description:
          "We begin with a comprehensive evaluation of your entire plumbing system to establish a baseline and identify any immediate concerns.",
      },
      {
        title: "Customized Plan Development",
        description:
          "Based on your system's needs, usage patterns, and property type, we create a tailored maintenance plan with appropriate service intervals.",
      },
      {
        title: "Scheduled Maintenance Visits",
        description:
          "Our technicians perform thorough inspections and preventative maintenance according to your established schedule.",
      },
      {
        title: "Detailed Reporting",
        description:
          "After each visit, you receive a detailed report of findings, completed maintenance, and any recommendations for repairs or upgrades.",
      },
      {
        title: "Prompt Repairs",
        description:
          "If issues are identified during maintenance, we provide priority scheduling for necessary repairs at discounted member rates.",
      },
      {
        title: "Ongoing Optimization",
        description:
          "We continuously refine your maintenance plan based on system performance, seasonal needs, and any changes to your property.",
      },
    ],
    faqs: [
      {
        question: "What's included in a typical maintenance plan?",
        answer:
          "Our standard maintenance plans include annual or semi-annual comprehensive plumbing inspections, water heater maintenance, drain cleaning for key fixtures, water pressure testing, leak checks, and fixture inspections. Plans can be customized to include additional services.",
      },
      {
        question: "How much can I save with a maintenance plan?",
        answer:
          "Maintenance plan members typically save in three ways: preventing costly emergency repairs, extending the life of plumbing components, and receiving discounted rates (typically 10-15%) on any necessary repairs or services.",
      },
      {
        question: "Are maintenance plans available for commercial properties?",
        answer:
          "Yes, we offer specialized maintenance plans for commercial properties that address the unique demands of commercial plumbing systems, including more frequent service intervals and compliance with commercial building requirements.",
      },
      {
        question: "Can I cancel my maintenance plan if I sell my property?",
        answer:
          "Yes, our maintenance plans can be transferred to the new property owner or canceled with prorated refunds for any prepaid services that haven't been performed.",
      },
    ],
    relatedServices: [
      {
        title: "Drain Cleaning",
        description: "Professional drain cleaning services to eliminate clogs and keep your plumbing flowing smoothly.",
        href: "/services/drain-cleaning",
      },
      {
        title: "Water Heater Services",
        description:
          "Installation, repair, and maintenance for all types of water heaters to ensure reliable hot water.",
        href: "/services/water-heater",
      },
      {
        title: "Leak Detection & Repair",
        description: "Advanced technology to locate and fix hidden leaks with minimal disruption to your property.",
        href: "/services/leak-detection",
      },
    ],
  },
}

export function getServiceData(slug: string): Service | undefined {
  return services[slug]
}

export function getAllServices(): Service[] {
  return Object.values(services)
}

