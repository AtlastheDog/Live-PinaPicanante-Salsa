"use client"

import type React from "react"

import { useState } from "react"
import { sendPreOrderEmail } from "@/app/actions"

interface PreOrderFormProps {
  productName: string
}

export default function PreOrderForm({ productName }: PreOrderFormProps) {
  const [quantity, setQuantity] = useState(1)
  const [email, setEmail] = useState("")
  const [name, setName] = useState("")
  const [phone, setPhone] = useState("")
  const [message, setMessage] = useState("")
  const [isSubmitting, setIsSubmitting] = useState(false)
  const [isSuccess, setIsSuccess] = useState(false)
  const [error, setError] = useState("")

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    setIsSubmitting(true)
    setError("")

    try {
      await sendPreOrderEmail({
        productName,
        quantity,
        email,
        name,
        phone,
        message,
      })

      setIsSuccess(true)
      setQuantity(1)
      setEmail("")
      setName("")
      setPhone("")
      setMessage("")
    } catch (err) {
      setError("There was an error submitting your pre-order. Please try again or contact us directly.")
      console.error(err)
    } finally {
      setIsSubmitting(false)
    }
  }

  if (isSuccess) {
    return (
      <div className="rounded-md bg-green-50 p-6 text-green-800">
        <h3 className="text-lg font-medium">Thank you for your interest!</h3>
        <p className="mt-2">
          We've received your pre-order request for {productName}. We'll contact you at {email} when we're ready to
          fulfill your order.
        </p>
        <p className="mt-4 text-sm">
          If you have any questions or would like to modify your pre-order, please contact us at info@pinapicante.com
        </p>
        <button
          onClick={() => setIsSuccess(false)}
          className="mt-4 rounded-md bg-green-100 px-4 py-2 text-sm font-medium text-green-800 hover:bg-green-200"
        >
          Submit another pre-order
        </button>
      </div>
    )
  }

  return (
    <form onSubmit={handleSubmit} className="space-y-4">
      {error && (
        <div className="rounded-md bg-red-50 p-4 text-sm text-red-800">
          <p>{error}</p>
          <p className="mt-2">You can also email us directly at info@pinapicante.com to place your pre-order.</p>
        </div>
      )}

      <div>
        <label htmlFor="name" className="block text-sm font-medium text-gray-700">
          Your Name
        </label>
        <input
          type="text"
          id="name"
          value={name}
          onChange={(e) => setName(e.target.value)}
          className="mt-1 block w-full rounded-md border border-gray-300 px-3 py-2 shadow-sm focus:border-[#c25a28] focus:outline-none focus:ring-[#c25a28]"
          required
        />
      </div>

      <div>
        <label htmlFor="email" className="block text-sm font-medium text-gray-700">
          Email Address
        </label>
        <input
          type="email"
          id="email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          className="mt-1 block w-full rounded-md border border-gray-300 px-3 py-2 shadow-sm focus:border-[#c25a28] focus:outline-none focus:ring-[#c25a28]"
          required
        />
      </div>

      <div>
        <label htmlFor="phone" className="block text-sm font-medium text-gray-700">
          Phone Number (optional)
        </label>
        <input
          type="tel"
          id="phone"
          value={phone}
          onChange={(e) => setPhone(e.target.value)}
          className="mt-1 block w-full rounded-md border border-gray-300 px-3 py-2 shadow-sm focus:border-[#c25a28] focus:outline-none focus:ring-[#c25a28]"
        />
      </div>

      <div>
        <label htmlFor="quantity" className="block text-sm font-medium text-gray-700">
          Quantity
        </label>
        <select
          id="quantity"
          value={quantity}
          onChange={(e) => setQuantity(Number(e.target.value))}
          className="mt-1 block w-full rounded-md border border-gray-300 px-3 py-2 shadow-sm focus:border-[#c25a28] focus:outline-none focus:ring-[#c25a28]"
        >
          {[1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 12, 24].map((num) => (
            <option key={num} value={num}>
              {num} {num === 1 ? "jar" : "jars"}
            </option>
          ))}
          <option value="36">36 jars (3 cases)</option>
          <option value="48">48 jars (4 cases)</option>
          <option value="60">60 jars (5 cases)</option>
        </select>
      </div>

      <div>
        <label htmlFor="message" className="block text-sm font-medium text-gray-700">
          Additional Comments (optional)
        </label>
        <textarea
          id="message"
          value={message}
          onChange={(e) => setMessage(e.target.value)}
          rows={3}
          className="mt-1 block w-full rounded-md border border-gray-300 px-3 py-2 shadow-sm focus:border-[#c25a28] focus:outline-none focus:ring-[#c25a28]"
        />
      </div>

      <button
        type="submit"
        disabled={isSubmitting}
        className="w-full rounded-md bg-[#8b4513] px-4 py-2 text-white hover:bg-[#8b4513]/90 focus:outline-none focus:ring-2 focus:ring-[#8b4513] focus:ring-offset-2 disabled:opacity-50"
      >
        {isSubmitting ? "Submitting..." : "Submit Pre-Order Request"}
      </button>

      <p className="text-xs text-gray-500">
        By submitting this form, you're expressing interest in our products. We'll contact you when we're ready to
        fulfill your order. No payment is required at this time.
      </p>
    </form>
  )
}
