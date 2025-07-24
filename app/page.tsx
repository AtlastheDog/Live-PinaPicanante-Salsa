import Image from "next/image"
import Link from "next/link"
import { ArrowRight, Award, Leaf, ShoppingBag, Heart } from "lucide-react"
import { ThemeProvider } from "@/components/theme-provider"

export default function Home() {
  return (
    <ThemeProvider attribute="class" defaultTheme="light" enableSystem disableTransitionOnChange>
      <div className="flex flex-col">
        {/* Hero Section */}
        <section className="relative flex min-h-[80vh] items-center justify-center overflow-hidden">
          <div className="absolute inset-0 z-0">
            <Image
              src="/california-farmland-aerial.png"
              alt="California Central Coast"
              fill
              priority
              className="object-cover object-center"
            />
            <div className="absolute inset-0 bg-black/40" />
          </div>

          <div className="container relative z-10 px-4 py-24 text-center text-white md:px-6">
            <Image
              src="/pina-picante-logo.png"
              alt="Piña Picante Salsa"
              width={300}
              height={450}
              className="mx-auto mb-8"
            />
            <h1 className="mb-6 text-4xl font-bold leading-tight md:text-6xl">
              Handcrafted Salsa <br />
              <span className="text-primary">Made in California</span>
            </h1>
            <p className="mx-auto mb-8 max-w-2xl text-lg text-white/90 md:text-xl">
              Small-batch salsas crafted with fresh, locally sourced ingredients from California's Central Coast.
            </p>
            <div className="flex flex-col justify-center gap-4 sm:flex-row">
              <Link
                href="/products"
                className="rounded-md bg-primary px-6 py-3 font-medium text-white hover:bg-primary/90 transition-colors"
              >
                Shop Now
              </Link>
              <Link
                href="/about"
                className="rounded-md bg-white/20 px-6 py-3 font-medium text-white backdrop-blur-sm hover:bg-white/30 transition-colors"
              >
                Our Story
              </Link>
              <Link
                href="/contact?support=true"
                className="inline-flex items-center gap-2 rounded-md bg-gradient-to-r from-pink-500 to-rose-500 px-6 py-3 font-medium text-white shadow-lg hover:from-pink-600 hover:to-rose-600 transition-all transform hover:scale-105"
              >
                <Heart className="h-5 w-5" />
                Show Support!
                <span className="text-sm opacity-90">Click here to indicate interest</span>
              </Link>
            </div>
          </div>
        </section>

        {/* Support Badge - Floating */}
        <div className="fixed bottom-6 right-6 z-50 md:hidden">
          <Link
            href="/contact?support=true"
            className="flex items-center gap-2 rounded-full bg-gradient-to-r from-pink-500 to-rose-500 px-4 py-3 text-sm font-medium text-white shadow-lg hover:from-pink-600 hover:to-rose-600 transition-all transform hover:scale-105"
          >
            <Heart className="h-4 w-4" />
            Show Support!
          </Link>
        </div>

        {/* Featured Products */}
        <section className="bg-accent py-16">
          <div className="container px-4 md:px-6">
            <div className="mb-10 text-center">
              <h2 className="mb-2 text-3xl font-bold text-secondary md:text-4xl">Featured Products</h2>
              <p className="mx-auto max-w-2xl text-muted-foreground">
                Discover our most popular salsas, crafted with care and the finest ingredients.
              </p>
            </div>

            <div className="grid grid-cols-1 gap-8 sm:grid-cols-2 lg:grid-cols-3">
              {/* Product Card 1 - Piña Picante Hot */}
              <div className="group overflow-hidden rounded-lg bg-white shadow-md transition-all hover:shadow-lg">
                <div className="relative h-64 overflow-hidden">
                  <div className="absolute left-0 top-0 z-10 rounded-br-lg bg-gradient-to-r from-purple-600 to-pink-600 px-3 py-1 text-sm font-bold text-white shadow-lg">
                    Seen at Mid-State Fair
                  </div>
                  <Image
                    src="/pineapple-habanero-mason-jar.png"
                    alt="Piña Picante - Hot"
                    fill
                    className="object-cover object-center transition-transform duration-300 group-hover:scale-105"
                  />
                </div>
                <div className="p-6">
                  <h3 className="mb-2 text-xl font-bold text-secondary">Piña Picante - Hot</h3>
                  <p className="mb-4 text-muted-foreground">
                    Our signature blend with the perfect balance of pineapple sweetness and habanero heat.
                  </p>
                  <div className="flex items-center justify-between">
                    <span className="text-lg font-bold text-primary">$14.59</span>
                    <Link
                      href="/products/pina-picante-hot"
                      className="flex items-center gap-1 font-medium text-secondary hover:text-primary transition-colors"
                    >
                      View Details <ArrowRight className="h-4 w-4" />
                    </Link>
                  </div>
                </div>
              </div>

              {/* Product Card 2 - Piña Picante Mild */}
              <div className="group overflow-hidden rounded-lg bg-white shadow-md transition-all hover:shadow-lg">
                <div className="relative h-64 overflow-hidden">
                  <Image
                    src="/pina-picante-mild-jar.webp"
                    alt="Piña Picante - Mild"
                    fill
                    className="object-cover object-center transition-transform duration-300 group-hover:scale-105"
                  />
                </div>
                <div className="p-6">
                  <h3 className="mb-2 text-xl font-bold text-secondary">Piña Picante - Mild</h3>
                  <p className="mb-4 text-muted-foreground">
                    A gentle blend of pineapple and jalapeños for a milder, family-friendly kick.
                  </p>
                  <div className="flex items-center justify-between">
                    <span className="text-lg font-bold text-primary">$12.99</span>
                    <Link
                      href="/products/pina-picante-mild"
                      className="flex items-center gap-1 font-medium text-secondary hover:text-primary transition-colors"
                    >
                      View Details <ArrowRight className="h-4 w-4" />
                    </Link>
                  </div>
                </div>
              </div>

              {/* Product Card 3 - Classic Hot */}
              <div className="group overflow-hidden rounded-lg bg-white shadow-md transition-all hover:shadow-lg">
                <div className="relative h-64 overflow-hidden">
                  <Image
                    src="/classic-hot-salsa-jar.webp"
                    alt="Classic - Hot"
                    fill
                    className="object-cover object-center transition-transform duration-300 group-hover:scale-105"
                  />
                </div>
                <div className="p-6">
                  <h3 className="mb-2 text-xl font-bold text-secondary">Classic - Hot</h3>
                  <p className="mb-4 text-muted-foreground">
                    Traditional salsa with roasted habaneros and jalapeños for authentic heat.
                  </p>
                  <div className="flex items-center justify-between">
                    <span className="text-lg font-bold text-primary">$12.99</span>
                    <Link
                      href="/products/classic-hot"
                      className="flex items-center gap-1 font-medium text-secondary hover:text-primary transition-colors"
                    >
                      View Details <ArrowRight className="h-4 w-4" />
                    </Link>
                  </div>
                </div>
              </div>
            </div>

            <div className="mt-10 text-center">
              <Link
                href="/products"
                className="inline-flex items-center gap-2 rounded-md bg-primary px-6 py-3 font-medium text-white hover:bg-primary/90 transition-colors"
              >
                View All Products <ShoppingBag className="h-5 w-5" />
              </Link>
            </div>
          </div>
        </section>

        {/* About Section */}
        <section className="py-16">
          <div className="container px-4 md:px-6">
            <div className="grid items-center gap-8 md:grid-cols-2">
              <div className="relative h-[400px] overflow-hidden rounded-lg md:h-[500px]">
                <Image
                  src="/farm-dog-deck.png"
                  alt="Farm life at Piña Picante - our beloved farm dog enjoying the peaceful countryside"
                  fill
                  className="object-cover object-center"
                />
              </div>

              <div>
                <h2 className="mb-4 text-3xl font-bold text-secondary md:text-4xl">Our Story</h2>
                <p className="mb-6 text-muted-foreground">
                  Piña Picante Salsa was born from a passion for bold flavors and sustainable agriculture. Our journey
                  began on a small farm in California's Central Coast, where we grow the finest peppers, herbs, and
                  produce for our handcrafted salsas.
                </p>
                <p className="mb-6 text-muted-foreground">
                  Every jar is made in small batches using traditional methods, ensuring the highest quality and most
                  vibrant flavors. We're committed to supporting local farmers and sustainable practices, all while
                  enjoying the peaceful farm life that inspires our work.
                </p>
                <Link href="/about" className="inline-flex items-center gap-2 font-medium text-primary hover:underline">
                  Learn More About Our Process <ArrowRight className="h-4 w-4" />
                </Link>
              </div>
            </div>
          </div>
        </section>

        {/* Features Section */}
        <section className="bg-secondary py-16 text-white">
          <div className="container px-4 md:px-6">
            <div className="mb-10 text-center">
              <h2 className="mb-2 text-3xl font-bold md:text-4xl">Why Choose Our Salsa?</h2>
              <p className="mx-auto max-w-2xl text-white/80">
                We take pride in creating exceptional salsas that stand out from the crowd.
              </p>
            </div>

            <div className="grid grid-cols-1 gap-8 sm:grid-cols-2 lg:grid-cols-3">
              <div className="rounded-lg bg-white/10 p-6 backdrop-blur-sm">
                <div className="mb-4 inline-flex rounded-full bg-primary/20 p-3">
                  <Leaf className="h-6 w-6 text-primary" />
                </div>
                <h3 className="mb-2 text-xl font-bold">Locally Sourced</h3>
                <p className="text-white/80">
                  We grow many of our ingredients on our own farm and source the rest from local California farmers.
                </p>
              </div>

              <div className="rounded-lg bg-white/10 p-6 backdrop-blur-sm">
                <div className="mb-4 inline-flex rounded-full bg-primary/20 p-3">
                  <Award className="h-6 w-6 text-primary" />
                </div>
                <h3 className="mb-2 text-xl font-bold">Award-Winning</h3>
                <p className="text-white/80">
                  Our salsas have won multiple awards at regional and national salsa competitions.
                </p>
              </div>

              <div className="rounded-lg bg-white/10 p-6 backdrop-blur-sm">
                <div className="mb-4 inline-flex rounded-full bg-primary/20 p-3">
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
                    className="h-6 w-6 text-primary"
                  >
                    <path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10" />
                    <path d="M8 11h8" />
                    <path d="M8 15h8" />
                    <path d="M11 7h2" />
                  </svg>
                </div>
                <h3 className="mb-2 text-xl font-bold">No Preservatives</h3>
                <p className="text-white/80">
                  We never use artificial preservatives, colors, or flavors. Just real ingredients for real flavor.
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* Community Support Section */}
        <section className="bg-gradient-to-r from-pink-50 to-rose-50 py-16">
          <div className="container px-4 md:px-6">
            <div className="mx-auto max-w-3xl text-center">
              <div className="mb-6 inline-flex rounded-full bg-gradient-to-r from-pink-500 to-rose-500 p-3">
                <Heart className="h-8 w-8 text-white" />
              </div>
              <h2 className="mb-4 text-3xl font-bold text-secondary md:text-4xl">Show Your Support!</h2>
              <p className="mb-8 text-muted-foreground">
                Love what we're doing? Help us grow by showing your support for Piña Picante Salsa. Your interest helps
                us understand our community and plan for the future. No purchase necessary - just let us know you care!
              </p>
              <Link
                href="/contact?support=true"
                className="inline-flex items-center gap-2 rounded-md bg-gradient-to-r from-pink-500 to-rose-500 px-8 py-4 text-lg font-medium text-white shadow-lg hover:from-pink-600 hover:to-rose-600 transition-all transform hover:scale-105"
              >
                <Heart className="h-6 w-6" />
                Click Here to Indicate Interest
              </Link>
              <p className="mt-4 text-sm text-muted-foreground">
                Join our community of salsa supporters and be the first to know about new products and events!
              </p>
            </div>
          </div>
        </section>

        {/* CTA Section */}
        <section className="bg-primary py-16 text-white">
          <div className="container px-4 md:px-6">
            <div className="mx-auto max-w-3xl text-center">
              <h2 className="mb-4 text-3xl font-bold md:text-4xl">Ready to Spice Up Your Life?</h2>
              <p className="mb-8 text-white/90">
                Join our community of salsa lovers and discover the perfect salsa for every meal.
              </p>
              <div className="flex flex-col justify-center gap-4 sm:flex-row">
                <Link
                  href="/products"
                  className="rounded-md bg-white px-6 py-3 font-medium text-primary hover:bg-white/90 transition-colors"
                >
                  Shop Now
                </Link>
                <Link
                  href="/contact"
                  className="rounded-md border border-white bg-transparent px-6 py-3 font-medium text-white hover:bg-white/10 transition-colors"
                >
                  Contact Us
                </Link>
              </div>
            </div>
          </div>
        </section>
      </div>
    </ThemeProvider>
  )
}
