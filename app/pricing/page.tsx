'use client'
import Footer from "@/components/Footer/Footer"
import Header from "@/components/Header/Header"
import Pricing from "@/components/Pricing/Pricing"
import Spacing from "@/components/Spacing/Spacing"

export default function PricingPage () {
   return (<>
      <Header />
      <Spacing size={2} />
      <Pricing />
      <Spacing size={6} />
      <Footer />
   </>)
}
