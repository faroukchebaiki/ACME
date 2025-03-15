"use client"

import {
  Palette,
  Home,
  Building,
  Utensils,
  Briefcase,
  ClipboardList,
  type LucideIcon,
  PenTool,
  Ruler,
  Lightbulb,
} from "lucide-react"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { cn } from "@/lib/utils"
import { useState } from "react"

interface ServiceCardProps {
  title: string
  description: string
  icon: string
  className?: string
}

export default function ServiceCard({ title, description, icon, className }: ServiceCardProps) {
  const [isHovered, setIsHovered] = useState(false)

  const getIcon = (): LucideIcon => {
    switch (icon) {
      case "palette":
        return Palette
      case "home":
        return Home
      case "building":
        return Building
      case "utensils":
        return Utensils
      case "briefcase":
        return Briefcase
      case "clipboard-list":
        return ClipboardList
      case "pen-tool":
        return PenTool
      case "ruler":
        return Ruler
      default:
        return Lightbulb
    }
  }

  const Icon = getIcon()

  return (
    <Card
      className={cn(
        "transition-all duration-300 h-full",
        isHovered ? "shadow-lg -translate-y-1" : "shadow-md",
        className,
      )}
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
    >
      <CardHeader className="pb-2">
        <div
          className={cn(
            "w-12 h-12 rounded-lg flex items-center justify-center mb-4 transition-colors",
            isHovered ? "bg-primary text-white" : "bg-primary/10 text-primary",
          )}
        >
          <Icon className="h-6 w-6" />
        </div>
        <CardTitle className="text-xl">{title}</CardTitle>
      </CardHeader>
      <CardContent>
        <CardDescription className="text-base">{description}</CardDescription>
      </CardContent>
    </Card>
  )
}

