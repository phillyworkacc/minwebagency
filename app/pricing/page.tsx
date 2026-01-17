'use client'
import Footer from "@/components/Footer/Footer"
import Header from "@/components/Header/Header"
import Pricing from "@/components/Pricing/Pricing"
import CustomWebsitePricing from "@/components/Pricing/CustomWebsitePricing"
import Spacing from "@/components/Spacing/Spacing"

export default function PricingPage () {
   return (<>
      <Header />
      <Pricing />
      <Spacing size={2} />
      <CustomWebsitePricing />
      <Spacing size={6} />
      <Footer />
   </>)
}
