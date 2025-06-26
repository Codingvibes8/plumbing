import type { Metadata } from "next"
import Link from "next/link"
import Image from "next/image"
import { Button } from "@/components/ui/button"
import { Card, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Input } from "@/components/ui/input"
import { Search } from "lucide-react"

export const metadata: Metadata = {
  title: "Plumbing Tips & Blog",
  description:
    "Expert plumbing advice, tips, and industry insights to help you maintain your plumbing system and avoid costly repairs.",
}

const blogPosts = [
  {
    id: 1,
    title: "5 Signs You Need to Replace Your Water Heater",
    excerpt:
      "Learn the warning signs that indicate your water heater may be nearing the end of its lifespan and what to do about it.",
    date: "June 15, 2023",
    category: "Water Heaters",
    image: "/placeholder.svg?height=600&width=800",
    slug: "signs-replace-water-heater",
  },
  {
    id: 2,
    title: "How to Prevent Frozen Pipes This Winter",
    excerpt:
      "Protect your home from costly water damage with these essential tips for preventing pipes from freezing during cold weather.",
    date: "November 10, 2023",
    category: "Maintenance",
    image: "/placeholder.svg?height=600&width=800",
    slug: "prevent-frozen-pipes-winter",
  },
  {
    id: 3,
    title: "The Ultimate Guide to Unclogging Drains",
    excerpt:
      "From simple DIY solutions to when you should call a professional, here's everything you need to know about dealing with clogged drains.",
    date: "August 22, 2023",
    category: "Drain Cleaning",
    image: "/placeholder.svg?height=600&width=800",
    slug: "ultimate-guide-unclogging-drains",
  },
  {
    id: 4,
    title: "Water Conservation Tips for Your Home",
    excerpt:
      "Simple changes that can help you reduce water usage, lower your utility bills, and contribute to environmental conservation.",
    date: "April 18, 2023",
    category: "Conservation",
    image: "/placeholder.svg?height=600&width=800",
    slug: "water-conservation-tips-home",
  },
  {
    id: 5,
    title: "Understanding Your Home's Plumbing System",
    excerpt:
      "A comprehensive overview of your home's plumbing system and how to identify and address common issues before they become major problems.",
    date: "July 5, 2023",
    category: "Education",
    image: "/placeholder.svg?height=600&width=800",
    slug: "understanding-home-plumbing-system",
  },
  {
    id: 6,
    title: "When to DIY vs. Call a Professional Plumber",
    excerpt:
      "While some plumbing tasks can be handled by homeowners, others require professional expertise. Learn when to tackle a project yourself and when to call in the pros.",
    date: "September 30, 2023",
    category: "DIY",
    image: "/placeholder.svg?height=600&width=800",
    slug: "diy-vs-professional-plumber",
  },
]

export default function BlogPage() {
  return (
    <>
      <section className="py-12 md:py-16 lg:py-20">
        <div className="container">
          <div className="text-center max-w-3xl mx-auto mb-16">
            <Badge className="mb-4">Plumbing Tips & Blog</Badge>
            <h1 className="text-4xl md:text-5xl font-bold tracking-tight mb-4">Expert Plumbing Advice</h1>
            <p className="text-xl text-muted-foreground">
              Helpful tips, industry insights, and professional advice to help you maintain your plumbing system.
            </p>
          </div>

          <div className="flex flex-col md:flex-row gap-4 mb-12">
            <div className="relative flex-1">
              <Search className="absolute left-3 top-1/2 -translate-y-1/2 h-4 w-4 text-muted-foreground" />
              <Input placeholder="Search articles..." className="pl-10" />
            </div>
            <div className="flex gap-2 flex-wrap">
              <Button variant="outline" size="sm">
                All
              </Button>
              <Button variant="outline" size="sm">
                Maintenance
              </Button>
              <Button variant="outline" size="sm">
                Water Heaters
              </Button>
              <Button variant="outline" size="sm">
                Drain Cleaning
              </Button>
              <Button variant="outline" size="sm">
                DIY
              </Button>
            </div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {blogPosts.map((post) => (
              <Card key={post.id} className="overflow-hidden">
                <div className="relative h-48 w-full">
                  <Image src={post.image || "/placeholder.svg"} alt={post.title} fill className="object-cover" />
                </div>
                <CardHeader>
                  <div className="flex justify-between items-center mb-2">
                    <Badge variant="outline">{post.category}</Badge>
                    <span className="text-sm text-muted-foreground">{post.date}</span>
                  </div>
                  <CardTitle className="line-clamp-2">
                    <Link href={`/blog/${post.slug}`} className="hover:underline">
                      {post.title}
                    </Link>
                  </CardTitle>
                  <CardDescription className="line-clamp-3">{post.excerpt}</CardDescription>
                </CardHeader>
                <CardFooter>
                  <Button variant="ghost" className="p-0" asChild>
                    <Link href={`/blog/${post.slug}`}>Read More</Link>
                  </Button>
                </CardFooter>
              </Card>
            ))}
          </div>

          <div className="flex justify-center mt-12">
            <Button variant="outline">Load More Articles</Button>
          </div>
        </div>
      </section>

      <section className="py-16 md:py-24 bg-muted/50">
        <div className="container">
          <div className="text-center max-w-3xl mx-auto mb-16">
            <h2 className="text-3xl md:text-4xl font-bold tracking-tight mb-4">Subscribe to Our Newsletter</h2>
            <p className="text-lg text-muted-foreground">
              Get the latest plumbing tips, special offers, and industry news delivered straight to your inbox.
            </p>
          </div>

          <div className="max-w-md mx-auto">
            <form className="flex flex-col sm:flex-row gap-4">
              <Input type="email" placeholder="Your email address" required className="flex-1" />
              <Button type="submit">Subscribe</Button>
            </form>
            <p className="text-sm text-muted-foreground text-center mt-4">
              We respect your privacy. Unsubscribe at any time.
            </p>
          </div>
        </div>
      </section>
    </>
  )
}

