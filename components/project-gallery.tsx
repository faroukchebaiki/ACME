"use client"

import { useState } from "react"
import Image from "next/image"
import { Card, CardContent } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog"
import { ArrowLeft, ArrowRight } from "lucide-react"

// Sample project data
const projects = [
  {
    id: 1,
    title: "Modern Minimalist Home",
    category: "Residential",
    description: "Complete renovation of a 3-bedroom house with a focus on minimalist design and open spaces.",
    image: "/placeholder.svg?height=600&width=800",
    images: [
      "/placeholder.svg?height=600&width=800",
      "/placeholder.svg?height=600&width=800",
      "/placeholder.svg?height=600&width=800",
    ],
  },
  {
    id: 2,
    title: "Luxury Kitchen Remodel",
    category: "Kitchen",
    description:
      "High-end kitchen renovation featuring custom cabinetry, marble countertops, and state-of-the-art appliances.",
    image: "/placeholder.svg?height=600&width=800",
    images: [
      "/placeholder.svg?height=600&width=800",
      "/placeholder.svg?height=600&width=800",
      "/placeholder.svg?height=600&width=800",
    ],
  },
  {
    id: 3,
    title: "Contemporary Office Space",
    category: "Commercial",
    description: "Design and build of a modern office space optimized for productivity and employee wellbeing.",
    image: "/placeholder.svg?height=600&width=800",
    images: [
      "/placeholder.svg?height=600&width=800",
      "/placeholder.svg?height=600&width=800",
      "/placeholder.svg?height=600&width=800",
    ],
  },
  {
    id: 4,
    title: "Spa-Inspired Bathroom",
    category: "Bathroom",
    description: "Luxury bathroom renovation with high-end fixtures, custom tilework, and ambient lighting.",
    image: "/placeholder.svg?height=600&width=800",
    images: [
      "/placeholder.svg?height=600&width=800",
      "/placeholder.svg?height=600&width=800",
      "/placeholder.svg?height=600&width=800",
    ],
  },
]

export default function ProjectGallery() {
  const [selectedProject, setSelectedProject] = useState<(typeof projects)[0] | null>(null)
  const [currentImageIndex, setCurrentImageIndex] = useState(0)

  const nextImage = () => {
    if (!selectedProject) return
    setCurrentImageIndex((prev) => (prev === selectedProject.images.length - 1 ? 0 : prev + 1))
  }

  const prevImage = () => {
    if (!selectedProject) return
    setCurrentImageIndex((prev) => (prev === 0 ? selectedProject.images.length - 1 : prev - 1))
  }

  return (
    <>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
        {projects.map((project) => (
          <Card key={project.id} className="overflow-hidden group cursor-pointer h-full flex flex-col">
            <div className="relative h-64 overflow-hidden">
              <Image
                src={project.image || "/placeholder.svg"}
                alt={project.title}
                fill
                className="object-cover transition-transform duration-500 group-hover:scale-110"
              />
              <div className="absolute inset-0 bg-black/0 group-hover:bg-black/30 transition-colors duration-300" />
              <Dialog>
                <DialogTrigger asChild>
                  <Button
                    variant="secondary"
                    className="absolute bottom-4 left-4 opacity-0 group-hover:opacity-100 transition-opacity duration-300"
                    onClick={() => {
                      setSelectedProject(project)
                      setCurrentImageIndex(0)
                    }}
                  >
                    View Project
                  </Button>
                </DialogTrigger>
                <DialogContent className="max-w-4xl">
                  <DialogHeader>
                    <DialogTitle>{project.title}</DialogTitle>
                    <DialogDescription>{project.category}</DialogDescription>
                  </DialogHeader>
                  <div className="relative aspect-video mt-4 bg-slate-100 rounded-md overflow-hidden">
                    {selectedProject && (
                      <Image
                        src={selectedProject.images[currentImageIndex] || "/placeholder.svg"}
                        alt={`${selectedProject.title} - Image ${currentImageIndex + 1}`}
                        fill
                        className="object-cover"
                      />
                    )}
                    <Button
                      variant="ghost"
                      size="icon"
                      className="absolute top-1/2 left-2 -translate-y-1/2 bg-white/80 hover:bg-white"
                      onClick={(e) => {
                        e.stopPropagation()
                        prevImage()
                      }}
                    >
                      <ArrowLeft className="h-4 w-4" />
                    </Button>
                    <Button
                      variant="ghost"
                      size="icon"
                      className="absolute top-1/2 right-2 -translate-y-1/2 bg-white/80 hover:bg-white"
                      onClick={(e) => {
                        e.stopPropagation()
                        nextImage()
                      }}
                    >
                      <ArrowRight className="h-4 w-4" />
                    </Button>
                  </div>
                  <div className="mt-4">
                    <h3 className="font-medium text-lg">About this project</h3>
                    <p className="text-muted-foreground mt-2">{project.description}</p>
                  </div>
                </DialogContent>
              </Dialog>
            </div>
            <CardContent className="flex-grow flex flex-col justify-between p-5">
              <div>
                <h3 className="font-medium text-lg mb-1">{project.title}</h3>
                <p className="text-sm text-muted-foreground">{project.category}</p>
              </div>
            </CardContent>
          </Card>
        ))}
      </div>
    </>
  )
}

