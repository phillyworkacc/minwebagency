'use client'
import "./Hero.css"
import { ArrowRight, Mail, Phone } from "lucide-react";
import { useRouter } from "next/navigation";
import { BricolageGrotesqueFont } from "@/app/fonts";
import Link from "next/link";
import HeroImage from "@/public/hero-image.jpg"

export default function HeroSection () {
   const router = useRouter();

   return (<>
      <div className="hero">
         <div className="box mw-1200 pdx-2">

            <div className="horizontal-convertible gap-30">
               <div className="box full dfb column justify-center">
                  <div className={"text-xb bold-800 pd-15 " + BricolageGrotesqueFont.className}>
                     Website Design & Marketing Systems For Any Business
                  </div>
                  <div className="text-xs pd-1 mb-2 line-height-15">
                     Not just a website but a system ready for propelling your business to the next level
                  </div>
                  <div className="box full dfb align-center gap-10 mb-3">
                     <Link href="/book-call">
                        <button className="xxs pd-13 pdx-3">Book A Call <Phone size={17} /></button>
                     </Link>
                     {/* <Link href="https://app.minwebagency.com/onboarding" target="_blank">
                        <button className="xxs pd-13 pdx-3 outline-black">Start Now <ArrowRight size={17} /></button>
                     </Link> */}
                  </div>
               </div>
               <div className="box full">
                  <div className="hero-image">
                     <img src={HeroImage.src} alt="hero-image" />
                  </div>
               </div>
            </div>

         </div>
      </div>
   </>)
}
