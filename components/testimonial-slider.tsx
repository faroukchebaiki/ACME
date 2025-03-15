"use client"

import { useState, useEffect } from "react"
import { Card, CardContent } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { ArrowLeft, ArrowRight, Quote } from "lucide-react"
import Image from "next/image"

// Sample testimonial data
const testimonials = [
  {
    id: 1,
    name: "Sarah Johnson",
    role: "Homeowner",
    quote:
      "REnova transformed our outdated kitchen into a stunning, functional space that has become the heart of our home. Their attention to detail and commitment to quality exceeded our expectations.",
    image: "/placeholder.svg?height=100&width=100",
  },
  {
    id: 2,
    name: "Michael Chen",
    role: "Business Owner",
    quote:
      "Working with REnova on our office renovation was a seamless experience. They understood our vision and delivered a space that perfectly balances aesthetics and functionality.",
    image: "/placeholder.svg?height=100&width=100",
  },
  {
    id: 3,
    name: "Emma Williams",
    role: "Interior Designer",
    quote:
      "As a designer, I have high standards for construction partners. REnova consistently delivers exceptional craftsmanship and innovative solutions that bring my designs to life.",
    image: "/placeholder.svg?height=100&width=100",
  },
]

export default function TestimonialSlider() {
  const [currentIndex, setCurrentIndex] = useState(0)
  const [isAnimating, setIsAnimating] = useState(false)

  const nextTestimonial = () => {
    if (isAnimating) return
    setIsAnimating(true)
    setCurrentIndex((prev) => (prev === testimonials.length - 1 ? 0 : prev + 1))
    setTimeout(() => setIsAnimating(false), 500)
  }

  const prevTestimonial = () => {
    if (isAnimating) return
    setIsAnimating(true)
    setCurrentIndex((prev) => (prev === 0 ? testimonials.length - 1 : prev - 1))
    setTimeout(() => setIsAnimating(false), 500)
  }

  useEffect(() => {
    const interval = setInterval(() => {
      nextTestimonial()
    }, 8000)

    return () => clearInterval(interval)
  }, [])

  return (
    <div className="relative max-w-4xl mx-auto">
      <div className="absolute -top-10 left-1/2 -translate-x-1/2 text-primary opacity-20">
        <Quote className="h-20 w-20" />
      </div>

      <div className="overflow-hidden relative">
        <div
          className="flex transition-transform duration-500 ease-in-out"
          style={{ transform: `translateX(-${currentIndex * 100}%)` }}
        >
          {testimonials.map((testimonial) => (
            <Card key={testimonial.id} className="w-full flex-shrink-0 bg-transparent border-none shadow-none">
              <CardContent className="pt-6 px-4 text-center">
                <blockquote className="text-xl italic mb-8 text-slate-300">"{testimonial.quote}"</blockquote>
                <div className="flex flex-col items-center">
                  <div className="relative w-16 h-16 rounded-full overflow-hidden mb-4 border-2 border-primary">
                    <Image
                      src={testimonial.image || "/placeholder.svg"}
                      alt={testimonial.name}
                      fill
                      className="object-cover"
                    />
                  </div>
                  <div className="text-center">
                    <h4 className="font-medium text-lg">{testimonial.name}</h4>
                    <p className="text-slate-400">{testimonial.role}</p>
                  </div>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>

      <div className="flex justify-center mt-8 gap-2">
        <Button
          variant="outline"
          size="icon"
          onClick={prevTestimonial}
          className="bg-slate-800 border-slate-700 hover:bg-slate-700 hover:text-white"
        >
          <ArrowLeft className="h-5 w-5" />
        </Button>
        <div className="flex items-center gap-2 mx-4">
          {testimonials.map((_, i) => (
            <button
              key={i}
              className={`w-2 h-2 rounded-full transition-colors ${i === currentIndex ? "bg-primary" : "bg-slate-600"}`}
              onClick={() => {
                setIsAnimating(true)
                setCurrentIndex(i)
                setTimeout(() => setIsAnimating(false), 500)
              }}
            />
          ))}
        </div>
        <Button
          variant="outline"
          size="icon"
          onClick={nextTestimonial}
          className="bg-slate-800 border-slate-700 hover:bg-slate-700 hover:text-white"
        >
          <ArrowRight className="h-5 w-5" />
        </Button>
      </div>
    </div>
  )
}

