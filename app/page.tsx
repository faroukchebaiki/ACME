import Link from "next/link"
import Image from "next/image"
import type { Metadata } from "next"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { ArrowRight, BarChart, Zap, Shield, Users } from "lucide-react"

export const metadata: Metadata = {
  title: "Home | Innovative Solutions for Modern Businesses",
  description:
    "ACME Corporation provides cutting-edge solutions to help your business thrive in today's competitive market.",
}

export default function Home() {
  return (
    <div className="flex flex-col min-h-screen">
      {/* Hero Section */}
      <section className="relative py-20 md:py-28 lg:py-36 overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-r from-primary/20 to-primary/5 dark:from-primary/10 dark:to-black/50 z-0" />
        <div className="container relative z-10 mx-auto px-4">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div className="flex flex-col space-y-8">
              <div>
                <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold tracking-tight mb-6">
                  Innovative Solutions for Modern Businesses
                </h1>
                <p className="text-xl text-muted-foreground mb-8 max-w-lg">
                  We help companies navigate the digital landscape with cutting-edge solutions tailored to their unique
                  needs.
                </p>
                <div className="flex flex-col sm:flex-row gap-4">
                  <Button size="lg" asChild>
                    <Link href="/contact">Get Started</Link>
                  </Button>
                  <Button size="lg" variant="outline" asChild>
                    <Link href="/services">Explore Services</Link>
                  </Button>
                </div>
              </div>
              <div className="flex items-center gap-8">
                <div className="flex -space-x-4">
                  {[1, 2, 3, 4].map((i) => (
                    <div key={i} className="w-10 h-10 rounded-full border-2 border-background overflow-hidden bg-muted">
                      <Image
                        src={`/placeholder.svg?height=40&width=40&text=${i}`}
                        alt={`Client ${i}`}
                        width={40}
                        height={40}
                        className="w-full h-full object-cover"
                      />
                    </div>
                  ))}
                </div>
                <p className="text-sm text-muted-foreground">
                  <span className="font-medium text-foreground">500+</span> businesses trust us
                </p>
              </div>
            </div>
            <div className="relative h-[400px] lg:h-[500px] rounded-lg overflow-hidden shadow-xl">
              <Image
                src="/placeholder.svg?height=1000&width=800&text=Hero+Image"
                alt="Business professionals in a meeting"
                fill
                priority
                className="object-cover"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section className="py-20 bg-slate-50 dark:bg-slate-900">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold mb-4">Why Choose ACME</h2>
            <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
              We deliver exceptional value through our comprehensive suite of services
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {[
              {
                title: "Data-Driven",
                description: "Make informed decisions with our advanced analytics and reporting tools.",
                icon: BarChart,
              },
              {
                title: "Fast & Efficient",
                description: "Streamlined processes that save you time and increase productivity.",
                icon: Zap,
              },
              {
                title: "Secure & Reliable",
                description: "Enterprise-grade security to protect your valuable business data.",
                icon: Shield,
              },
              {
                title: "Expert Support",
                description: "Dedicated team of professionals ready to assist you at every step.",
                icon: Users,
              },
            ].map((feature, index) => (
              <Card key={index} className="border-none shadow-md">
                <CardHeader>
                  <div className="w-12 h-12 rounded-lg bg-primary/10 flex items-center justify-center mb-4">
                    <feature.icon className="h-6 w-6 text-primary" />
                  </div>
                  <CardTitle>{feature.title}</CardTitle>
                </CardHeader>
                <CardContent>
                  <CardDescription className="text-base">{feature.description}</CardDescription>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Services Preview */}
      <section className="py-20">
        <div className="container mx-auto px-4">
          <div className="flex flex-col md:flex-row justify-between items-start md:items-center mb-16">
            <div>
              <h2 className="text-3xl md:text-4xl font-bold mb-4">Our Services</h2>
              <p className="text-xl text-muted-foreground max-w-2xl">
                Comprehensive solutions tailored to meet your business needs
              </p>
            </div>
            <Button variant="outline" className="mt-4 md:mt-0" asChild>
              <Link href="/services">
                View All Services
                <ArrowRight className="ml-2 h-5 w-5" />
              </Link>
            </Button>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {[
              {
                title: "Business Consulting",
                description: "Strategic guidance to optimize your operations and drive growth.",
                image: "/placeholder.svg?height=400&width=600&text=Consulting",
              },
              {
                title: "Digital Transformation",
                description: "Modernize your business with cutting-edge digital solutions.",
                image: "/placeholder.svg?height=400&width=600&text=Digital",
              },
              {
                title: "Data Analytics",
                description: "Turn your data into actionable insights for better decision making.",
                image: "/placeholder.svg?height=400&width=600&text=Analytics",
              },
            ].map((service, index) => (
              <Card key={index} className="overflow-hidden">
                <div className="relative h-48">
                  <Image src={service.image || "/placeholder.svg"} alt={service.title} fill className="object-cover" />
                </div>
                <CardHeader>
                  <CardTitle>{service.title}</CardTitle>
                </CardHeader>
                <CardContent>
                  <CardDescription className="text-base mb-4">{service.description}</CardDescription>
                  <Button variant="outline" size="sm" asChild>
                    <Link href={`/services#${service.title.toLowerCase().replace(/\s+/g, "-")}`}>
                      Learn More
                      <ArrowRight className="ml-2 h-4 w-4" />
                    </Link>
                  </Button>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Testimonials */}
      <section className="py-20 bg-slate-50 dark:bg-slate-900">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold mb-4">What Our Clients Say</h2>
            <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
              Don't just take our word for it - hear from our satisfied clients
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {[
              {
                quote:
                  "ACME transformed our business operations, resulting in a 30% increase in efficiency and significant cost savings.",
                author: "Sarah Johnson",
                role: "CEO, TechStart Inc.",
                image: "/placeholder.svg?height=100&width=100&text=SJ",
              },
              {
                quote:
                  "The team at ACME provided exceptional service and innovative solutions that helped us scale our business rapidly.",
                author: "Michael Chen",
                role: "CTO, GrowthWave",
                image: "/placeholder.svg?height=100&width=100&text=MC",
              },
              {
                quote:
                  "Working with ACME has been a game-changer for our company. Their expertise and dedication are unmatched in the industry.",
                author: "Emma Rodriguez",
                role: "Operations Director, Elevate Group",
                image: "/placeholder.svg?height=100&width=100&text=ER",
              },
            ].map((testimonial, index) => (
              <Card key={index} className="bg-background">
                <CardContent className="pt-6">
                  <div className="mb-4 text-primary">
                    {[1, 2, 3, 4, 5].map((star) => (
                      <span key={star} className="text-yellow-500">
                        ★
                      </span>
                    ))}
                  </div>
                  <p className="mb-6 italic">"{testimonial.quote}"</p>
                  <div className="flex items-center">
                    <div className="relative w-12 h-12 rounded-full overflow-hidden mr-4">
                      <Image
                        src={testimonial.image || "/placeholder.svg"}
                        alt={testimonial.author}
                        fill
                        className="object-cover"
                      />
                    </div>
                    <div>
                      <p className="font-medium">{testimonial.author}</p>
                      <p className="text-sm text-muted-foreground">{testimonial.role}</p>
                    </div>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-primary text-primary-foreground">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">Ready to Transform Your Business?</h2>
          <p className="text-xl text-primary-foreground/90 max-w-2xl mx-auto mb-8">
            Contact us today for a free consultation and take the first step towards success
          </p>
          <div className="flex flex-col sm:flex-row justify-center gap-4">
            <Button size="lg" variant="secondary" asChild>
              <Link href="/contact">
                Get Started Now
                <ArrowRight className="ml-2 h-5 w-5" />
              </Link>
            </Button>
            <Button size="lg" variant="outline" className="border-white/20 text-white hover:bg-white/10" asChild>
              <Link href="/services">Explore Our Services</Link>
            </Button>
          </div>
        </div>
      </section>

      {/* Stats Section */}
      <section className="py-20">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8 text-center">
            {[
              { value: "500+", label: "Clients Worldwide" },
              { value: "98%", label: "Client Satisfaction" },
              { value: "15+", label: "Years of Experience" },
              { value: "50+", label: "Industry Experts" },
            ].map((stat, index) => (
              <div key={index} className="p-6">
                <p className="text-4xl md:text-5xl font-bold text-primary mb-2">{stat.value}</p>
                <p className="text-muted-foreground">{stat.label}</p>
              </div>
            ))}
          </div>
        </div>
      </section>
    </div>
  )
}

