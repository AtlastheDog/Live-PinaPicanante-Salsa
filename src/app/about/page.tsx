import Image from "next/image"
import Link from "next/link"
import { ArrowRight, Award, Leaf, Truck } from "lucide-react"

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

      {/* Our Process */}
      <section className="py-16">
        <div className="container px-4 md:px-6">
          <div className="mb-10 text-center">
            <h2 className="mb-2 text-3xl font-bold text-secondary md:text-4xl">From Farm to Jar</h2>
            <p className="mx-auto max-w-2xl text-muted-foreground">
              Our meticulous process ensures every jar delivers exceptional flavor.
            </p>
          </div>

          <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-4">
            <div className="text-center">
              <div className="mb-4 mx-auto flex h-16 w-16 items-center justify-center rounded-full bg-secondary text-2xl font-bold text-white">
                1
              </div>
              <h3 className="mb-2 text-xl font-bold text-secondary">Growing</h3>
              <p className="text-muted-foreground">
                We grow many of our peppers and herbs on our own farm using sustainable practices. What we don't grow
                ourselves comes from trusted local farmers.
              </p>
            </div>

            <div className="text-center">
              <div className="mb-4 mx-auto flex h-16 w-16 items-center justify-center rounded-full bg-secondary text-2xl font-bold text-white">
                2
              </div>
              <h3 className="mb-2 text-xl font-bold text-secondary">Harvesting</h3>
              <p className="text-muted-foreground">
                Each pepper is hand-picked at peak ripeness to ensure maximum flavor and nutritional value. Timing is
                everything when it comes to perfect salsa.
              </p>
            </div>

            <div className="text-center">
              <div className="mb-4 mx-auto flex h-16 w-16 items-center justify-center rounded-full bg-secondary text-2xl font-bold text-white">
                3
              </div>
              <h3 className="mb-2 text-xl font-bold text-secondary">Crafting</h3>
              <p className="text-muted-foreground">
                Our small-batch production process preserves the vibrant flavors of fresh ingredients. We use
                traditional methods with a modern twist.
              </p>
            </div>

            <div className="text-center">
              <div className="mb-4 mx-auto flex h-16 w-16 items-center justify-center rounded-full bg-secondary text-2xl font-bold text-white">
                4
              </div>
              <h3 className="mb-2 text-xl font-bold text-secondary">Bottling</h3>
              <p className="text-muted-foreground">
                Each jar is carefully filled, sealed, and labeled by hand. We take pride in the craftsmanship that goes
                into every step of our process.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Team Section */}
      <section className="bg-secondary py-16 text-white">
        <div className="container px-4 md:px-6">
          <div className="mb-10 text-center">
            <h2 className="mb-2 text-3xl font-bold md:text-4xl">Meet Our Team</h2>
            <p className="mx-auto max-w-2xl text-white/80">The passionate people behind Piña Picante Salsa.</p>
          </div>

          <div className="grid gap-8 sm:grid-cols-2 lg:grid-cols-3">
            <div className="overflow-hidden rounded-lg bg-white/10 p-6 backdrop-blur-sm">
              <div className="mb-4 h-64 overflow-hidden rounded-lg">
                <Image
                  src="/placeholder.svg?height=400&width=400&query=portrait of latina woman farmer in her 40s"
                  alt="Maria Rodriguez"
                  width={400}
                  height={400}
                  className="h-full w-full object-cover object-center"
                />
              </div>
              <h3 className="mb-1 text-xl font-bold">Maria Rodriguez</h3>
              <p className="mb-3 text-primary">Founder & Head Salsa Maker</p>
              <p className="text-white/80">
                A third-generation farmer with a passion for peppers and sustainable agriculture. Maria's creativity and
                commitment to quality are the heart of our company.
              </p>
            </div>

            <div className="overflow-hidden rounded-lg bg-white/10 p-6 backdrop-blur-sm">
              <div className="mb-4 h-64 overflow-hidden rounded-lg">
                <Image
                  src="/placeholder.svg?height=400&width=400&query=portrait of man in his 30s with chef coat"
                  alt="James Chen"
                  width={400}
                  height={400}
                  className="h-full w-full object-cover object-center"
                />
              </div>
              <h3 className="mb-1 text-xl font-bold">James Chen</h3>
              <p className="mb-3 text-primary">Culinary Director</p>
              <p className="text-white/80">
                A former restaurant chef with a knack for balancing flavors. James brings culinary expertise to our
                salsa development process.
              </p>
            </div>

            <div className="overflow-hidden rounded-lg bg-white/10 p-6 backdrop-blur-sm">
              <div className="mb-4 h-64 overflow-hidden rounded-lg">
                <Image
                  src="/placeholder.svg?height=400&width=400&query=portrait of woman in her 30s in farm setting"
                  alt="Sophia Kim"
                  width={400}
                  height={400}
                  className="h-full w-full object-cover object-center"
                />
              </div>
              <h3 className="mb-1 text-xl font-bold">Sophia Kim</h3>
              <p className="mb-3 text-primary">Farm Manager</p>
              <p className="text-white/80">
                With a degree in sustainable agriculture, Sophia oversees our farming operations and ensures we grow the
                best peppers possible.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Visit Us */}
      <section className="py-16">
        <div className="container px-4 md:px-6">
          <div className="grid gap-8 md:grid-cols-2 md:items-center">
            <div>
              <h2 className="mb-4 text-3xl font-bold text-secondary">Visit Our Farm</h2>
              <p className="mb-4 text-muted-foreground">
                Experience Piña Picante Salsa firsthand at our farm and production facility. We offer tours, tastings,
                and a chance to see how our salsas are made.
              </p>
              <div className="mb-6 space-y-3">
                <div className="flex items-start gap-2">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="24"
                    height="24"
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="2"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    className="h-5 w-5 text-primary"
                  >
                    <path d="M21 10c0 7-9 13-9 13s-9-6-9-13a9 9 0 0 1 18 0z" />
                    <circle cx="12" cy="10" r="3" />
                  </svg>
                  <div>
                    <p className="font-medium text-secondary">Address:</p>
                    <p className="text-muted-foreground">123 Pepper Lane, Santa Maria, CA 93455</p>
                  </div>
                </div>
                <div className="flex items-start gap-2">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="24"
                    height="24"
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="2"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    className="h-5 w-5 text-primary"
                  >
                    <path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6 19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72 12.84 12.84 0 0 0 .7 2.81 2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45 12.84 12.84 0 0 0 2.81.7A2 2 0 0 1 22 16.92z" />
                  </svg>
                  <div>
                    <p className="font-medium text-secondary">Phone:</p>
                    <p className="text-muted-foreground">(805) 555-1234</p>
                  </div>
                </div>
                <div className="flex items-start gap-2">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="24"
                    height="24"
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="2"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    className="h-5 w-5 text-primary"
                  >
                    <path d="M4 4h16c1.1 0 2 .9 2 2v12c0 1.1-.9 2-2 2H4c-1.1 0-2-.9-2-2V6c0-1.1.9-2 2-2z" />
                    <polyline points="22,6 12,13 2,6" />
                  </svg>
                  <div>
                    <p className="font-medium text-secondary">Email:</p>
                    <p className="text-muted-foreground">info@pinapicantesalsa.com</p>
                  </div>
                </div>
                <div className="flex items-start gap-2">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="24"
                    height="24"
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="2"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    className="h-5 w-5 text-primary"
                  >
                    <circle cx="12" cy="12" r="10" />
                    <polyline points="12 6 12 12 16 14" />
                  </svg>
                  <div>
                    <p className="font-medium text-secondary">Hours:</p>
                    <p className="text-muted-foreground">Thursday - Sunday: 10am - 4pm</p>
                    <p className="text-muted-foreground">Tours available by appointment</p>
                  </div>
                </div>
              </div>
              <Link
                href="/contact"
                className="inline-flex items-center gap-2 rounded-md bg-primary px-4 py-2 font-medium text-white hover:bg-primary/90 transition-colors"
              >
                Schedule a Visit <ArrowRight className="h-4 w-4" />
              </Link>
            </div>
            <div className="relative h-[400px] overflow-hidden rounded-lg">
              <Image
                src="/placeholder.svg?height=800&width=600&query=rustic farm store with hot sauce display"
                alt="Our Farm Store"
                fill
                className="object-cover object-center"
              />
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="bg-primary py-16 text-white">
        <div className="container px-4 md:px-6">
          <div className="mx-auto max-w-3xl text-center">
            <h2 className="mb-4 text-3xl font-bold md:text-4xl">Taste the Piña Picante Difference</h2>
            <p className="mb-8 text-white/90">
              Experience our handcrafted salsas and discover why they're the secret ingredient in kitchens across the
              country.
            </p>
            <Link
              href="/shop"
              className="inline-flex items-center gap-2 rounded-md bg-white px-6 py-3 font-medium text-primary hover:bg-white/90 transition-colors"
            >
              Shop Our Products <ArrowRight className="h-5 w-5" />
            </Link>
          </div>
        </div>
      </section>
    </div>
  )
}
