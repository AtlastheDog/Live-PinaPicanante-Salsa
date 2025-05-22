import Image from "next/image"
import Link from "next/link"
import { Clock, Users, ChefHat, ArrowRight } from "lucide-react"

export default function RecipesPage() {
  console.log("Recipes page loaded!")

  return (
    <div className="flex flex-col">
      {/* Hero Banner */}
      <section className="relative py-12">
        <div className="absolute inset-0 z-0">
          <Image
            src="/mexican-food-spread.png"
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
                src="/placeholder.svg?key=8tc7s"
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
                href="/recipes/fish-tacos"
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
            <Link href="/recipes/category/appetizers" className="group">
              <div className="overflow-hidden rounded-lg">
                <div className="relative h-64">
                  <Image
                    src="/nachos-salsa-guacamole.png"
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

            <Link href="/recipes/category/main-dishes" className="group">
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

            <Link href="/recipes/category/quick-easy" className="group">
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

            <Link href="/recipes/category/vegetarian" className="group">
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

      {/* Recipe Cards */}
      <section className="bg-accent py-16">
        <div className="container px-4 md:px-6">
          <div className="mb-10 text-center">
            <h2 className="mb-2 text-3xl font-bold text-secondary md:text-4xl">More Delicious Recipes</h2>
            <p className="mx-auto max-w-2xl text-muted-foreground">
              Try these flavorful dishes that showcase our salsas in creative ways.
            </p>
          </div>

          <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3">
            {/* Recipe Card 1 */}
            <div className="group overflow-hidden rounded-lg bg-white shadow-md transition-all hover:shadow-lg">
              <div className="relative h-64 overflow-hidden">
                <Image
                  src="/placeholder.svg?height=400&width=600&query=breakfast burrito with eggs and salsa"
                  alt="Breakfast Burrito"
                  fill
                  className="object-cover object-center transition-transform duration-300 group-hover:scale-105"
                />
              </div>
              <div className="p-6">
                <div className="mb-4 flex flex-wrap gap-2">
                  <span className="rounded-full bg-accent px-3 py-1 text-xs font-medium text-secondary">Breakfast</span>
                  <span className="rounded-full bg-accent px-3 py-1 text-xs font-medium text-secondary">20 min</span>
                </div>
                <h3 className="mb-2 text-xl font-bold text-secondary">Breakfast Burrito with Original Salsa</h3>
                <p className="mb-4 text-muted-foreground">
                  Start your day with this protein-packed breakfast burrito featuring scrambled eggs, black beans, and
                  our Original Salsa.
                </p>
                <Link
                  href="/recipes/breakfast-burrito"
                  className="flex items-center gap-1 font-medium text-primary hover:underline"
                >
                  View Recipe <ArrowRight className="h-4 w-4" />
                </Link>
              </div>
            </div>

            {/* Recipe Card 2 */}
            <div className="group overflow-hidden rounded-lg bg-white shadow-md transition-all hover:shadow-lg">
              <div className="relative h-64 overflow-hidden">
                <Image
                  src="/placeholder.svg?height=400&width=600&query=grilled steak with chimichurri salsa"
                  alt="Grilled Steak"
                  fill
                  className="object-cover object-center transition-transform duration-300 group-hover:scale-105"
                />
              </div>
              <div className="p-6">
                <div className="mb-4 flex flex-wrap gap-2">
                  <span className="rounded-full bg-accent px-3 py-1 text-xs font-medium text-secondary">Dinner</span>
                  <span className="rounded-full bg-accent px-3 py-1 text-xs font-medium text-secondary">45 min</span>
                </div>
                <h3 className="mb-2 text-xl font-bold text-secondary">Grilled Steak with Jalapeño Lime Salsa</h3>
                <p className="mb-4 text-muted-foreground">
                  Perfectly grilled steak topped with our zesty Jalapeño Lime Salsa for a flavor-packed dinner that is
                  sure to impress.
                </p>
                <Link
                  href="/recipes/grilled-steak"
                  className="flex items-center gap-1 font-medium text-primary hover:underline"
                >
                  View Recipe <ArrowRight className="h-4 w-4" />
                </Link>
              </div>
            </div>

            {/* Recipe Card 3 */}
            <div className="group overflow-hidden rounded-lg bg-white shadow-md transition-all hover:shadow-lg">
              <div className="relative h-64 overflow-hidden">
                <Image
                  src="/placeholder.svg?height=400&width=600&query=roasted vegetable enchiladas with salsa verde"
                  alt="Vegetable Enchiladas"
                  fill
                  className="object-cover object-center transition-transform duration-300 group-hover:scale-105"
                />
              </div>
              <div className="p-6">
                <div className="mb-4 flex flex-wrap gap-2">
                  <span className="rounded-full bg-accent px-3 py-1 text-xs font-medium text-secondary">
                    Vegetarian
                  </span>
                  <span className="rounded-full bg-accent px-3 py-1 text-xs font-medium text-secondary">60 min</span>
                </div>
                <h3 className="mb-2 text-xl font-bold text-secondary">Roasted Vegetable Enchiladas</h3>
                <p className="mb-4 text-muted-foreground">
                  These hearty vegetarian enchiladas are filled with roasted vegetables and smothered in our Smoky
                  Chipotle Salsa.
                </p>
                <Link
                  href="/recipes/vegetable-enchiladas"
                  className="flex items-center gap-1 font-medium text-primary hover:underline"
                >
                  View Recipe <ArrowRight className="h-4 w-4" />
                </Link>
              </div>
            </div>

            {/* Recipe Card 4 */}
            <div className="group overflow-hidden rounded-lg bg-white shadow-md transition-all hover:shadow-lg">
              <div className="relative h-64 overflow-hidden">
                <Image
                  src="/placeholder.svg?height=400&width=600&query=shrimp ceviche with tomato salsa"
                  alt="Shrimp Ceviche"
                  fill
                  className="object-cover object-center transition-transform duration-300 group-hover:scale-105"
                />
              </div>
              <div className="p-6">
                <div className="mb-4 flex flex-wrap gap-2">
                  <span className="rounded-full bg-accent px-3 py-1 text-xs font-medium text-secondary">Appetizer</span>
                  <span className="rounded-full bg-accent px-3 py-1 text-xs font-medium text-secondary">15 min</span>
                </div>
                <h3 className="mb-2 text-xl font-bold text-secondary">Shrimp Ceviche with Original Salsa</h3>
                <p className="mb-4 text-muted-foreground">
                  Fresh and zesty shrimp ceviche made with citrus juices, avocado, and our Original Salsa. Perfect for a
                  light appetizer.
                </p>
                <Link
                  href="/recipes/shrimp-ceviche"
                  className="flex items-center gap-1 font-medium text-primary hover:underline"
                >
                  View Recipe <ArrowRight className="h-4 w-4" />
                </Link>
              </div>
            </div>

            {/* Recipe Card 5 */}
            <div className="group overflow-hidden rounded-lg bg-white shadow-md transition-all hover:shadow-lg">
              <div className="relative h-64 overflow-hidden">
                <Image
                  src="/placeholder.svg?height=400&width=600&query=stuffed bell peppers with ground beef and salsa"
                  alt="Stuffed Bell Peppers"
                  fill
                  className="object-cover object-center transition-transform duration-300 group-hover:scale-105"
                />
              </div>
              <div className="p-6">
                <div className="mb-4 flex flex-wrap gap-2">
                  <span className="rounded-full bg-accent px-3 py-1 text-xs font-medium text-secondary">Dinner</span>
                  <span className="rounded-full bg-accent px-3 py-1 text-xs font-medium text-secondary">50 min</span>
                </div>
                <h3 className="mb-2 text-xl font-bold text-secondary">
                  Stuffed Bell Peppers with Garlic Serrano Salsa
                </h3>
                <p className="mb-4 text-muted-foreground">
                  Bell peppers stuffed with a flavorful mixture of rice, ground beef, and topped with our Garlic Serrano
                  Salsa.
                </p>
                <Link
                  href="/recipes/stuffed-peppers"
                  className="flex items-center gap-1 font-medium text-primary hover:underline"
                >
                  View Recipe <ArrowRight className="h-4 w-4" />
                </Link>
              </div>
            </div>

            {/* Recipe Card 6 */}
            <div className="group overflow-hidden rounded-lg bg-white shadow-md transition-all hover:shadow-lg">
              <div className="relative h-64 overflow-hidden">
                <Image
                  src="/placeholder.svg?height=400&width=600&query=avocado toast with poached egg and salsa"
                  alt="Avocado Toast"
                  fill
                  className="object-cover object-center transition-transform duration-300 group-hover:scale-105"
                />
              </div>
              <div className="p-6">
                <div className="mb-4 flex flex-wrap gap-2">
                  <span className="rounded-full bg-accent px-3 py-1 text-xs font-medium text-secondary">Breakfast</span>
                  <span className="rounded-full bg-accent px-3 py-1 text-xs font-medium text-secondary">10 min</span>
                </div>
                <h3 className="mb-2 text-xl font-bold text-secondary">Avocado Toast with Jalapeño Lime Salsa</h3>
                <p className="mb-4 text-muted-foreground">
                  Elevate your avocado toast with a poached egg and a spoonful of our Jalapeño Lime Salsa for a quick
                  and satisfying breakfast.
                </p>
                <Link
                  href="/recipes/avocado-toast"
                  className="flex items-center gap-1 font-medium text-primary hover:underline"
                >
                  View Recipe <ArrowRight className="h-4 w-4" />
                </Link>
              </div>
            </div>
          </div>

          <div className="mt-10 text-center">
            <Link
              href="/recipes/all"
              className="inline-flex items-center gap-2 rounded-md bg-primary px-6 py-3 font-medium text-white hover:bg-primary/90 transition-colors"
            >
              View All Recipes <ArrowRight className="h-5 w-5" />
            </Link>
          </div>
        </div>
      </section>

      {/* Cooking Tips */}
      <section className="py-16">
        <div className="container px-4 md:px-6">
          <div className="grid gap-8 md:grid-cols-2 md:items-center">
            <div>
              <h2 className="mb-4 text-3xl font-bold text-secondary md:text-4xl">Cooking Tips & Tricks</h2>
              <p className="mb-6 text-muted-foreground">
                Get the most out of our salsas with these helpful cooking tips from our culinary team.
              </p>
              <ul className="space-y-4">
                <li className="flex items-start gap-3">
                  <div className="flex h-6 w-6 shrink-0 items-center justify-center rounded-full bg-primary text-sm font-bold text-white">
                    1
                  </div>
                  <div>
                    <h3 className="font-bold text-secondary">Layer Your Flavors</h3>
                    <p className="text-muted-foreground">
                      Use our salsas both during cooking and as a finishing touch to create depth of flavor in your
                      dishes.
                    </p>
                  </div>
                </li>
                <li className="flex items-start gap-3">
                  <div className="flex h-6 w-6 shrink-0 items-center justify-center rounded-full bg-primary text-sm font-bold text-white">
                    2
                  </div>
                  <div>
                    <h3 className="font-bold text-secondary">Marinate with Salsa</h3>
                    <p className="text-muted-foreground">
                      Our salsas make excellent marinades for meats and vegetables. The acidity helps tenderize while
                      adding flavor.
                    </p>
                  </div>
                </li>
                <li className="flex items-start gap-3">
                  <div className="flex h-6 w-6 shrink-0 items-center justify-center rounded-full bg-primary text-sm font-bold text-white">
                    3
                  </div>
                  <div>
                    <h3 className="font-bold text-secondary">Mix into Dressings</h3>
                    <p className="text-muted-foreground">
                      Blend our salsas with olive oil and vinegar for unique salad dressings that pack a flavorful
                      punch.
                    </p>
                  </div>
                </li>
                <li className="flex items-start gap-3">
                  <div className="flex h-6 w-6 shrink-0 items-center justify-center rounded-full bg-primary text-sm font-bold text-white">
                    4
                  </div>
                  <div>
                    <h3 className="font-bold text-secondary">Warm It Up</h3>
                    <p className="text-muted-foreground">
                      Gently warming our salsas can release more flavor compounds, making them even more aromatic and
                      delicious.
                    </p>
                  </div>
                </li>
              </ul>
            </div>
            <div className="relative h-[400px] overflow-hidden rounded-lg md:h-[500px]">
              <Image
                src="/placeholder.svg?height=800&width=600&query=chef cooking with salsa in professional kitchen"
                alt="Cooking with Salsa"
                fill
                className="object-cover object-center"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Submit Recipe CTA */}
      <section className="bg-secondary py-16 text-white">
        <div className="container px-4 md:px-6">
          <div className="mx-auto max-w-3xl text-center">
            <h2 className="mb-4 text-3xl font-bold md:text-4xl">Share Your Creations</h2>
            <p className="mb-8 text-white/90">
              Have a delicious recipe featuring our salsas? We would love to feature it on our website!
            </p>
            <Link
              href="/recipes/submit"
              className="inline-flex items-center gap-2 rounded-md bg-primary px-6 py-3 font-medium text-white hover:bg-primary/90 transition-colors"
            >
              Submit Your Recipe <ArrowRight className="h-5 w-5" />
            </Link>
          </div>
        </div>
      </section>
    </div>
  )
}
