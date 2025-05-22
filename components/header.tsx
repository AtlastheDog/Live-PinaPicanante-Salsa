"use client"

import { useState } from "react"
import Link from "next/link"
import Image from "next/image"
import { Menu, X } from "lucide-react"

export function Header() {
  const [isMenuOpen, setIsMenuOpen] = useState(false)

  return (
    <header className="sticky top-0 z-50 w-full bg-accent shadow-sm">
      <div className="container flex h-16 items-center justify-between px-4 md:px-6">
        <Link href="/" className="flex items-center gap-2">
          <Image src="/pina-picante-logo.png" alt="Piña Picante Salsa" width={80} height={80} className="h-12 w-auto" />
          <span className="hidden text-xl font-bold text-primary md:inline-block">Salsa</span>
        </Link>

        <button
          className="block md:hidden"
          onClick={() => setIsMenuOpen(!isMenuOpen)}
          aria-label={isMenuOpen ? "Close menu" : "Open menu"}
        >
          {isMenuOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
        </button>

        <nav
          className={`absolute left-0 right-0 top-16 z-50 bg-accent p-4 shadow-md md:static md:flex md:w-auto md:items-center md:gap-6 md:p-0 md:shadow-none ${isMenuOpen ? "block" : "hidden md:flex"}`}
        >
          <ul className="flex flex-col items-center gap-4 md:flex-row">
            <li>
              <Link
                href="/"
                className="text-secondary hover:text-primary font-medium transition-colors"
                onClick={() => setIsMenuOpen(false)}
              >
                Home
              </Link>
            </li>
            <li>
              <Link
                href="/products"
                className="text-secondary hover:text-primary font-medium transition-colors"
                onClick={() => setIsMenuOpen(false)}
              >
                Products
              </Link>
            </li>
            <li>
              <Link
                href="/about"
                className="text-secondary hover:text-primary font-medium transition-colors"
                onClick={() => setIsMenuOpen(false)}
              >
                Our Story
              </Link>
            </li>
            <li>
              <Link
                href="/recipes"
                className="text-secondary hover:text-primary font-medium transition-colors"
                onClick={() => setIsMenuOpen(false)}
              >
                Recipes
              </Link>
            </li>
            <li>
              <Link
                href="/contact"
                className="text-secondary hover:text-primary font-medium transition-colors"
                onClick={() => setIsMenuOpen(false)}
              >
                Contact
              </Link>
            </li>
          </ul>
          <Link
            href="/products"
            className="mt-4 block rounded-md bg-primary px-4 py-2 text-center font-medium text-white hover:bg-primary/90 md:mt-0"
            onClick={() => setIsMenuOpen(false)}
          >
            Shop Now
          </Link>
        </nav>
      </div>
    </header>
  )
}
