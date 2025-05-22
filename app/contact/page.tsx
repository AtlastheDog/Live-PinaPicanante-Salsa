import Image from "next/image"
import Link from "next/link"
import { Mail, Send } from "lucide-react"

export default function ContactPage() {
  return (
    <div className="flex flex-col">
      {/* Hero Banner */}
      <section className="relative py-12">
        <div className="absolute inset-0 z-0">
          <Image
            src="/placeholder.svg?height=600&width=1920&query=california farm with mountains in background"
            alt="California Central Coast"
            fill
            className="object-cover object-center"
          />
          <div className="absolute inset-0 bg-black/50" />
        </div>

        <div className="container relative z-10 px-4 py-12 text-center text-white md:px-6">
          <h1 className="mb-4 text-4xl font-bold md:text-5xl">Contact Us</h1>
          <p className="mx-auto max-w-2xl text-lg text-white/90">
            We'd love to hear from you! Get in touch with the Piña Picante Salsa team.
          </p>
        </div>
      </section>

      {/* Contact Section */}
      <section className="py-16">
        <div className="container px-4 md:px-6">
          <div className="grid gap-10 md:grid-cols-2">
            {/* Contact Information */}
            <div>
              <h2 className="mb-6 text-3xl font-bold text-secondary">Get In Touch</h2>

              {/* Owner Image */}
              <div className="mb-8 overflow-hidden rounded-lg">
                <div className="relative h-[300px] w-full">
                  <Image
                    src="/placeholder.svg?height=600&width=800&query=farm business owners with mountains in background"
                    alt="Piña Picante Salsa Owners"
                    fill
                    className="object-cover object-center"
                  />
                </div>
                <p className="mt-2 text-sm text-muted-foreground">
                  Maria and Carlos Rodriguez, Founders of Piña Picante Salsa
                </p>
              </div>

              <div className="space-y-4">
                <div className="flex items-start gap-3">
                  <Mail className="mt-1 h-5 w-5 text-primary" />
                  <div>
                    <p className="font-medium text-secondary">Email:</p>
                    <a
                      href="mailto:info@pinapicantesalsa.com"
                      className="text-muted-foreground hover:text-primary transition-colors"
                    >
                      info@pinapicantesalsa.com
                    </a>
                  </div>
                </div>
              </div>
            </div>

            {/* Contact Form */}
            <div>
              <div className="rounded-lg border border-border bg-card p-6 shadow-sm">
                <h2 className="mb-4 text-2xl font-bold text-secondary">Send Us a Message</h2>
                <p className="mb-6 text-muted-foreground">
                  Have a question about our products, want to place a bulk order, or interested in carrying our salsas
                  in your store? Fill out the form below and we'll get back to you within 1-2 business days.
                </p>

                <form className="space-y-4">
                  <div className="grid gap-4 sm:grid-cols-2">
                    <div className="space-y-2">
                      <label htmlFor="first-name" className="text-sm font-medium text-secondary">
                        First Name <span className="text-primary">*</span>
                      </label>
                      <input
                        id="first-name"
                        type="text"
                        className="w-full rounded-md border border-input bg-background px-3 py-2 text-sm"
                        required
                      />
                    </div>
                    <div className="space-y-2">
                      <label htmlFor="last-name" className="text-sm font-medium text-secondary">
                        Last Name <span className="text-primary">*</span>
                      </label>
                      <input
                        id="last-name"
                        type="text"
                        className="w-full rounded-md border border-input bg-background px-3 py-2 text-sm"
                        required
                      />
                    </div>
                  </div>

                  <div className="space-y-2">
                    <label htmlFor="email" className="text-sm font-medium text-secondary">
                      Email <span className="text-primary">*</span>
                    </label>
                    <input
                      id="email"
                      type="email"
                      className="w-full rounded-md border border-input bg-background px-3 py-2 text-sm"
                      required
                    />
                  </div>

                  <div className="space-y-2">
                    <label htmlFor="subject" className="text-sm font-medium text-secondary">
                      Subject <span className="text-primary">*</span>
                    </label>
                    <select
                      id="subject"
                      className="w-full rounded-md border border-input bg-background px-3 py-2 text-sm"
                      required
                    >
                      <option value="">Select a subject</option>
                      <option value="product-question">Product Question</option>
                      <option value="wholesale">Wholesale Inquiry</option>
                      <option value="order-issue">Order Issue</option>
                      <option value="feedback">Feedback</option>
                      <option value="other">Other</option>
                    </select>
                  </div>

                  <div className="space-y-2">
                    <label htmlFor="message" className="text-sm font-medium text-secondary">
                      Message <span className="text-primary">*</span>
                    </label>
                    <textarea
                      id="message"
                      rows={5}
                      className="w-full rounded-md border border-input bg-background px-3 py-2 text-sm"
                      required
                    ></textarea>
                  </div>

                  <div className="flex items-start gap-2">
                    <input id="privacy" type="checkbox" className="mt-1 h-4 w-4 rounded border-gray-300" required />
                    <label htmlFor="privacy" className="text-sm text-muted-foreground">
                      I agree that my submitted data is being collected and stored. For details on how we use your
                      information, please see our{" "}
                      <Link href="#" className="text-primary hover:underline">
                        Privacy Policy
                      </Link>
                      .
                    </label>
                  </div>

                  <button
                    type="submit"
                    className="inline-flex items-center gap-2 rounded-md bg-primary px-4 py-2 font-medium text-white hover:bg-primary/90 transition-colors"
                  >
                    Send Message <Send className="h-4 w-4" />
                  </button>
                </form>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Newsletter Section */}
      <section className="bg-secondary py-12 text-white">
        <div className="container px-4 md:px-6">
          <div className="mx-auto max-w-3xl text-center">
            <h2 className="mb-4 text-3xl font-bold">Join Our Mailing List</h2>
            <p className="mb-6 text-white/80">
              Subscribe to our newsletter for recipes, special offers, and updates from our farm.
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
