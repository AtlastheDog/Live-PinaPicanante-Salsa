import Image from "next/image"
import Link from "next/link"
import { ArrowLeft } from "lucide-react"
import PreOrderForm from "@/components/pre-order-form"

// Define product data with updated names
const products = {
  "pina-picante-hot": {
    name: "Piña Picante - Hot",
    description: "A bold, complex blend of roasted habanero, jalapeño, tomatoes, and garlic with sweet pineapple.",
    longDescription:
      "Our signature Piña Picante Hot combines the sweetness of pineapple with the fiery kick of habanero peppers. Each jar is handcrafted with roasted vegetables to create a complex flavor profile that's both sweet and spicy. The habaneros provide a significant heat that builds gradually, while the pineapple offers a tropical sweetness that balances the fire. Perfect for those who love their salsa with a serious kick.",
    price: "$14.59",
    image: "/pineapple-habanero-mason-jar.png",
    heatLevel: 4,
    ingredients:
      "Tomatoes, Pineapple, Habanero Peppers, Jalapeño Peppers, Onion, Garlic, Cilantro, Lime Juice, Salt, Spices",
    pairings: "Grilled fish tacos, pork carnitas, chicken quesadillas, or simply with tortilla chips",
  },
  "pina-picante-mild": {
    name: "Piña Picante - Mild",
    description: "A gentle blend of roasted jalapeño, tomatoes, and garlic with sweet pineapple for a milder kick.",
    longDescription:
      "Our Piña Picante Mild offers all the complex flavors of our signature salsa but with a gentler heat level. The sweet pineapple shines through, complemented by roasted jalapeños that provide just enough warmth without overwhelming the palate. This version is perfect for those who appreciate flavor over fire, and it's a family-friendly option that everyone can enjoy.",
    price: "$12.99",
    image: "/pina-picante-mild-jar.webp",
    heatLevel: 2,
    ingredients: "Tomatoes, Pineapple, Jalapeño Peppers, Onion, Garlic, Cilantro, Lime Juice, Salt, Spices",
    pairings: "Breakfast eggs, avocado toast, grilled chicken, or as a marinade for shrimp",
  },
  "classic-hot": {
    name: "Classic - Hot",
    description:
      "A traditional blended salsa with roasted habanero, jalapeño, tomatoes, and garlic. Perfect for dipping.",
    longDescription:
      "Our Classic Hot salsa is a traditional recipe that focuses on the pure, robust flavors of roasted vegetables. Without the pineapple, this salsa lets the habanero and jalapeño peppers take center stage, creating a straightforward heat that salsa purists will appreciate. The smooth, blended texture makes it perfect for dipping, while the complex roasted flavors elevate it above mass-produced alternatives.",
    price: "$12.99",
    image: "/classic-hot-salsa-jar.webp",
    heatLevel: 4,
    ingredients: "Tomatoes, Habanero Peppers, Jalapeño Peppers, Onion, Garlic, Cilantro, Lime Juice, Salt, Spices",
    pairings: "Tortilla chips, tacos, burritos, or as a spicy addition to soups and stews",
  },
  "classic-mild": {
    name: "Classic - Mild",
    description:
      "A traditional mild blended salsa with roasted jalapeño, tomatoes, and garlic. Family-friendly heat level.",
    longDescription:
      "Our Classic Mild salsa offers the authentic taste of traditional salsa with a gentle heat level that everyone can enjoy. The roasted jalapeños provide just enough warmth to make their presence known without overwhelming the other flavors. The smooth texture and balanced taste make this a versatile salsa that works well in any Mexican or Southwestern dish.",
    price: "$12.99",
    image: "/classic-mild-salsa-jar.png",
    heatLevel: 2,
    ingredients: "Tomatoes, Jalapeño Peppers, Onion, Garlic, Cilantro, Lime Juice, Salt, Spices",
    pairings: "Scrambled eggs, nachos, quesadillas, or as a cooking ingredient in chili",
  },
}

export default function ProductPage({ params }: { params: { slug: string } }) {
  const product = products[params.slug as keyof typeof products]

  if (!product) {
    return (
      <div className="container mx-auto px-4 py-12 text-center">
        <h1 className="text-2xl font-bold">Product not found</h1>
        <Link href="/products" className="mt-4 inline-flex items-center text-[#8b4513] hover:underline">
          <ArrowLeft className="mr-2 h-4 w-4" />
          Back to products
        </Link>
      </div>
    )
  }

  return (
    <div className="bg-[#f8f3e6]">
      <div className="container mx-auto px-4 py-8">
        <Link href="/products" className="inline-flex items-center text-[#8b4513] hover:underline">
          <ArrowLeft className="mr-2 h-4 w-4" />
          Back to products
        </Link>

        <div className="mt-8 grid grid-cols-1 gap-8 md:grid-cols-2">
          <div className="relative aspect-square overflow-hidden rounded-lg bg-white">
            <Image src={product.image || "/placeholder.svg"} alt={product.name} fill className="object-cover" />
          </div>

          <div>
            <h1 className="text-3xl font-bold text-[#8b4513]">{product.name}</h1>
            <p className="mt-2 text-xl font-bold text-[#c25a28]">{product.price}</p>

            <div className="mt-4 flex items-center">
              <span className="mr-2 font-medium">Heat Level:</span>
              <div className="flex">
                {Array.from({ length: product.heatLevel }).map((_, i) => (
                  <svg
                    key={i}
                    xmlns="http://www.w3.org/2000/svg"
                    width="20"
                    height="20"
                    viewBox="0 0 24 24"
                    fill="#c25a28"
                    stroke="none"
                  >
                    <path d="M16.5,3C13.605,3,12,5.09,12,5.09S10.395,3,7.5,3C4.462,3,2,5.462,2,8.5c0,4.171,4.912,8.213,6.281,9.49 C9.858,19.46,12,21.35,12,21.35s2.142-1.89,3.719-3.36C17.088,16.713,22,12.671,22,8.5C22,5.462,19.538,3,16.5,3z" />
                  </svg>
                ))}
                {Array.from({ length: 5 - product.heatLevel }).map((_, i) => (
                  <svg
                    key={i + product.heatLevel}
                    xmlns="http://www.w3.org/2000/svg"
                    width="20"
                    height="20"
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

            <div className="mt-6">
              <p className="text-gray-700">{product.longDescription}</p>
            </div>

            <div className="mt-6">
              <h2 className="text-xl font-bold text-[#8b4513]">Ingredients</h2>
              <p className="mt-2 text-gray-700">{product.ingredients}</p>
            </div>

            <div className="mt-4">
              <h2 className="text-xl font-bold text-[#8b4513]">Pairs Well With</h2>
              <p className="mt-2 text-gray-700">{product.pairings}</p>
            </div>

            <div className="mt-8 rounded-lg bg-white p-6">
              <h2 className="mb-4 text-xl font-bold text-[#8b4513]">Pre-Order Now</h2>
              <div className="mb-4 rounded-md bg-yellow-50 p-4 text-sm text-yellow-800">
                <p>
                  <strong>Note:</strong> We are currently taking pre-orders only. No payment is required at this time.
                  We'll contact you when your order is ready for fulfillment.
                </p>
              </div>

              <PreOrderForm productName={product.name} />
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}
