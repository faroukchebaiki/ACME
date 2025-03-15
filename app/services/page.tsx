import Image from "next/image"
import Link from "next/link"
import type { Metadata } from "next"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { CheckCircle, ArrowRight } from "lucide-react"

export const metadata: Metadata = {
  title: "Our Services | Comprehensive Business Solutions",
  description:
    "Explore ACME Corporation's range of services designed to help your business grow, innovate, and succeed in today's competitive market.",
}

export default function ServicesPage() {
  return (
    <div className="flex flex-col min-h-screen">
      {/* Hero Section */}
      <section className="relative py-20 md:py-28 overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-r from-primary/20 to-primary/5 dark:from-primary/10 dark:to-black/50 z-0" />
        <div className="container relative z-10 mx-auto px-4">
          <div className="max-w-3xl">
            <h1 className="text-4xl md:text-5xl font-bold tracking-tight mb-6">Our Services</h1>
            <p className="text-xl text-muted-foreground mb-8 max-w-2xl">
              Comprehensive solutions designed to help your business thrive in today's competitive landscape.
            </p>
          </div>
        </div>
      </section>

      {/* Services Overview */}
      <section className="py-20">
        <div className="container mx-auto px-4">
          <Tabs defaultValue="consulting" className="w-full">
            <TabsList className="grid w-full grid-cols-1 md:grid-cols-3 h-auto">
              <TabsTrigger value="consulting" className="py-3">
                Business Consulting
              </TabsTrigger>
              <TabsTrigger value="digital" className="py-3">
                Digital Transformation
              </TabsTrigger>
              <TabsTrigger value="analytics" className="py-3">
                Data Analytics
              </TabsTrigger>
            </TabsList>

            <TabsContent value="consulting" className="mt-8">
              <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
                <div>
                  <h2 className="text-3xl font-bold mb-6" id="business-consulting">
                    Business Consulting
                  </h2>
                  <p className="text-lg text-muted-foreground mb-6">
                    Our business consulting services provide strategic guidance to help you optimize operations, drive
                    growth, and achieve your business objectives.
                  </p>
                  <div className="space-y-4 mb-8">
                    {[
                      "Strategic planning and business model development",
                      "Operational efficiency and process optimization",
                      "Market analysis and competitive positioning",
                      "Growth strategy and expansion planning",
                      "Change management and organizational development",
                    ].map((item, i) => (
                      <div key={i} className="flex items-start">
                        <CheckCircle className="h-5 w-5 text-primary mr-3 mt-0.5 flex-shrink-0" />
                        <p>{item}</p>
                      </div>
                    ))}
                  </div>
                  <div className="flex flex-col sm:flex-row gap-4">
                    <Button asChild>
                      <Link href="/contact">Get Started</Link>
                    </Button>
                    <Button variant="outline">Download Brochure</Button>
                  </div>
                </div>
                <div className="relative h-[400px] rounded-lg overflow-hidden shadow-xl">
                  <Image
                    src="/placeholder.svg?height=800&width=600&text=Business+Consulting"
                    alt="Business Consulting"
                    fill
                    className="object-cover"
                  />
                </div>
              </div>

              <div className="mt-16">
                <h3 className="text-2xl font-bold mb-6">Consulting Packages</h3>
                <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                  {[
                    {
                      title: "Starter",
                      price: "$2,500",
                      description: "Perfect for small businesses looking for initial guidance.",
                      features: [
                        "Business assessment",
                        "Strategic recommendations",
                        "30-day action plan",
                        "2 consultation sessions",
                        "Email support",
                      ],
                    },
                    {
                      title: "Professional",
                      price: "$5,000",
                      description: "Comprehensive solution for growing businesses.",
                      features: [
                        "In-depth business analysis",
                        "Customized strategy development",
                        "90-day implementation plan",
                        "4 consultation sessions",
                        "Priority email & phone support",
                        "Monthly progress review",
                      ],
                      highlighted: true,
                    },
                    {
                      title: "Enterprise",
                      price: "$10,000+",
                      description: "Tailored solutions for complex organizational needs.",
                      features: [
                        "Comprehensive business audit",
                        "Long-term strategic planning",
                        "Custom implementation roadmap",
                        "Unlimited consultation sessions",
                        "Dedicated account manager",
                        "Quarterly executive briefings",
                        "On-site workshops",
                      ],
                    },
                  ].map((pkg, index) => (
                    <Card key={index} className={pkg.highlighted ? "border-primary shadow-lg" : ""}>
                      {pkg.highlighted && (
                        <div className="bg-primary text-primary-foreground text-center py-1 text-sm font-medium">
                          Most Popular
                        </div>
                      )}
                      <CardHeader>
                        <CardTitle>{pkg.title}</CardTitle>
                        <div className="mt-2 mb-1">
                          <span className="text-3xl font-bold">{pkg.price}</span>
                          {pkg.title !== "Enterprise" && <span className="text-muted-foreground"> / project</span>}
                        </div>
                        <CardDescription>{pkg.description}</CardDescription>
                      </CardHeader>
                      <CardContent>
                        <ul className="space-y-2 mb-6">
                          {pkg.features.map((feature, i) => (
                            <li key={i} className="flex items-start">
                              <CheckCircle className="h-5 w-5 text-primary mr-2 mt-0.5 flex-shrink-0" />
                              <span>{feature}</span>
                            </li>
                          ))}
                        </ul>
                        <Button
                          className={pkg.highlighted ? "" : "bg-muted-foreground hover:bg-muted-foreground/90"}
                          asChild
                        >
                          <Link href="/contact">Get Started</Link>
                        </Button>
                      </CardContent>
                    </Card>
                  ))}
                </div>
              </div>
            </TabsContent>

            <TabsContent value="digital" className="mt-8">
              <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
                <div className="order-2 lg:order-1">
                  <div className="relative h-[400px] rounded-lg overflow-hidden shadow-xl">
                    <Image
                      src="/placeholder.svg?height=800&width=600&text=Digital+Transformation"
                      alt="Digital Transformation"
                      fill
                      className="object-cover"
                    />
                  </div>
                </div>
                <div className="order-1 lg:order-2">
                  <h2 className="text-3xl font-bold mb-6" id="digital-transformation">
                    Digital Transformation
                  </h2>
                  <p className="text-lg text-muted-foreground mb-6">
                    Our digital transformation services help businesses modernize their operations, leverage
                    cutting-edge technologies, and create seamless digital experiences.
                  </p>
                  <div className="space-y-4 mb-8">
                    {[
                      "Digital strategy development",
                      "Cloud migration and infrastructure modernization",
                      "Custom software development",
                      "Process automation and workflow optimization",
                      "Digital customer experience enhancement",
                      "Legacy system modernization",
                    ].map((item, i) => (
                      <div key={i} className="flex items-start">
                        <CheckCircle className="h-5 w-5 text-primary mr-3 mt-0.5 flex-shrink-0" />
                        <p>{item}</p>
                      </div>
                    ))}
                  </div>
                  <div className="flex flex-col sm:flex-row gap-4">
                    <Button asChild>
                      <Link href="/contact">Get Started</Link>
                    </Button>
                    <Button variant="outline">Download Brochure</Button>
                  </div>
                </div>
              </div>

              <div className="mt-16">
                <h3 className="text-2xl font-bold mb-6">Digital Transformation Packages</h3>
                <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                  {[
                    {
                      title: "Essentials",
                      price: "$10,000",
                      description: "Basic digital transformation for small businesses.",
                      features: [
                        "Digital readiness assessment",
                        "Technology stack evaluation",
                        "Basic process automation",
                        "Cloud migration planning",
                        "30-day implementation",
                      ],
                    },
                    {
                      title: "Advanced",
                      price: "$25,000",
                      description: "Comprehensive digital solutions for mid-sized businesses.",
                      features: [
                        "In-depth digital assessment",
                        "Custom digital strategy",
                        "Advanced process automation",
                        "Cloud migration execution",
                        "Custom software development",
                        "90-day implementation",
                        "Staff training",
                      ],
                      highlighted: true,
                    },
                    {
                      title: "Enterprise",
                      price: "$50,000+",
                      description: "End-to-end transformation for complex organizations.",
                      features: [
                        "Enterprise-wide digital assessment",
                        "Comprehensive digital roadmap",
                        "Full-scale process automation",
                        "Complete cloud infrastructure",
                        "Custom enterprise solutions",
                        "Legacy system integration",
                        "Ongoing support & optimization",
                        "Executive digital leadership training",
                      ],
                    },
                  ].map((pkg, index) => (
                    <Card key={index} className={pkg.highlighted ? "border-primary shadow-lg" : ""}>
                      {pkg.highlighted && (
                        <div className="bg-primary text-primary-foreground text-center py-1 text-sm font-medium">
                          Most Popular
                        </div>
                      )}
                      <CardHeader>
                        <CardTitle>{pkg.title}</CardTitle>
                        <div className="mt-2 mb-1">
                          <span className="text-3xl font-bold">{pkg.price}</span>
                          {pkg.title !== "Enterprise" && <span className="text-muted-foreground"> / project</span>}
                        </div>
                        <CardDescription>{pkg.description}</CardDescription>
                      </CardHeader>
                      <CardContent>
                        <ul className="space-y-2 mb-6">
                          {pkg.features.map((feature, i) => (
                            <li key={i} className="flex items-start">
                              <CheckCircle className="h-5 w-5 text-primary mr-2 mt-0.5 flex-shrink-0" />
                              <span>{feature}</span>
                            </li>
                          ))}
                        </ul>
                        <Button
                          className={pkg.highlighted ? "" : "bg-muted-foreground hover:bg-muted-foreground/90"}
                          asChild
                        >
                          <Link href="/contact">Get Started</Link>
                        </Button>
                      </CardContent>
                    </Card>
                  ))}
                </div>
              </div>
            </TabsContent>

            <TabsContent value="analytics" className="mt-8">
              <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
                <div>
                  <h2 className="text-3xl font-bold mb-6" id="data-analytics">
                    Data Analytics
                  </h2>
                  <p className="text-lg text-muted-foreground mb-6">
                    Our data analytics services help you harness the power of your data to gain valuable insights, make
                    informed decisions, and drive business growth.
                  </p>
                  <div className="space-y-4 mb-8">
                    {[
                      "Data strategy and architecture design",
                      "Business intelligence implementation",
                      "Predictive analytics and forecasting",
                      "Custom dashboard development",
                      "Data integration and warehousing",
                      "Machine learning and AI solutions",
                    ].map((item, i) => (
                      <div key={i} className="flex items-start">
                        <CheckCircle className="h-5 w-5 text-primary mr-3 mt-0.5 flex-shrink-0" />
                        <p>{item}</p>
                      </div>
                    ))}
                  </div>
                  <div className="flex flex-col sm:flex-row gap-4">
                    <Button asChild>
                      <Link href="/contact">Get Started</Link>
                    </Button>
                    <Button variant="outline">Download Brochure</Button>
                  </div>
                </div>
                <div className="relative h-[400px] rounded-lg overflow-hidden shadow-xl">
                  <Image
                    src="/placeholder.svg?height=800&width=600&text=Data+Analytics"
                    alt="Data Analytics"
                    fill
                    className="object-cover"
                  />
                </div>
              </div>

              <div className="mt-16">
                <h3 className="text-2xl font-bold mb-6">Analytics Packages</h3>
                <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                  {[
                    {
                      title: "Basic",
                      price: "$5,000",
                      description: "Essential analytics for small businesses.",
                      features: [
                        "Data assessment",
                        "Basic data visualization",
                        "Standard reporting dashboards",
                        "Data quality recommendations",
                        "30-day implementation",
                      ],
                    },
                    {
                      title: "Professional",
                      price: "$15,000",
                      description: "Advanced analytics for growing businesses.",
                      features: [
                        "Comprehensive data assessment",
                        "Custom data visualization",
                        "Interactive dashboards",
                        "Predictive analytics models",
                        "Data integration services",
                        "60-day implementation",
                        "Staff training",
                      ],
                      highlighted: true,
                    },
                    {
                      title: "Enterprise",
                      price: "$30,000+",
                      description: "Comprehensive analytics for large organizations.",
                      features: [
                        "Enterprise data strategy",
                        "Advanced analytics architecture",
                        "Custom BI solution development",
                        "Machine learning implementation",
                        "Real-time analytics capabilities",
                        "Data governance framework",
                        "Ongoing optimization & support",
                        "Executive analytics training",
                      ],
                    },
                  ].map((pkg, index) => (
                    <Card key={index} className={pkg.highlighted ? "border-primary shadow-lg" : ""}>
                      {pkg.highlighted && (
                        <div className="bg-primary text-primary-foreground text-center py-1 text-sm font-medium">
                          Most Popular
                        </div>
                      )}
                      <CardHeader>
                        <CardTitle>{pkg.title}</CardTitle>
                        <div className="mt-2 mb-1">
                          <span className="text-3xl font-bold">{pkg.price}</span>
                          {pkg.title !== "Enterprise" && <span className="text-muted-foreground"> / project</span>}
                        </div>
                        <CardDescription>{pkg.description}</CardDescription>
                      </CardHeader>
                      <CardContent>
                        <ul className="space-y-2 mb-6">
                          {pkg.features.map((feature, i) => (
                            <li key={i} className="flex items-start">
                              <CheckCircle className="h-5 w-5 text-primary mr-2 mt-0.5 flex-shrink-0" />
                              <span>{feature}</span>
                            </li>
                          ))}
                        </ul>
                        <Button
                          className={pkg.highlighted ? "" : "bg-muted-foreground hover:bg-muted-foreground/90"}
                          asChild
                        >
                          <Link href="/contact">Get Started</Link>
                        </Button>
                      </CardContent>
                    </Card>
                  ))}
                </div>
              </div>
            </TabsContent>
          </Tabs>
        </div>
      </section>

      {/* Process Section */}
      <section className="py-20 bg-slate-50 dark:bg-slate-900">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold mb-4">Our Process</h2>
            <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
              How we work with you to deliver exceptional results
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {[
              {
                step: "01",
                title: "Discovery",
                description:
                  "We begin by understanding your business, challenges, and objectives through in-depth consultations.",
              },
              {
                step: "02",
                title: "Strategy",
                description: "Our team develops a customized strategy tailored to your specific needs and goals.",
              },
              {
                step: "03",
                title: "Implementation",
                description: "We execute the strategy with precision, keeping you informed throughout the process.",
              },
              {
                step: "04",
                title: "Optimization",
                description: "We continuously monitor results and make adjustments to ensure optimal performance.",
              },
            ].map((process, index) => (
              <Card key={index} className="border-none shadow-md">
                <CardHeader>
                  <span className="text-4xl font-bold text-primary/20">{process.step}</span>
                  <CardTitle className="mt-2">{process.title}</CardTitle>
                </CardHeader>
                <CardContent>
                  <CardDescription className="text-base">{process.description}</CardDescription>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* FAQ Section */}
      <section className="py-20">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold mb-4">Frequently Asked Questions</h2>
            <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
              Answers to common questions about our services
            </p>
          </div>

          <div className="max-w-3xl mx-auto">
            {[
              {
                question: "How long does a typical project take?",
                answer:
                  "Project timelines vary depending on scope and complexity. Small projects may take 4-6 weeks, while larger enterprise initiatives can span 3-6 months. During our initial consultation, we'll provide a detailed timeline based on your specific requirements.",
              },
              {
                question: "Do you work with small businesses or only large enterprises?",
                answer:
                  "We work with businesses of all sizes, from startups and small businesses to mid-sized companies and large enterprises. Our services are scalable and can be tailored to meet the needs and budgets of organizations at any stage of growth.",
              },
              {
                question: "How do you measure the success of your services?",
                answer:
                  "We establish clear, measurable KPIs at the beginning of each project, aligned with your business objectives. These might include ROI, efficiency improvements, cost savings, revenue growth, or other relevant metrics. We provide regular reports tracking progress against these benchmarks.",
              },
              {
                question: "What industries do you specialize in?",
                answer:
                  "While we have experience across many industries, we have particular expertise in healthcare, financial services, retail, manufacturing, and technology. Our diverse team brings industry-specific knowledge to each project, ensuring solutions that address unique sector challenges.",
              },
              {
                question: "Do you offer ongoing support after project completion?",
                answer:
                  "Yes, we offer various support and maintenance packages to ensure the continued success of your implementation. These range from basic technical support to comprehensive managed services, depending on your needs and preferences.",
              },
            ].map((faq, index) => (
              <div key={index} className="mb-6 pb-6 border-b last:border-0">
                <h3 className="text-xl font-bold mb-3">{faq.question}</h3>
                <p className="text-muted-foreground">{faq.answer}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-primary text-primary-foreground">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">Ready to Get Started?</h2>
          <p className="text-xl text-primary-foreground/90 max-w-2xl mx-auto mb-8">
            Contact us today for a free consultation and take the first step towards transforming your business
          </p>
          <Button size="lg" variant="secondary" asChild>
            <Link href="/contact">
              Contact Us Now
              <ArrowRight className="ml-2 h-5 w-5" />
            </Link>
          </Button>
        </div>
      </section>
    </div>
  )
}

