'use client'
import Footer from "@/components/Footer/Footer";
import Header from "@/components/Header/Header";
import Spacing from "@/components/Spacing/Spacing";
import OurWork from "./OurWork";

export default function OurWorkPage () {
   return (
      <>
         <Header />
         <Spacing size={2} />
         <OurWork />
         <Spacing size={6} />
         <Footer />
      </>
   )
}