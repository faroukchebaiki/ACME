import Image from "next/image"
import Link from "next/link"
import type { Metadata } from "next"
import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"
import { CheckCircle, ArrowRight } from "lucide-react"

export const metadata: Metadata = {
  title: "About Us | Our Story, Mission, and Values",
  description:
    "Learn about ACME Corporation's journey, our mission to transform businesses, and the values that drive our success.",
}

export default function AboutPage() {
  return (
    <div className="flex flex-col min-h-screen">
      {/* Hero Section */}
      <section className="relative py-20 md:py-28 overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-r from-primary/20 to-primary/5 dark:from-primary/10 dark:to-black/50 z-0" />
        <div className="container relative z-10 mx-auto px-4">
          <div className="max-w-3xl">
            <h1 className="text-4xl md:text-5xl font-bold tracking-tight mb-6">About ACME Corporation</h1>
            <p className="text-xl text-muted-foreground mb-8 max-w-2xl">
              We're on a mission to transform how businesses operate in the digital age through innovative solutions and
              exceptional service.
            </p>
          </div>
        </div>
      </section>

      {/* Our Story */}
      <section className="py-20">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div className="relative h-[400px] lg:h-[500px] rounded-lg overflow-hidden shadow-xl order-2 lg:order-1">
              <Image
                src="/placeholder.svg?height=1000&width=800&text=Our+Story"
                alt="ACME Corporation office"
                fill
                className="object-cover"
              />
            </div>
            <div className="order-1 lg:order-2">
              <h2 className="text-3xl md:text-4xl font-bold mb-6">Our Story</h2>
              <p className="text-lg text-muted-foreground mb-6">
                Founded in 2010, ACME Corporation began with a simple mission: to help businesses navigate the
                increasingly complex digital landscape. What started as a small consulting firm has grown into a
                comprehensive business solutions provider with clients across the globe.
              </p>
              <p className="text-lg text-muted-foreground mb-6">
                Our journey has been defined by continuous innovation, a commitment to excellence, and a deep
                understanding of our clients' needs. Through economic ups and downs, technological revolutions, and
                market shifts, we've remained steadfast in our dedication to delivering exceptional value.
              </p>
              <p className="text-lg text-muted-foreground">
                Today, ACME Corporation stands as a leader in the industry, trusted by businesses of all sizes to
                provide the insights, tools, and strategies they need to thrive in a competitive marketplace.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Mission & Values */}
      <section className="py-20 bg-slate-50 dark:bg-slate-900">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold mb-4">Our Mission & Values</h2>
            <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
              The principles that guide everything we do
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-start">
            <div>
              <h3 className="text-2xl font-bold mb-6">Our Mission</h3>
              <p className="text-lg text-muted-foreground mb-6">
                To empower businesses with innovative solutions that drive growth, efficiency, and competitive advantage
                in an ever-evolving digital landscape.
              </p>
              <p className="text-lg text-muted-foreground">
                We're committed to being more than just a service provider – we aim to be a true partner in our clients'
                success, offering strategic guidance, cutting-edge technology, and exceptional support every step of the
                way.
              </p>
            </div>

            <div>
              <h3 className="text-2xl font-bold mb-6">Our Values</h3>
              <div className="space-y-4">
                {[
                  {
                    title: "Excellence",
                    description:
                      "We strive for excellence in everything we do, from the solutions we develop to the service we provide.",
                  },
                  {
                    title: "Innovation",
                    description: "We embrace change and continuously seek new ways to solve problems and create value.",
                  },
                  {
                    title: "Integrity",
                    description:
                      "We operate with honesty, transparency, and ethical standards that earn our clients' trust.",
                  },
                  {
                    title: "Collaboration",
                    description:
                      "We believe in the power of teamwork, both within our organization and with our clients.",
                  },
                  {
                    title: "Client Focus",
                    description:
                      "We put our clients at the center of everything we do, ensuring their success is our success.",
                  },
                ].map((value, index) => (
                  <div key={index} className="flex items-start">
                    <CheckCircle className="h-6 w-6 text-primary mr-3 mt-0.5 flex-shrink-0" />
                    <div>
                      <h4 className="font-medium text-lg">{value.title}</h4>
                      <p className="text-muted-foreground">{value.description}</p>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Team Section */}
      <section className="py-20">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold mb-4">Meet Our Leadership Team</h2>
            <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
              The experienced professionals guiding our company
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {[
              {
                name: "John Smith",
                role: "Chief Executive Officer",
                bio: "With over 20 years of experience in the industry, John leads our company with vision and strategic insight.",
                image: "/placeholder.svg?height=400&width=400&text=JS",
              },
              {
                name: "Sarah Johnson",
                role: "Chief Technology Officer",
                bio: "Sarah brings cutting-edge technical expertise and innovation leadership to our product development.",
                image: "/placeholder.svg?height=400&width=400&text=SJ",
              },
              {
                name: "Michael Chen",
                role: "Chief Operations Officer",
                bio: "Michael ensures our operations run smoothly and efficiently to deliver exceptional service to our clients.",
                image: "/placeholder.svg?height=400&width=400&text=MC",
              },
              {
                name: "Emma Rodriguez",
                role: "Chief Marketing Officer",
                bio: "Emma drives our brand strategy and market presence with creativity and data-driven approaches.",
                image: "/placeholder.svg?height=400&width=400&text=ER",
              },
            ].map((member, index) => (
              <Card key={index} className="overflow-hidden">
                <div className="relative h-64">
                  <Image src={member.image || "/placeholder.svg"} alt={member.name} fill className="object-cover" />
                </div>
                <CardContent className="pt-6">
                  <h3 className="text-xl font-bold mb-1">{member.name}</h3>
                  <p className="text-primary font-medium mb-3">{member.role}</p>
                  <p className="text-muted-foreground">{member.bio}</p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Timeline */}
      <section className="py-20 bg-slate-50 dark:bg-slate-900">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold mb-4">Our Journey</h2>
            <p className="text-xl text-muted-foreground max-w-2xl mx-auto">Key milestones in our company's history</p>
          </div>

          <div className="max-w-3xl mx-auto">
            {[
              {
                year: "2010",
                title: "Founded",
                description: "ACME Corporation was established with a focus on business consulting services.",
              },
              {
                year: "2013",
                title: "Expansion",
                description: "Expanded our service offerings to include digital transformation solutions.",
              },
              {
                year: "2015",
                title: "Global Reach",
                description: "Opened our first international office and began serving clients worldwide.",
              },
              {
                year: "2018",
                title: "Innovation Award",
                description: "Recognized with the Industry Innovation Award for our proprietary analytics platform.",
              },
              {
                year: "2020",
                title: "Strategic Partnerships",
                description:
                  "Formed strategic partnerships with leading technology providers to enhance our offerings.",
              },
              {
                year: "2023",
                title: "Today",
                description: "Continuing to grow and innovate, serving over 500 clients across 30 countries.",
              },
            ].map((milestone, index) => (
              <div key={index} className="relative pl-10 pb-10 border-l-2 border-primary/30 last:border-0 last:pb-0">
                <div className="absolute left-[-8px] top-0 w-4 h-4 rounded-full bg-primary" />
                <div className="mb-1 text-sm font-medium text-primary">{milestone.year}</div>
                <h3 className="text-lg font-bold mb-2">{milestone.title}</h3>
                <p className="text-muted-foreground">{milestone.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">Join Our Journey</h2>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto mb-8">
            Partner with us to transform your business and achieve your goals
          </p>
          <Button size="lg" asChild>
            <Link href="/contact">
              Contact Us Today
              <ArrowRight className="ml-2 h-5 w-5" />
            </Link>
          </Button>
        </div>
      </section>
    </div>
  )
}

