import Image from "next/image"
import Link from "next/link"
import { ArrowRight, Award, Leaf, ShoppingBag } from "lucide-react"

export default function Home() {
  return (
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
            src="/images/pina-picante-logo.png"
            alt="Piña Picante Salsa"
            width={200}
            height={200}
            className="mx-auto mb-8 rounded-lg bg-accent/90 p-4"
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
              href="/shop"
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
          </div>
        </div>
      </section>

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
            {/* Product Card 1 */}
            <div className="group overflow-hidden rounded-lg bg-white shadow-md transition-all hover:shadow-lg">
              <div className="relative h-64 overflow-hidden">
                <Image
                  src="/placeholder-vq9i2.png"
                  alt="Original Salsa"
                  fill
                  className="object-cover object-center transition-transform duration-300 group-hover:scale-105"
                />
              </div>
              <div className="p-6">
                <h3 className="mb-2 text-xl font-bold text-secondary">Original Salsa</h3>
                <p className="mb-4 text-muted-foreground">
                  Our signature blend with the perfect balance of heat and flavor.
                </p>
                <div className="flex items-center justify-between">
                  <span className="text-lg font-bold text-primary">$12.99</span>
                  <Link
                    href="/shop/original-salsa"
                    className="flex items-center gap-1 font-medium text-secondary hover:text-primary transition-colors"
                  >
                    View Details <ArrowRight className="h-4 w-4" />
                  </Link>
                </div>
              </div>
            </div>

            {/* Product Card 2 */}
            <div className="group overflow-hidden rounded-lg bg-white shadow-md transition-all hover:shadow-lg">
              <div className="relative h-64 overflow-hidden">
                <Image
                  src="/green-hot-sauce.png"
                  alt="Jalapeño Lime Salsa"
                  fill
                  className="object-cover object-center transition-transform duration-300 group-hover:scale-105"
                />
              </div>
              <div className="p-6">
                <h3 className="mb-2 text-xl font-bold text-secondary">Jalapeño Lime</h3>
                <p className="mb-4 text-muted-foreground">
                  A zesty blend of jalapeños and fresh lime for a tangy kick.
                </p>
                <div className="flex items-center justify-between">
                  <span className="text-lg font-bold text-primary">$13.99</span>
                  <Link
                    href="/shop/jalapeno-lime-salsa"
                    className="flex items-center gap-1 font-medium text-secondary hover:text-primary transition-colors"
                  >
                    View Details <ArrowRight className="h-4 w-4" />
                  </Link>
                </div>
              </div>
            </div>

            {/* Product Card 3 */}
            <div className="group overflow-hidden rounded-lg bg-white shadow-md transition-all hover:shadow-lg">
              <div className="relative h-64 overflow-hidden">
                <Image
                  src="/placeholder.svg?height=400&width=600&query=bottle of yellow hot sauce with pineapple and habanero peppers"
                  alt="Pineapple Habanero Salsa"
                  fill
                  className="object-cover object-center transition-transform duration-300 group-hover:scale-105"
                />
              </div>
              <div className="p-6">
                <h3 className="mb-2 text-xl font-bold text-secondary">Pineapple Habanero</h3>
                <p className="mb-4 text-muted-foreground">Sweet pineapple meets fiery habanero for a tropical heat.</p>
                <div className="flex items-center justify-between">
                  <span className="text-lg font-bold text-primary">$14.99</span>
                  <Link
                    href="/shop/pineapple-habanero-salsa"
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
              href="/shop"
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
                src="/placeholder.svg?height=800&width=600&query=farmer harvesting chili peppers in california farm with mountains in background"
                alt="Our Farm"
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
                vibrant flavors. We're committed to supporting local farmers and sustainable practices.
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

      {/* Testimonials */}
      <section className="hero-pattern py-16">
        <div className="container px-4 md:px-6">
          <div className="mb-10 text-center">
            <h2 className="mb-2 text-3xl font-bold text-secondary md:text-4xl">What Our Customers Say</h2>
            <p className="mx-auto max-w-2xl text-muted-foreground">
              Don't just take our word for it. Here's what salsa enthusiasts have to say.
            </p>
          </div>

          <div className="grid grid-cols-1 gap-8 md:grid-cols-2 lg:grid-cols-3">
            <div className="rounded-lg bg-white p-6 shadow-md">
              <div className="mb-4 flex">
                {[1, 2, 3, 4, 5].map((star) => (
                  <svg
                    key={star}
                    xmlns="http://www.w3.org/2000/svg"
                    width="20"
                    height="20"
                    viewBox="0 0 24 24"
                    fill="#c25a28"
                    stroke="#c25a28"
                    strokeWidth="1"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  >
                    <polygon points="12 2 15.09 8.26 22 9.27 17 14.14 18.18 21.02 12 17.77 5.82 21.02 7 14.14 2 9.27 8.91 8.26 12 2" />
                  </svg>
                ))}
              </div>
              <p className="mb-4 italic text-muted-foreground">
                "The Original Salsa is the perfect balance of heat and flavor. It's become a staple in my kitchen!"
              </p>
              <div className="flex items-center gap-3">
                <div className="h-10 w-10 overflow-hidden rounded-full bg-accent">
                  <Image
                    src="/placeholder.svg?height=100&width=100&query=portrait of person"
                    alt="Customer"
                    width={40}
                    height={40}
                  />
                </div>
                <div>
                  <p className="font-medium text-secondary">Sarah M.</p>
                  <p className="text-sm text-muted-foreground">Salsa Enthusiast</p>
                </div>
              </div>
            </div>

            <div className="rounded-lg bg-white p-6 shadow-md">
              <div className="mb-4 flex">
                {[1, 2, 3, 4, 5].map((star) => (
                  <svg
                    key={star}
                    xmlns="http://www.w3.org/2000/svg"
                    width="20"
                    height="20"
                    viewBox="0 0 24 24"
                    fill="#c25a28"
                    stroke="#c25a28"
                    strokeWidth="1"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  >
                    <polygon points="12 2 15.09 8.26 22 9.27 17 14.14 18.18 21.02 12 17.77 5.82 21.02 7 14.14 2 9.27 8.91 8.26 12 2" />
                  </svg>
                ))}
              </div>
              <p className="mb-4 italic text-muted-foreground">
                "The Pineapple Habanero is a game-changer! Sweet, spicy, and absolutely delicious on everything."
              </p>
              <div className="flex items-center gap-3">
                <div className="h-10 w-10 overflow-hidden rounded-full bg-accent">
                  <Image
                    src="/placeholder.svg?height=100&width=100&query=portrait of person"
                    alt="Customer"
                    width={40}
                    height={40}
                  />
                </div>
                <div>
                  <p className="font-medium text-secondary">Michael T.</p>
                  <p className="text-sm text-muted-foreground">Chef</p>
                </div>
              </div>
            </div>

            <div className="rounded-lg bg-white p-6 shadow-md">
              <div className="mb-4 flex">
                {[1, 2, 3, 4, 5].map((star) => (
                  <svg
                    key={star}
                    xmlns="http://www.w3.org/2000/svg"
                    width="20"
                    height="20"
                    viewBox="0 0 24 24"
                    fill="#c25a28"
                    stroke="#c25a28"
                    strokeWidth="1"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  >
                    <polygon points="12 2 15.09 8.26 22 9.27 17 14.14 18.18 21.02 12 17.77 5.82 21.02 7 14.14 2 9.27 8.91 8.26 12 2" />
                  </svg>
                ))}
              </div>
              <p className="mb-4 italic text-muted-foreground">
                "I love that I can taste the freshness of the ingredients. Supporting a local business that cares about
                quality is a bonus!"
              </p>
              <div className="flex items-center gap-3">
                <div className="h-10 w-10 overflow-hidden rounded-full bg-accent">
                  <Image
                    src="/placeholder.svg?height=100&width=100&query=portrait of person"
                    alt="Customer"
                    width={40}
                    height={40}
                  />
                </div>
                <div>
                  <p className="font-medium text-secondary">Jessica K.</p>
                  <p className="text-sm text-muted-foreground">Food Blogger</p>
                </div>
              </div>
            </div>
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
                href="/shop"
                className="rounded-md bg-white px-6 py-3 font-medium text-primary hover:bg-white/90 transition-colors"
              >
                Shop Now
              </Link>
              <Link
                href="/subscribe"
                className="rounded-md border border-white bg-transparent px-6 py-3 font-medium text-white hover:bg-white/10 transition-colors"
              >
                Subscribe & Save
              </Link>
            </div>
          </div>
        </div>
      </section>
    </div>
  )
}
