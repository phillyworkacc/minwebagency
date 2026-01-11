'use client'
import Footer from "@/components/Footer/Footer"
import Header from "@/components/Header/Header"
import Reviews from "@/components/Reviews/Reviews"
import Spacing from "@/components/Spacing/Spacing"

export default function ReviewsPage () {
   return (<>
      <Header />
      <Spacing size={2} />
      <Reviews />
      <Spacing size={6} />
      <Footer />
   </>)
}
