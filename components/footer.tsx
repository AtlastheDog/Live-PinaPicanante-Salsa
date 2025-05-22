import Link from "next/link"
import Image from "next/image"
import { Facebook, Instagram, Twitter } from "lucide-react"

export function Footer() {
  return (
    <footer className="bg-secondary text-white">
      <div className="container px-4 py-12 md:px-6">
        <div className="grid grid-cols-1 gap-8 md:grid-cols-4">
          <div className="flex flex-col items-start">
            <Link href="/" className="mb-4 flex items-center gap-2">
              <Image
                src="/pina-picante-logo.png"
                alt="Piña Picante Salsa"
                width={60}
                height={60}
                className="h-12 w-auto rounded-md bg-accent p-1"
              />
              <span className="text-xl font-bold">Piña Picante</span>
            </Link>
            <p className="text-sm text-accent/80">
              Handcrafted salsas made with fresh, locally sourced ingredients from California's Central Coast.
            </p>
            <div className="mt-4 flex gap-4">
              <Link href="#" className="text-accent hover:text-primary transition-colors">
                <Facebook className="h-5 w-5" />
                <span className="sr-only">Facebook</span>
              </Link>
              <Link href="#" className="text-accent hover:text-primary transition-colors">
                <Instagram className="h-5 w-5" />
                <span className="sr-only">Instagram</span>
              </Link>
              <Link href="#" className="text-accent hover:text-primary transition-colors">
                <Twitter className="h-5 w-5" />
                <span className="sr-only">Twitter</span>
              </Link>
            </div>
          </div>

          <div>
            <h3 className="mb-4 text-lg font-semibold">Shop</h3>
            <ul className="space-y-2 text-sm">
              <li>
                <Link href="/products" className="text-accent/80 hover:text-accent transition-colors">
                  All Products
                </Link>
              </li>
              <li>
                <Link href="/products" className="text-accent/80 hover:text-accent transition-colors">
                  Salsas
                </Link>
              </li>
              <li>
                <Link href="/products" className="text-accent/80 hover:text-accent transition-colors">
                  Gift Sets
                </Link>
              </li>
              <li>
                <Link href="/products" className="text-accent/80 hover:text-accent transition-colors">
                  Merchandise
                </Link>
              </li>
            </ul>
          </div>

          <div>
            <h3 className="mb-4 text-lg font-semibold">Company</h3>
            <ul className="space-y-2 text-sm">
              <li>
                <Link href="/about" className="text-accent/80 hover:text-accent transition-colors">
                  Our Story
                </Link>
              </li>
              <li>
                <Link href="/recipes" className="text-accent/80 hover:text-accent transition-colors">
                  Recipes
                </Link>
              </li>
              <li>
                <Link href="/contact" className="text-accent/80 hover:text-accent transition-colors">
                  Contact Us
                </Link>
              </li>
            </ul>
          </div>

          <div>
            <h3 className="mb-4 text-lg font-semibold">Newsletter</h3>
            <p className="mb-4 text-sm text-accent/80">
              Subscribe to get special offers, free giveaways, and new product announcements.
            </p>
            <form className="flex flex-col gap-2">
              <input
                type="email"
                placeholder="Your email"
                className="rounded-md border-none bg-white/10 px-3 py-2 text-sm text-white placeholder:text-white/50"
                required
              />
              <button
                type="submit"
                className="rounded-md bg-primary px-3 py-2 text-sm font-medium text-white hover:bg-primary/90"
              >
                Subscribe
              </button>
            </form>
          </div>
        </div>

        <div className="mt-12 border-t border-white/10 pt-6 text-center text-xs text-accent/60">
          <p>© {new Date().getFullYear()} Piña Picante Salsa. All rights reserved.</p>
          <div className="mt-2 flex justify-center gap-4">
            <Link href="#" className="hover:text-accent transition-colors">
              Privacy Policy
            </Link>
            <Link href="#" className="hover:text-accent transition-colors">
              Terms of Service
            </Link>
          </div>
        </div>
      </div>
    </footer>
  )
}
