'use client'
import "./Header.css"
import { BricolageGrotesqueFont } from "@/app/fonts";
import { MinwebLogo } from "@/components/Icons/Icon"
import { useRouter } from "next/navigation";
import { useEffect, useState } from "react";
import { Menu, X } from "lucide-react";
import { AnimatePresence, motion } from "framer-motion";
import Link from "next/link";

export default function Header() {
   const router = useRouter();
   const [deviceType, setDeviceType] = useState('');
   const [showHeaderLinksMobile, setShowHeaderLinksMobile] = useState(false);
   
   useEffect(() => {
      setDeviceType(window.innerWidth >= 900 ? "desktop" : "mobile");
      window.addEventListener('resize', () => {
         setDeviceType(window.innerWidth >= 900 ? "desktop" : "mobile");
      })
   }, [])

   return (
      <header>
         <div className="header-container">
            <div className="logo" onClick={() => router.push('/')}>
               <MinwebLogo size={30} />
               <p className={BricolageGrotesqueFont.className}>minweb.</p>
            </div>
            <div className="box full dfb align-center justify-end gap-20">
               {(deviceType == "desktop") ? (<>
                  <div className="box fit dfb align-center justify-center gap-20 pdx-2">
                     <Link href='/our-work'>
                        <div className="text-xs bold-500 visible-link">Our Work</div>
                     </Link>
                     <Link href='/pricing'>
                        <div className="text-xs bold-500 visible-link">Pricing</div>
                     </Link>
                     <Link href='/reviews'>
                        <div className="text-xs bold-500 visible-link">Reviews</div>
                     </Link>   
                  </div>
                  <Link href='https://client.minwebagency.com/login'>
                     <button className="xxs pd-1 pdx-2">Login</button>
                  </Link>
               </>) : (<>
                  <button className="no-shadow outline-black" onClick={() => setShowHeaderLinksMobile(true)}>
                     <Menu />
                  </button>
               </>)}
            </div>
         </div>
         {(deviceType == "mobile") && (<AnimatePresence>
            {(showHeaderLinksMobile) && (
               <motion.div
                  className="header-links-mobile"
                  initial={{ x: -900 }}
                  animate={{ x: 0 }}
                  exit={{ x: -900 }}
                  transition={{ duration: 0.15, ease: "easeIn" }}
               >
                  <div className="box full dfb column gap-10">
                     <div className="box full dfb align-center justify-end">
                        <button className="transparent no-shadow no-hover-scale" onClick={() => setShowHeaderLinksMobile(false)}>
                           <X />
                        </button>
                     </div>
                     <div className="box full dfb column gap-20 pdx-2">
                        <Link href='/'>
                           <div className="text-sm bold-500 visible-link">Home</div>
                        </Link>
                        <Link href='/our-work'>
                           <div className="text-sm bold-500 visible-link">Our Work</div>
                        </Link>
                        <Link href='/pricing'>
                           <div className="text-sm bold-500 visible-link">Pricing</div>
                        </Link>
                        <Link href='/reviews'>
                           <div className="text-sm bold-500 visible-link">Reviews</div>
                        </Link>   
                        <Link href='https://client.minwebagency.com/login'>
                           <button className="xxs pd-1 pdx-2">Login</button>
                        </Link>
                     </div>
                  </div>
               </motion.div>
            )}
         </AnimatePresence>)}
      </header>
   )
}
