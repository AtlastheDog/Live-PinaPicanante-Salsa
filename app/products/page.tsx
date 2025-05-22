import Image from "next/image"
import Link from "next/link"
import { Filter } from "lucide-react"

export default function ProductsPage() {
  return (
    <div className="flex flex-col">
      {/* Hero Banner */}
      <section className="relative py-12">
        <div className="absolute inset-0 z-0">
          <Image src="/assorted-salsa-jars.png" alt="Salsa Collection" fill className="object-cover object-center" />
          <div className="absolute inset-0 bg-black/50" />
        </div>

        <div className="container relative z-10 px-4 py-12 text-center text-white md:px-6">
          <h1 className="mb-4 text-4xl font-bold md:text-5xl">Our Products</h1>
          <p className="mx-auto max-w-2xl text-lg text-white/90">
            Explore our collection of handcrafted salsas made with the finest ingredients from California's Central
            Coast.
          </p>
        </div>
      </section>

      {/* Products Grid */}
      <section className="bg-[#f8f3e6] py-12">
        <div className="container px-4 md:px-6">
          {/* Filters */}
          <div className="mb-8 flex flex-col items-center justify-between gap-4 rounded-lg bg-white p-4 shadow-sm sm:flex-row">
            <div className="flex items-center gap-2">
              <Filter className="h-5 w-5 text-[#8b4513]" />
              <span className="font-medium text-[#8b4513]">Filter By:</span>
            </div>

            <div className="flex flex-wrap gap-2">
              <button className="rounded-full bg-[#8b4513] px-4 py-1 text-sm font-medium text-white">
                All Products
              </button>
              <button className="rounded-full bg-[#f8f3e6] px-4 py-1 text-sm font-medium text-[#8b4513] hover:bg-[#8b4513] hover:text-white transition-colors">
                Piña Picante
              </button>
              <button className="rounded-full bg-[#f8f3e6] px-4 py-1 text-sm font-medium text-[#8b4513] hover:bg-[#8b4513] hover:text-white transition-colors">
                Piña Picante Classic
              </button>
            </div>

            <div>
              <select className="rounded-md border-[#d4c9b5] bg-white px-3 py-1 text-sm text-[#8b4513]">
                <option>Sort by: Featured</option>
                <option>Price: Low to High</option>
                <option>Price: High to Low</option>
                <option>Newest</option>
              </select>
            </div>
          </div>

          {/* Products */}
          <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-4">
            {/* Product 1 - Piña Picante Hot */}
            <Link
              href="/products/pina-picante-hot"
              className="group overflow-hidden rounded-lg bg-white shadow-md transition-all hover:shadow-lg"
            >
              <div className="relative h-64 overflow-hidden">
                <div className="absolute left-0 top-0 z-10 rounded-br-lg bg-[#c25a28] px-3 py-1 text-sm font-bold text-white">
                  Best Seller
                </div>
                <Image
                  src="/placeholder.svg?height=400&width=600&query=jar of red salsa with pineapple chunks and habanero peppers"
                  alt="Piña Picante Hot"
                  fill
                  className="object-cover object-center transition-transform duration-300 group-hover:scale-105"
                />
              </div>
              <div className="p-4">
                <h3 className="mb-1 text-lg font-bold text-[#8b4513]">Piña Picante - Hot</h3>
                <p className="mb-2 text-sm text-gray-600">
                  A bold, complex blend of roasted habanero, jalapeño, tomatoes, and garlic with sweet pineapple.
                </p>
                <div className="mb-3 flex items-center gap-1">
                  <span className="text-xs font-medium text-[#8b4513]">Heat Level:</span>
                  <div className="flex">
                    {[1, 2, 3, 4].map((pepper) => (
                      <svg
                        key={pepper}
                        xmlns="http://www.w3.org/2000/svg"
                        width="16"
                        height="16"
                        viewBox="0 0 24 24"
                        fill="#c25a28"
                        stroke="none"
                      >
                        <path d="M16.5,3C13.605,3,12,5.09,12,5.09S10.395,3,7.5,3C4.462,3,2,5.462,2,8.5c0,4.171,4.912,8.213,6.281,9.49 C9.858,19.46,12,21.35,12,21.35s2.142-1.89,3.719-3.36C17.088,16.713,22,12.671,22,8.5C22,5.462,19.538,3,16.5,3z" />
                      </svg>
                    ))}
                    {[5].map((pepper) => (
                      <svg
                        key={pepper}
                        xmlns="http://www.w3.org/2000/svg"
                        width="16"
                        height="16"
                        viewBox="0 0 24 24"
                        fill="#e2e8f0"
                        stroke="#c25a28"
                        strokeWidth="1"
                      >
                        <path d="M16.5,3C13.605,3,12,5.09,12,5.09S10.395,3,7.5,3C4.462,3,2,5.462,2,8.5c0,4.171,4.912,8.213,6.281,9.49 C9.858,19.46,12,21.35,12,21.35s2.142-1.89,3.719-3.36C17.088,16.713,22,12.671,22,8.5C22,5.462,19.538,3,16.5,3z" />
                      </svg>
                    ))}
                  </div>
                </div>
                <div className="flex items-center justify-between">
                  <span className="text-lg font-bold text-[#c25a28]">$12.99</span>
                  <button className="rounded-md bg-[#8b4513] px-3 py-1 text-sm font-medium text-white hover:bg-[#8b4513]/90 transition-colors">
                    Pre-Order
                  </button>
                </div>
              </div>
            </Link>

            {/* Product 2 - Piña Picante Mild */}
            <Link
              href="/products/pina-picante-mild"
              className="group overflow-hidden rounded-lg bg-white shadow-md transition-all hover:shadow-lg"
            >
              <div className="relative h-64 overflow-hidden">
                <Image
                  src="/placeholder.svg?height=400&width=600&query=jar of orange salsa with pineapple chunks and mild peppers"
                  alt="Piña Picante Mild"
                  fill
                  className="object-cover object-center transition-transform duration-300 group-hover:scale-105"
                />
              </div>
              <div className="p-4">
                <h3 className="mb-1 text-lg font-bold text-[#8b4513]">Piña Picante - Mild</h3>
                <p className="mb-2 text-sm text-gray-600">
                  A gentle blend of roasted jalapeño, tomatoes, and garlic with sweet pineapple for a milder kick.
                </p>
                <div className="mb-3 flex items-center gap-1">
                  <span className="text-xs font-medium text-[#8b4513]">Heat Level:</span>
                  <div className="flex">
                    {[1, 2].map((pepper) => (
                      <svg
                        key={pepper}
                        xmlns="http://www.w3.org/2000/svg"
                        width="16"
                        height="16"
                        viewBox="0 0 24 24"
                        fill="#c25a28"
                        stroke="none"
                      >
                        <path d="M16.5,3C13.605,3,12,5.09,12,5.09S10.395,3,7.5,3C4.462,3,2,5.462,2,8.5c0,4.171,4.912,8.213,6.281,9.49 C9.858,19.46,12,21.35,12,21.35s2.142-1.89,3.719-3.36C17.088,16.713,22,12.671,22,8.5C22,5.462,19.538,3,16.5,3z" />
                      </svg>
                    ))}
                    {[3, 4, 5].map((pepper) => (
                      <svg
                        key={pepper}
                        xmlns="http://www.w3.org/2000/svg"
                        width="16"
                        height="16"
                        viewBox="0 0 24 24"
                        fill="#e2e8f0"
                        stroke="#c25a28"
                        strokeWidth="1"
                      >
                        <path d="M16.5,3C13.605,3,12,5.09,12,5.09S10.395,3,7.5,3C4.462,3,2,5.462,2,8.5c0,4.171,4.912,8.213,6.281,9.49 C9.858,19.46,12,21.35,12,21.35s2.142-1.89,3.719-3.36C17.088,16.713,22,12.671,22,8.5C22,5.462,19.538,3,16.5,3z" />
                      </svg>
                    ))}
                  </div>
                </div>
                <div className="flex items-center justify-between">
                  <span className="text-lg font-bold text-[#c25a28]">$12.99</span>
                  <button className="rounded-md bg-[#8b4513] px-3 py-1 text-sm font-medium text-white hover:bg-[#8b4513]/90 transition-colors">
                    Pre-Order
                  </button>
                </div>
              </div>
            </Link>

            {/* Product 3 - Piña Picante Classic Hot */}
            <Link
              href="/products/pina-picante-classic-hot"
              className="group overflow-hidden rounded-lg bg-white shadow-md transition-all hover:shadow-lg"
            >
              <div className="relative h-64 overflow-hidden">
                <div className="absolute left-0 top-0 z-10 rounded-br-lg bg-[#8b4513] px-3 py-1 text-sm font-bold text-white">
                  Traditional
                </div>
                <Image
                  src="/placeholder.svg?height=400&width=600&query=jar of traditional red salsa with habanero peppers"
                  alt="Piña Picante Classic Hot"
                  fill
                  className="object-cover object-center transition-transform duration-300 group-hover:scale-105"
                />
              </div>
              <div className="p-4">
                <h3 className="mb-1 text-lg font-bold text-[#8b4513]">Piña Picante Classic - Hot</h3>
                <p className="mb-2 text-sm text-gray-600">
                  A traditional blended salsa with roasted habanero, jalapeño, tomatoes, and garlic. Perfect for
                  dipping.
                </p>
                <div className="mb-3 flex items-center gap-1">
                  <span className="text-xs font-medium text-[#8b4513]">Heat Level:</span>
                  <div className="flex">
                    {[1, 2, 3, 4].map((pepper) => (
                      <svg
                        key={pepper}
                        xmlns="http://www.w3.org/2000/svg"
                        width="16"
                        height="16"
                        viewBox="0 0 24 24"
                        fill="#c25a28"
                        stroke="none"
                      >
                        <path d="M16.5,3C13.605,3,12,5.09,12,5.09S10.395,3,7.5,3C4.462,3,2,5.462,2,8.5c0,4.171,4.912,8.213,6.281,9.49 C9.858,19.46,12,21.35,12,21.35s2.142-1.89,3.719-3.36C17.088,16.713,22,12.671,22,8.5C22,5.462,19.538,3,16.5,3z" />
                      </svg>
                    ))}
                    {[5].map((pepper) => (
                      <svg
                        key={pepper}
                        xmlns="http://www.w3.org/2000/svg"
                        width="16"
                        height="16"
                        viewBox="0 0 24 24"
                        fill="#e2e8f0"
                        stroke="#c25a28"
                        strokeWidth="1"
                      >
                        <path d="M16.5,3C13.605,3,12,5.09,12,5.09S10.395,3,7.5,3C4.462,3,2,5.462,2,8.5c0,4.171,4.912,8.213,6.281,9.49 C9.858,19.46,12,21.35,12,21.35s2.142-1.89,3.719-3.36C17.088,16.713,22,12.671,22,8.5C22,5.462,19.538,3,16.5,3z" />
                      </svg>
                    ))}
                  </div>
                </div>
                <div className="flex items-center justify-between">
                  <span className="text-lg font-bold text-[#c25a28]">$11.99</span>
                  <button className="rounded-md bg-[#8b4513] px-3 py-1 text-sm font-medium text-white hover:bg-[#8b4513]/90 transition-colors">
                    Pre-Order
                  </button>
                </div>
              </div>
            </Link>

            {/* Product 4 - Piña Picante Classic Mild */}
            <Link
              href="/products/pina-picante-classic-mild"
              className="group overflow-hidden rounded-lg bg-white shadow-md transition-all hover:shadow-lg"
            >
              <div className="relative h-64 overflow-hidden">
                <Image
                  src="/placeholder.svg?height=400&width=600&query=jar of traditional mild red salsa with jalapeño peppers"
                  alt="Piña Picante Classic Mild"
                  fill
                  className="object-cover object-center transition-transform duration-300 group-hover:scale-105"
                />
              </div>
              <div className="p-4">
                <h3 className="mb-1 text-lg font-bold text-[#8b4513]">Piña Picante Classic - Mild</h3>
                <p className="mb-2 text-sm text-gray-600">
                  A traditional mild blended salsa with roasted jalapeño, tomatoes, and garlic. Family-friendly heat
                  level.
                </p>
                <div className="mb-3 flex items-center gap-1">
                  <span className="text-xs font-medium text-[#8b4513]">Heat Level:</span>
                  <div className="flex">
                    {[1, 2].map((pepper) => (
                      <svg
                        key={pepper}
                        xmlns="http://www.w3.org/2000/svg"
                        width="16"
                        height="16"
                        viewBox="0 0 24 24"
                        fill="#c25a28"
                        stroke="none"
                      >
                        <path d="M16.5,3C13.605,3,12,5.09,12,5.09S10.395,3,7.5,3C4.462,3,2,5.462,2,8.5c0,4.171,4.912,8.213,6.281,9.49 C9.858,19.46,12,21.35,12,21.35s2.142-1.89,3.719-3.36C17.088,16.713,22,12.671,22,8.5C22,5.462,19.538,3,16.5,3z" />
                      </svg>
                    ))}
                    {[3, 4, 5].map((pepper) => (
                      <svg
                        key={pepper}
                        xmlns="http://www.w3.org/2000/svg"
                        width="16"
                        height="16"
                        viewBox="0 0 24 24"
                        fill="#e2e8f0"
                        stroke="#c25a28"
                        strokeWidth="1"
                      >
                        <path d="M16.5,3C13.605,3,12,5.09,12,5.09S10.395,3,7.5,3C4.462,3,2,5.462,2,8.5c0,4.171,4.912,8.213,6.281,9.49 C9.858,19.46,12,21.35,12,21.35s2.142-1.89,3.719-3.36C17.088,16.713,22,12.671,22,8.5C22,5.462,19.538,3,16.5,3z" />
                      </svg>
                    ))}
                  </div>
                </div>
                <div className="flex items-center justify-between">
                  <span className="text-lg font-bold text-[#c25a28]">$11.99</span>
                  <button className="rounded-md bg-[#8b4513] px-3 py-1 text-sm font-medium text-white hover:bg-[#8b4513]/90 transition-colors">
                    Pre-Order
                  </button>
                </div>
              </div>
            </Link>
          </div>
        </div>
      </section>

      {/* Product Information Section */}
      <section className="bg-white py-12">
        <div className="container px-4 md:px-6">
          <div className="mx-auto max-w-3xl text-center">
            <h2 className="mb-4 text-3xl font-bold text-[#8b4513]">Handcrafted with Care</h2>
            <p className="mb-6 text-gray-700">
              All of our salsas are made in small batches using locally sourced ingredients whenever possible. We roast
              our vegetables to bring out their natural flavors and create a depth that you won't find in mass-produced
              salsas.
            </p>
            <div className="grid grid-cols-1 gap-6 md:grid-cols-2">
              <div className="rounded-lg bg-[#f8f3e6] p-6">
                <h3 className="mb-2 text-xl font-bold text-[#8b4513]">Piña Picante Line</h3>
                <p className="text-gray-700">
                  Our signature line featuring sweet pineapple that perfectly balances the heat of our roasted peppers.
                  The tropical twist adds a unique dimension to the traditional salsa experience.
                </p>
              </div>
              <div className="rounded-lg bg-[#f8f3e6] p-6">
                <h3 className="mb-2 text-xl font-bold text-[#8b4513]">Classic Line</h3>
                <p className="text-gray-700">
                  Our traditional blended salsas are perfect for dipping and everyday use. Made with the same
                  high-quality roasted vegetables but without the pineapple for a more classic flavor profile.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Newsletter Section */}
      <section className="bg-[#8b4513] py-12 text-white">
        <div className="container px-4 md:px-6">
          <div className="mx-auto max-w-3xl text-center">
            <h2 className="mb-4 text-3xl font-bold">Join Our Spicy Community</h2>
            <p className="mb-6 text-white/80">
              Subscribe to our newsletter for exclusive offers, recipes, and salsa tips.
            </p>
            <form className="mx-auto flex max-w-md flex-col gap-2 sm:flex-row">
              <input
                type="email"
                placeholder="Your email address"
                className="flex-1 rounded-md border-none bg-white/10 px-4 py-2 text-white placeholder:text-white/50"
                required
              />
              <button
                type="submit"
                className="rounded-md bg-[#c25a28] px-4 py-2 font-medium text-white hover:bg-[#c25a28]/90 transition-colors"
              >
                Subscribe
              </button>
            </form>
          </div>
        </div>
      </section>
    </div>
  )
}
