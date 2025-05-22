"use server"

import { Resend } from "resend"

const resend = new Resend(process.env.RESEND_API_KEY)

interface PreOrderData {
  productName: string
  quantity: number
  email: string
  name: string
  phone: string
  message: string
}

export async function sendPreOrderEmail(data: PreOrderData) {
  try {
    // Format the message for better readability
    const formattedMessage = data.message ? data.message.replace(/\n/g, "<br>") : "None provided"

    // Calculate case information
    const jars = data.quantity
    const cases = Math.floor(jars / 12)
    const remainingJars = jars % 12
    const quantityText =
      cases > 0
        ? `${cases} case${cases > 1 ? "s" : ""}${remainingJars > 0 ? ` and ${remainingJars} jar${remainingJars > 1 ? "s" : ""}` : ""}`
        : `${jars} jar${jars > 1 ? "s" : ""}`

    // Send the email using Resend
    const { data: emailData, error } = await resend.emails.send({
      from: "Piña Picante Pre-Orders <orders@resend.dev>",
      to: "mattcasey8@gmail.com",
      subject: `New Pre-Order: ${data.quantity} × ${data.productName}`,
      html: `
        <div style="font-family: sans-serif; max-width: 600px; margin: 0 auto;">
          <h1 style="color: #8b4513; border-bottom: 2px solid #8b4513; padding-bottom: 10px;">New Piña Picante Pre-Order</h1>
          
          <div style="background-color: #f9f5eb; padding: 20px; border-radius: 5px; margin: 20px 0;">
            <h2 style="color: #8b4513; margin-top: 0;">Order Details</h2>
            <p><strong>Product:</strong> ${data.productName}</p>
            <p><strong>Quantity:</strong> ${quantityText} (${data.quantity} total)</p>
          </div>
          
          <div style="background-color: #f9f5eb; padding: 20px; border-radius: 5px; margin: 20px 0;">
            <h2 style="color: #8b4513; margin-top: 0;">Customer Information</h2>
            <p><strong>Name:</strong> ${data.name}</p>
            <p><strong>Email:</strong> ${data.email}</p>
            <p><strong>Phone:</strong> ${data.phone || "Not provided"}</p>
          </div>
          
          <div style="background-color: #f9f5eb; padding: 20px; border-radius: 5px; margin: 20px 0;">
            <h2 style="color: #8b4513; margin-top: 0;">Additional Comments</h2>
            <p>${formattedMessage}</p>
          </div>
          
          <p style="font-size: 12px; color: #666; margin-top: 30px;">
            This is an automated message from your Piña Picante website. The customer has been informed that this is a pre-order only and no payment has been collected.
          </p>
        </div>
      `,
    })

    if (error) {
      console.error("Error sending email:", error)
      throw new Error(error.message)
    }

    return { success: true, data: emailData }
  } catch (error) {
    console.error("Error in sendPreOrderEmail:", error)
    throw new Error("Failed to send pre-order email. Please try again later.")
  }
}
