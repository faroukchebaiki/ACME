import { Button } from "@/components/ui/button"
import { ArrowRight } from "lucide-react"

export default function CTASection() {
  return (
    <section className="py-20 bg-primary text-primary-foreground">
      <div className="container mx-auto px-4 text-center">
        <h2 className="text-3xl md:text-4xl font-bold mb-4">Ready to Transform Your Space?</h2>
        <p className="text-lg text-primary-foreground/90 max-w-2xl mx-auto mb-8">
          Contact us today for a free consultation and take the first step towards your dream space
        </p>
        <div className="flex flex-col sm:flex-row justify-center gap-4">
          <Button size="lg" variant="secondary" className="text-base">
            Get a Free Consultation
            <ArrowRight className="ml-2 h-5 w-5" />
          </Button>
          <Button size="lg" variant="outline" className="text-base border-white/20 text-white hover:bg-white/10">
            View Our Portfolio
          </Button>
        </div>
      </div>
    </section>
  )
}

