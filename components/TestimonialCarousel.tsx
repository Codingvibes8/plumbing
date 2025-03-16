
"use client"

import { useState, useEffect } from "react"
import { Card, CardContent, CardFooter } from "@/components/ui/card"
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar"
import { Button } from "@/components/ui/button"
import { ChevronLeft, ChevronRight, Star } from "lucide-react"
import { cn } from "@/lib/utils"
import {testimonials} from '@/constants/data'


export function TestimonialCarousel() {
    const [current, setCurrent] = useState(0)
    const [autoplay, setAutoplay] = useState(true)

    const next = () => {
        setCurrent((current + 1) % Math.ceil(testimonials.length / getItemsPerView()))
    }

    const prev = () => {
        setCurrent(
            (current - 1 + Math.ceil(testimonials.length / getItemsPerView())) %
            Math.ceil(testimonials.length / getItemsPerView()),
        )
    }

    const getItemsPerView = () => {
        if (typeof window === "undefined") return 1
        if (window.innerWidth >= 1024) return 3
        if (window.innerWidth >= 768) return 2
        return 1
    }

    useEffect(() => {
        if (!autoplay) return

        const interval = setInterval(() => {
            next()
        }, 5000)

        return () => clearInterval(interval)
    }, [current, autoplay])

    const visibleTestimonials = () => {
        const itemsPerView = getItemsPerView()
        const startIndex = current * itemsPerView
        return testimonials.slice(startIndex, startIndex + itemsPerView)
    }

    return (
        <div className="relative">
            <div className="flex overflow-hidden">
                <div
                    className="flex transition-transform duration-500 ease-in-out w-full"
                    style={{
                        transform: `translateX(-${current * 100}%)`,
                        display: "grid",
                        gridTemplateColumns: `repeat(${getItemsPerView()}, 1fr)`,
                        gap: "1rem",
                    }}
                >
                    {testimonials.map((testimonial) => (
                        <Card key={testimonial.id} className="h-full">
                            <CardContent className="pt-6">
                                <div className="flex mb-2">
                                    {[...Array(5)].map((_, i) => (
                                        <Star
                                            key={i}
                                            className={cn(
                                                "h-4 w-4",
                                                i < testimonial.rating ? "text-yellow-500 fill-yellow-500" : "text-muted-foreground",
                                            )}
                                        />
                                    ))}
                                </div>
                                <p className="text-muted-foreground">{testimonial.text}</p>
                            </CardContent>
                            <CardFooter>
                                <div className="flex items-center gap-4">
                                    <Avatar>
                                        <AvatarImage src={testimonial.avatar} alt={testimonial.name} />
                                        <AvatarFallback>{testimonial.name.charAt(0)}</AvatarFallback>
                                    </Avatar>
                                    <div>
                                        <p className="font-medium">{testimonial.name}</p>
                                        <p className="text-sm text-muted-foreground">{testimonial.location}</p>
                                    </div>
                                </div>
                            </CardFooter>
                        </Card>
                    ))}
                </div>
            </div>

            <div className="flex justify-center mt-6 gap-2">
                <Button
                    variant="outline"
                    size="icon"
                    onClick={() => {
                        prev()
                        setAutoplay(false)
                    }}
                    aria-label="Previous testimonial"
                >
                    <ChevronLeft className="h-4 w-4" />
                </Button>
                <Button
                    variant="outline"
                    size="icon"
                    onClick={() => {
                        next()
                        setAutoplay(false)
                    }}
                    aria-label="Next testimonial"
                >
                    <ChevronRight className="h-4 w-4" />
                </Button>
            </div>
        </div>
    )
}

