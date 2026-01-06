'use client'
import "./Hero.css"
import { ArrowRight, Mail } from "lucide-react";
import { useRouter } from "next/navigation";
import { BricolageGrotesqueFont } from "@/app/fonts";
import HeroTag from "./HeroTag"
import Link from "next/link";

export default function HeroSection () {
   const router = useRouter();

   return (
      <>
         <div className="hero">
            <HeroTag />
            <div className={"hero-section-headline bold-800 mt-1 mb-1 text-center pd-15 pdx-3 " + BricolageGrotesqueFont.className}>
               Build a Website That Means Business
            </div>
            <div className="hero-sub-headline mb-2 text-center pdx-1">
               Affordable, high-quality websites built to help small businesses grow fasts.
            </div>
            <div className="hero-sub-headline mb-2 text-center pdx-1">
               Not just a website but a system ready for propelling your business to the next level
            </div>
            <div className="ct-actions dfb align-center justify-center gap-10 mb-3">
               <Link href="https://app.minwebagency.com/onboarding" target="_blank">
                  <button className="xxs pd-13 pdx-3">Start Now <ArrowRight size={17} /></button>
               </Link>
               <Link href="mailto:agencyminweb@gmail.com">
                  <button className="xxs pd-13 pdx-3 outline-black">Contact Us <Mail size={17} /></button>
               </Link>
            </div>
         </div>
      </>
   )
}
