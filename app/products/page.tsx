import Image from "next/image"
import { Filter } from "lucide-react"

export default function ProductsPage() {
  return (
    <div className="flex flex-col">
      {/* Hero Banner */}
      <section className="relative py-12">
        <div className="absolute inset-0 z-0">
          <Image
            src="/placeholder.svg?height=600&width=1920&query=assorted hot sauce bottles on wooden table with peppers and ingredients"
            alt="Hot Sauce Collection"
            fill
            className="object-cover object-center"
          />
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
      <section className="bg-accent py-12">
        <div className="container px-4 md:px-6">
          {/* Filters */}
          <div className="mb-8 flex flex-col items-center justify-between gap-4 rounded-lg bg-white p-4 shadow-sm sm:flex-row">
            <div className="flex items-center gap-2">
              <Filter className="h-5 w-5 text-secondary" />
              <span className="font-medium text-secondary">Filter By:</span>
            </div>

            <div className="flex flex-wrap gap-2">
              <button className="rounded-full bg-secondary px-4 py-1 text-sm font-medium text-white">
                All Products
              </button>
              <button className="rounded-full bg-accent px-4 py-1 text-sm font-medium text-secondary hover:bg-secondary hover:text-white transition-colors">
                Salsas
              </button>
              <button className="rounded-full bg-accent px-4 py-1 text-sm font-medium text-secondary hover:bg-secondary hover:text-white transition-colors">
                Gift Sets
              </button>
              <button className="rounded-full bg-accent px-4 py-1 text-sm font-medium text-secondary hover:bg-secondary hover:text-white transition-colors">
                Merchandise
              </button>
            </div>

            <div>
              <select className="rounded-md border-gray-300 bg-white px-3 py-1 text-sm text-secondary">
                <option>Sort by: Featured</option>
                <option>Price: Low to High</option>
                <option>Price: High to Low</option>
                <option>Newest</option>
              </select>
            </div>
          </div>

          {/* Products */}
          <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4">
            {/* Product 1 */}
            <div className="group overflow-hidden rounded-lg bg-white shadow-md transition-all hover:shadow-lg">
              <div className="relative h-64 overflow-hidden">
                <div className="absolute left-0 top-0 z-10 rounded-br-lg bg-primary px-3 py-1 text-sm font-bold text-white">
                  Best Seller
                </div>
                <Image
                  src="/placeholder.svg?height=400&width=600&query=jar of red salsa with tomatoes and peppers"
                  alt="Original Hot Sauce"
                  fill
                  className="object-cover object-center transition-transform duration-300 group-hover:scale-105"
                />
              </div>
              <div className="p-4">
                <h3 className="mb-1 text-lg font-bold text-secondary">Original Salsa</h3>
                <p className="mb-2 text-sm text-muted-foreground">
                  Our signature blend with the perfect balance of heat and flavor.
                </p>
                <div className="mb-3 flex items-center gap-1">
                  <span className="text-xs font-medium text-secondary">Heat Level:</span>
                  <div className="flex">
                    {[1, 2, 3].map((pepper) => (
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
                    {[4, 5].map((pepper) => (
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
                  <span className="text-lg font-bold text-primary">$12.99</span>
                  <button className="rounded-md bg-secondary px-3 py-1 text-sm font-medium text-white hover:bg-secondary/90 transition-colors">
                    Add to Cart
                  </button>
                </div>
              </div>
            </div>

            {/* Product 2 */}
            <div className="group overflow-hidden rounded-lg bg-white shadow-md transition-all hover:shadow-lg">
              <div className="relative h-64 overflow-hidden">
                <Image
                  src="/placeholder.svg?height=400&width=600&query=bottle of green hot sauce with jalapenos and garlic"
                  alt="Jalapeño Lime Hot Sauce"
                  fill
                  className="object-cover object-center transition-transform duration-300 group-hover:scale-105"
                />
              </div>
              <div className="p-4">
                <h3 className="mb-1 text-lg font-bold text-secondary">Jalapeño Lime</h3>
                <p className="mb-2 text-sm text-muted-foreground">
                  A zesty blend of jalapeños and fresh lime for a tangy kick.
                </p>
                <div className="mb-3 flex items-center gap-1">
                  <span className="text-xs font-medium text-secondary">Heat Level:</span>
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
                  <span className="text-lg font-bold text-primary">$13.99</span>
                  <button className="rounded-md bg-secondary px-3 py-1 text-sm font-medium text-white hover:bg-secondary/90 transition-colors">
                    Add to Cart
                  </button>
                </div>
              </div>
            </div>

            {/* Product 3 */}
            <div className="group overflow-hidden rounded-lg bg-white shadow-md transition-all hover:shadow-lg">
              <div className="relative h-64 overflow-hidden">
                <Image
                  src="/placeholder.svg?height=400&width=600&query=bottle of yellow hot sauce with pineapple and habanero peppers"
                  alt="Pineapple Habanero Hot Sauce"
                  fill
                  className="object-cover object-center transition-transform duration-300 group-hover:scale-105"
                />
              </div>
              <div className="p-4">
                <h3 className="mb-1 text-lg font-bold text-secondary">Pineapple Habanero</h3>
                <p className="mb-2 text-sm text-muted-foreground">
                  Sweet pineapple meets fiery habanero for a tropical heat.
                </p>
                <div className="mb-3 flex items-center gap-1">
                  <span className="text-xs font-medium text-secondary">Heat Level:</span>
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
                  <span className="text-lg font-bold text-primary">$14.99</span>
                  <button className="rounded-md bg-secondary px-3 py-1 text-sm font-medium text-white hover:bg-secondary/90 transition-colors">
                    Add to Cart
                  </button>
                </div>
              </div>
            </div>

            {/* Product 4 */}
            <div className="group overflow-hidden rounded-lg bg-white shadow-md transition-all hover:shadow-lg">
              <div className="relative h-64 overflow-hidden">
                <div className="absolute left-0 top-0 z-10 rounded-br-lg bg-secondary px-3 py-1 text-sm font-bold text-white">
                  New
                </div>
                <Image
                  src="/placeholder.svg?height=400&width=600&query=bottle of smoky chipotle hot sauce"
                  alt="Smoky Chipotle Hot Sauce"
                  fill
                  className="object-cover object-center transition-transform duration-300 group-hover:scale-105"
                />
              </div>
              <div className="p-4">
                <h3 className="mb-1 text-lg font-bold text-secondary">Smoky Chipotle</h3>
                <p className="mb-2 text-sm text-muted-foreground">
                  Rich, smoky flavor with a medium heat that enhances any dish.
                </p>
                <div className="mb-3 flex items-center gap-1">
                  <span className="text-xs font-medium text-secondary">Heat Level:</span>
                  <div className="flex">
                    {[1, 2, 3].map((pepper) => (
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
                    {[4, 5].map((pepper) => (
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
                  <span className="text-lg font-bold text-primary">$13.99</span>
                  <button className="rounded-md bg-secondary px-3 py-1 text-sm font-medium text-white hover:bg-secondary/90 transition-colors">
                    Add to Cart
                  </button>
                </div>
              </div>
            </div>
          </div>

          {/* Pagination */}
          <div className="mt-12 flex justify-center">
            <nav className="flex items-center gap-1">
              <button className="flex h-8 w-8 items-center justify-center rounded-md border border-gray-300 bg-white text-secondary hover:bg-accent">
                <span className="sr-only">Previous Page</span>
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="16"
                  height="16"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                >
                  <path d="M15 18l-6-6 6-6" />
                </svg>
              </button>
              <button className="flex h-8 w-8 items-center justify-center rounded-md bg-secondary text-white">1</button>
              <button className="flex h-8 w-8 items-center justify-center rounded-md border border-gray-300 bg-white text-secondary hover:bg-accent">
                2
              </button>
              <button className="flex h-8 w-8 items-center justify-center rounded-md border border-gray-300 bg-white text-secondary hover:bg-accent">
                3
              </button>
              <button className="flex h-8 w-8 items-center justify-center rounded-md border border-gray-300 bg-white text-secondary hover:bg-accent">
                <span className="sr-only">Next Page</span>
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="16"
                  height="16"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                >
                  <path d="M9 18l6-6-6-6" />
                </svg>
              </button>
            </nav>
          </div>
        </div>
      </section>

      {/* Newsletter Section */}
      <section className="bg-secondary py-12 text-white">
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
                className="rounded-md bg-primary px-4 py-2 font-medium text-white hover:bg-primary/90 transition-colors"
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
