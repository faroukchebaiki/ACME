"use client"

import { useState } from "react"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { MessageSquare, Lightbulb, PenTool, Ruler, Hammer, CheckCircle } from "lucide-react"

const processSteps = [
  {
    id: "consultation",
    title: "Initial Consultation",
    description: "We begin with a detailed consultation to understand your vision, requirements, and budget.",
    icon: MessageSquare,
    content:
      "During our initial meeting, we'll discuss your project goals, timeline, and budget constraints. This helps us understand your vision and how we can bring it to life. We'll also assess your space and provide preliminary advice on what's possible.",
  },
  {
    id: "concept",
    title: "Concept Development",
    description: "Our design team creates initial concepts based on your requirements and preferences.",
    icon: Lightbulb,
    content:
      "Our creative team develops multiple design concepts tailored to your needs. We consider spatial flow, functionality, aesthetics, and your personal style to create designs that are both beautiful and practical. We'll present these concepts with mood boards and preliminary sketches.",
  },
  {
    id: "design",
    title: "Detailed Design",
    description: "We refine the chosen concept into detailed designs with material selections and specifications.",
    icon: PenTool,
    content:
      "Once you've selected a concept, we refine it into detailed designs including floor plans, elevations, 3D renderings, and material selections. This phase includes specific product recommendations, color schemes, and finishes to bring your vision to life.",
  },
  {
    id: "planning",
    title: "Planning & Permits",
    description: "We handle all necessary planning permissions and building regulations approvals.",
    icon: Ruler,
    content:
      "Our team manages the entire planning process, preparing and submitting all required documentation for planning permissions and building regulations. We liaise with local authorities and handle any revisions needed to secure approvals, ensuring your project complies with all legal requirements.",
  },
  {
    id: "construction",
    title: "Construction",
    description: "Our skilled craftsmen execute the design with precision and attention to detail.",
    icon: Hammer,
    content:
      "Our experienced construction team brings your design to life with precision and care. We maintain strict quality control throughout the build process, with regular site inspections and progress updates. Your dedicated project manager oversees every aspect of construction to ensure it meets our exacting standards.",
  },
  {
    id: "completion",
    title: "Completion & Handover",
    description: "We conduct a thorough inspection before handing over your beautifully transformed space.",
    icon: CheckCircle,
    content:
      "Before project completion, we conduct comprehensive quality checks to ensure everything meets our high standards. We'll walk you through your new space, explaining all features and providing maintenance advice. Our work comes with a comprehensive warranty, and we remain available for any post-completion support you might need.",
  },
]

export default function ProcessSteps() {
  const [activeTab, setActiveTab] = useState("consultation")

  return (
    <Tabs defaultValue="consultation" value={activeTab} onValueChange={setActiveTab} className="w-full">
      <TabsList className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 h-auto bg-transparent gap-2">
        {processSteps.map((step) => (
          <TabsTrigger
            key={step.id}
            value={step.id}
            className="flex flex-col items-center py-3 px-2 h-auto data-[state=active]:bg-primary data-[state=active]:text-primary-foreground"
          >
            <step.icon className="h-6 w-6 mb-2" />
            <span className="text-sm font-medium text-center">{step.title}</span>
          </TabsTrigger>
        ))}
      </TabsList>

      <div className="mt-8">
        {processSteps.map((step) => (
          <TabsContent key={step.id} value={step.id} className="mt-0">
            <Card>
              <CardHeader>
                <CardTitle className="flex items-center">
                  <step.icon className="h-6 w-6 mr-2 text-primary" />
                  {step.title}
                </CardTitle>
                <CardDescription>{step.description}</CardDescription>
              </CardHeader>
              <CardContent>
                <p>{step.content}</p>
              </CardContent>
            </Card>
          </TabsContent>
        ))}
      </div>
    </Tabs>
  )
}

