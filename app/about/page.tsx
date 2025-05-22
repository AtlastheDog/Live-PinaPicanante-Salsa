import Image from "next/image"
import { Award, Leaf, Truck } from "lucide-react"

export default function AboutPage() {
  return (
    <div className="flex flex-col">
      {/* Hero Banner */}
      <section className="relative py-12">
        <div className="absolute inset-0 z-0">
          <Image
            src="/placeholder.svg?height=600&width=1920&query=aerial view of california central coast farm with mountains and ocean"
            alt="Central Coast Farm"
            fill
            className="object-cover object-center"
          />
          <div className="absolute inset-0 bg-black/50" />
        </div>

        <div className="container relative z-10 px-4 py-12 text-center text-white md:px-6">
          <h1 className="mb-4 text-4xl font-bold md:text-5xl">Our Story</h1>
          <p className="mx-auto max-w-2xl text-lg text-white/90">
            From farm to jar, discover the passion and craftsmanship behind Piña Picante Salsa.
          </p>
        </div>
      </section>

      {/* Our Story */}
      <section className="py-16">
        <div className="container px-4 md:px-6">
          <div className="grid gap-12 md:grid-cols-2 md:items-center">
            <div>
              <h2 className="mb-6 text-3xl font-bold text-secondary">How It All Started</h2>
              <p className="mb-4 text-muted-foreground">
                Piña Picante Salsa began in 2015 when founder Maria Rodriguez, a third-generation farmer from
                California's Central Coast, decided to turn her passion for growing peppers into something more.
              </p>
              <p className="mb-4 text-muted-foreground">
                What started as small-batch salsas for friends and family quickly gained popularity at local farmers'
                markets. People couldn't get enough of the fresh, vibrant flavors that captured the essence of
                California's agricultural bounty.
              </p>
              <p className="text-muted-foreground">
                Today, we remain committed to our roots: creating exceptional salsas using sustainable practices and the
                finest locally sourced ingredients. Every jar is still handcrafted in small batches to ensure quality
                and flavor.
              </p>
            </div>
            <div className="relative h-[400px] overflow-hidden rounded-lg md:h-[500px]">
              <Image
                src="/placeholder.svg?height=800&width=600&query=farmer harvesting chili peppers in california farm"
                alt="Harvesting Peppers"
                fill
                className="object-cover object-center"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Our Values */}
      <section className="bg-accent py-16">
        <div className="container px-4 md:px-6">
          <div className="mb-10 text-center">
            <h2 className="mb-2 text-3xl font-bold text-secondary md:text-4xl">Our Values</h2>
            <p className="mx-auto max-w-2xl text-muted-foreground">
              The principles that guide everything we do at Piña Picante Salsa.
            </p>
          </div>

          <div className="grid gap-8 sm:grid-cols-2 lg:grid-cols-3">
            <div className="rounded-lg bg-white p-6 shadow-md">
              <div className="mb-4 inline-flex rounded-full bg-primary/10 p-3">
                <Leaf className="h-6 w-6 text-primary" />
              </div>
              <h3 className="mb-2 text-xl font-bold text-secondary">Sustainability</h3>
              <p className="text-muted-foreground">
                We're committed to sustainable farming practices that protect our land for future generations. From
                water conservation to organic growing methods, we strive to minimize our environmental impact.
              </p>
            </div>

            <div className="rounded-lg bg-white p-6 shadow-md">
              <div className="mb-4 inline-flex rounded-full bg-primary/10 p-3">
                <Award className="h-6 w-6 text-primary" />
              </div>
              <h3 className="mb-2 text-xl font-bold text-secondary">Quality</h3>
              <p className="text-muted-foreground">
                We never compromise on quality. From selecting the perfect peppers to our meticulous small-batch
                production process, excellence is our standard at every step.
              </p>
            </div>

            <div className="rounded-lg bg-white p-6 shadow-md">
              <div className="mb-4 inline-flex rounded-full bg-primary/10 p-3">
                <Truck className="h-6 w-6 text-primary" />
              </div>
              <h3 className="mb-2 text-xl font-bold text-secondary">Community</h3>
              <p className="text-muted-foreground">
                We support local farmers and businesses, creating a stronger community and economy. We believe in fair
                partnerships and giving back to the region that makes our products possible.
              </p>
            </div>
          </div>
        </div>
      </section>
    </div>
  )
}
