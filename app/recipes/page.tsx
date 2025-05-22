import Image from "next/image"
import Link from "next/link"
import { Clock, Users, ChefHat, ArrowRight } from "lucide-react"

export default function RecipesPage() {
  return (
    <div className="flex flex-col">
      {/* Hero Banner */}
      <section className="relative py-12">
        <div className="absolute inset-0 z-0">
          <Image
            src="/placeholder.svg?height=600&width=1920&query=mexican food spread with various salsas"
            alt="Delicious Food with Salsa"
            fill
            className="object-cover object-center"
          />
          <div className="absolute inset-0 bg-black/50" />
        </div>

        <div className="container relative z-10 px-4 py-12 text-center text-white md:px-6">
          <h1 className="mb-4 text-4xl font-bold md:text-5xl">Recipes</h1>
          <p className="mx-auto max-w-2xl text-lg text-white/90">
            Discover delicious ways to incorporate our handcrafted salsas into your favorite meals.
          </p>
        </div>
      </section>

      {/* Featured Recipe */}
      <section className="bg-accent py-16">
        <div className="container px-4 md:px-6">
          <div className="mb-10 text-center">
            <span className="inline-block rounded-full bg-primary/20 px-3 py-1 text-sm font-medium text-primary">
              Featured Recipe
            </span>
            <h2 className="mb-2 mt-2 text-3xl font-bold text-secondary md:text-4xl">
              Grilled Fish Tacos with Pineapple Habanero Salsa
            </h2>
            <p className="mx-auto max-w-2xl text-muted-foreground">
              Light, fresh, and bursting with flavor, these fish tacos are elevated with our signature Pineapple
              Habanero Salsa.
            </p>
          </div>

          <div className="grid gap-8 md:grid-cols-2 md:items-center">
            <div className="relative h-[400px] overflow-hidden rounded-lg md:h-[500px]">
              <Image
                src="/placeholder.svg?height=800&width=600&query=fish tacos with pineapple habanero salsa"
                alt="Fish Tacos with Pineapple Habanero Salsa"
                fill
                className="object-cover object-center"
              />
            </div>

            <div>
              <div className="mb-6 flex flex-wrap gap-4">
                <div className="flex items-center gap-2 rounded-full bg-white px-3 py-1 text-sm">
                  <Clock className="h-4 w-4 text-primary" />
                  <span>30 minutes</span>
                </div>
                <div className="flex items-center gap-2 rounded-full bg-white px-3 py-1 text-sm">
                  <Users className="h-4 w-4 text-primary" />
                  <span>Serves 4</span>
                </div>
                <div className="flex items-center gap-2 rounded-full bg-white px-3 py-1 text-sm">
                  <ChefHat className="h-4 w-4 text-primary" />
                  <span>Easy</span>
                </div>
              </div>

              <h3 className="mb-2 text-xl font-bold text-secondary">Ingredients</h3>
              <ul className="mb-6 list-inside list-disc space-y-1 text-muted-foreground">
                <li>1 lb white fish fillets (such as cod or tilapia)</li>
                <li>8 small corn or flour tortillas</li>
                <li>1 avocado, sliced</li>
                <li>2 cups shredded cabbage</li>
                <li>1/4 cup cilantro, chopped</li>
                <li>1 lime, cut into wedges</li>
                <li>2 tbsp olive oil</li>
                <li>Salt and pepper to taste</li>
                <li>
                  <span className="font-medium text-primary">1/4 cup Piña Picante Pineapple Habanero Salsa</span>
                </li>
              </ul>

              <h3 className="mb-2 text-xl font-bold text-secondary">Instructions</h3>
              <ol className="mb-6 list-inside list-decimal space-y-2 text-muted-foreground">
                <li>Season fish with salt, pepper, and olive oil.</li>
                <li>Grill fish for 3-4 minutes per side until cooked through.</li>
                <li>Warm tortillas on the grill or in a pan.</li>
                <li>Flake the fish and divide among tortillas.</li>
                <li>Top with cabbage, avocado, and cilantro.</li>
                <li>Add a generous spoonful of Pineapple Habanero Salsa to each taco.</li>
                <li>Serve with lime wedges and extra salsa on the side.</li>
              </ol>

              <Link
                href="#"
                className="inline-flex items-center gap-2 rounded-md bg-primary px-4 py-2 font-medium text-white hover:bg-primary/90 transition-colors"
              >
                View Full Recipe <ArrowRight className="h-4 w-4" />
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* Recipe Categories */}
      <section className="py-16">
        <div className="container px-4 md:px-6">
          <div className="mb-10 text-center">
            <h2 className="mb-2 text-3xl font-bold text-secondary md:text-4xl">Browse by Category</h2>
            <p className="mx-auto max-w-2xl text-muted-foreground">
              Find the perfect recipe for any occasion, from quick weeknight dinners to impressive party dishes.
            </p>
          </div>

          <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-4">
            <Link href="#" className="group">
              <div className="overflow-hidden rounded-lg">
                <div className="relative h-64">
                  <Image
                    src="/placeholder.svg?height=400&width=400&query=nachos with salsa and guacamole"
                    alt="Appetizers"
                    fill
                    className="object-cover object-center transition-transform duration-300 group-hover:scale-105"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/70 to-transparent" />
                  <div className="absolute bottom-0 left-0 right-0 p-4 text-center">
                    <h3 className="text-xl font-bold text-white">Appetizers</h3>
                    <p className="text-sm text-white/80">Start your meal right</p>
                  </div>
                </div>
              </div>
            </Link>

            <Link href="#" className="group">
              <div className="overflow-hidden rounded-lg">
                <div className="relative h-64">
                  <Image
                    src="/placeholder.svg?height=400&width=400&query=grilled chicken with salsa"
                    alt="Main Dishes"
                    fill
                    className="object-cover object-center transition-transform duration-300 group-hover:scale-105"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/70 to-transparent" />
                  <div className="absolute bottom-0 left-0 right-0 p-4 text-center">
                    <h3 className="text-xl font-bold text-white">Main Dishes</h3>
                    <p className="text-sm text-white/80">Hearty and satisfying</p>
                  </div>
                </div>
              </div>
            </Link>

            <Link href="#" className="group">
              <div className="overflow-hidden rounded-lg">
                <div className="relative h-64">
                  <Image
                    src="/placeholder.svg?height=400&width=400&query=quesadillas with salsa"
                    alt="Quick & Easy"
                    fill
                    className="object-cover object-center transition-transform duration-300 group-hover:scale-105"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/70 to-transparent" />
                  <div className="absolute bottom-0 left-0 right-0 p-4 text-center">
                    <h3 className="text-xl font-bold text-white">Quick & Easy</h3>
                    <p className="text-sm text-white/80">Ready in 30 minutes or less</p>
                  </div>
                </div>
              </div>
            </Link>

            <Link href="#" className="group">
              <div className="overflow-hidden rounded-lg">
                <div className="relative h-64">
                  <Image
                    src="/placeholder.svg?height=400&width=400&query=vegetable enchiladas with salsa verde"
                    alt="Vegetarian"
                    fill
                    className="object-cover object-center transition-transform duration-300 group-hover:scale-105"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/70 to-transparent" />
                  <div className="absolute bottom-0 left-0 right-0 p-4 text-center">
                    <h3 className="text-xl font-bold text-white">Vegetarian</h3>
                    <p className="text-sm text-white/80">Plant-based goodness</p>
                  </div>
                </div>
              </div>
            </Link>
          </div>
        </div>
      </section>
    </div>
  )
}
