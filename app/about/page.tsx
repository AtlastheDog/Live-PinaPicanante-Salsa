import type { Metadata } from "next"
import { cn } from "@/lib/utils"
import { buttonVariants } from "@/components/ui/button"
import { ArrowRight } from "lucide-react"
import Link from "next/link"
import Image from "next/image"

export const metadata: Metadata = {
  title: "About",
  description: "About Pina Picante.",
}

export default function AboutPage() {
  return (
    <section className="container grid items-center gap-6 pt-6 pb-8 md:py-10">
      <div className="flex max-w-[980px] flex-col items-start gap-2">
        <h1 className="text-3xl font-extrabold leading-tight tracking-tighter sm:text-5xl md:text-6xl">
          About Pina Picante
        </h1>
        <p className="max-w-[700px] text-lg text-muted-foreground">
          Learn more about our story and commitment to quality.
        </p>
      </div>
      <div className="flex gap-4">
        <Link href="/contact" className={cn(buttonVariants())}>
          Contact Us
          <ArrowRight className="ml-2 h-4 w-4" />
        </Link>
      </div>

      <section className="container grid items-center gap-6 pt-6 pb-8 md:py-10">
        <div className="flex max-w-[980px] flex-col items-start gap-2">
          <h2 className="text-3xl font-extrabold leading-tight tracking-tighter sm:text-4xl md:text-5xl">Our Story</h2>
          <div className="mt-6">
            <div className="grid gap-12 md:grid-cols-2 md:items-center">
              <div>
                <h3 className="mb-6 text-2xl font-bold text-secondary">How It All Started</h3>
                <p className="mb-4 text-muted-foreground">
                  Pina Picante was inspired by the legacy of my grandmother, Pauline Aguirre—affectionately called
                  "Pina" by those who couldn't quite pronounce her name. Her legendary salsa lit up every family
                  gathering, and her bold spirit sparked my love for spice. When she passed in 2021, I knew I had to
                  honor her with a creation of my own. Named after her and flavored with pineapple (piña), Pina Picante
                  is a tribute to her unforgettable heat and sweetness.
                </p>
                <p className="mb-4 text-muted-foreground">
                  What started as small-batch salsas for friends and family quickly gained popularity at local farmers'
                  markets. People couldn't get enough of the fresh, vibrant flavors that captured the essence of
                  California's agricultural bounty.
                </p>
                <p className="text-muted-foreground">
                  Today, we remain committed to our roots: creating exceptional salsas using sustainable practices and
                  the finest locally sourced ingredients. Every jar is still handcrafted in small batches to ensure
                  quality and flavor—just as Pina would have wanted.
                </p>
              </div>
              <div className="relative h-[400px] overflow-hidden rounded-lg md:h-[500px]">
                <Image
                  src="/california-chili-harvest.png"
                  alt="Harvesting Peppers"
                  fill
                  className="object-cover object-center"
                />
              </div>
            </div>
          </div>
        </div>
      </section>
    </section>
  )
}
