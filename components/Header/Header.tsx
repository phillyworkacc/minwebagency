'use client'
import "./Header.css"
import { BricolageGrotesqueFont } from "@/app/fonts";
import { MinwebLogo } from "@/components/Icons/Icon"
import { useRouter } from "next/navigation";
import Link from "next/link";

export default function Header() {
   const router = useRouter();
   
   return (
      <header>
         <div className="header-container">
            <div className="logo" onClick={() => router.push('/')}>
               <MinwebLogo size={40} />
               <p className={BricolageGrotesqueFont.className}>minweb.</p>
            </div>
            <div className="action">
               <Link href='https://client.minwebagency.com/login'>
                  <button className="xxs pd-1 pdx-2">Login</button>
               </Link>
            </div>
         </div>
         <div className="box full dfb justify-center align-center pd-1 mt-1 mb-2 gap-20 wrap mw-1200">
            <Link href='/our-work'>
               <div className="text-xs visible-link">Our Work</div>
            </Link>
            <Link href='/pricing'>
               <div className="text-xs visible-link">Pricing</div>
            </Link>
            <Link href='/reviews'>
               <div className="text-xs visible-link">Reviews</div>
            </Link>
         </div>
      </header>
   )
}
