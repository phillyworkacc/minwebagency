"use client"
import "./Footer.css"
import Spacing from "@/components/Spacing/Spacing";
import Link from "next/link";
import { Mail, MailCheck } from "lucide-react";
import { CustomIcon } from "@/components/Icons/Icon";
import { ReactNode } from "react";


function FooterLink (
   { link, label, icon, instagram }:
   { link: string, label: string, icon: ReactNode, instagram?: boolean }
) {
   return (
      <Link href={link} target="_blank" className={`footer-link-box ${instagram?"instagram":''}`}>
         <div className="text-xxs dfb align-center gap-5">
            {icon} <span className={`footer-link${instagram?"-instagram":''}`}>{label}</span>
         </div>
      </Link>
   )
}

export default function Footer() {
   const cooperations = [
      {
         link: "https://qualysservs.com/?utm_source=grxnd",
         iconUrl: "https://qualysservs.com/assets/img/logo.png",
         label: "Qualys Services"
      },
      {
         link: "https://ph10.freevar.com/?utm_source=grxnd",
         iconUrl: "https://ph10.freevar.com/favicon.ico",
         label: "PH10"
      },
      {
         link: "https://visora.vercel.app/?utm_source=grxnd",
         iconUrl: "https://visora.vercel.app/favicon.ico",
         label: "Visora"
      },
   ]

   return (
      <footer className="footer">
         <div className="footer-wrapper">
            <div className="box full pd-2">
               <div className="text-xxs full text-center">
                  We help small businesses stand out online - without breaking the bank.
               </div>
            </div>
            <Spacing size={1} />
            <div className="footer-link-sections">
               <div className="footer-link-section">
                  <div className="text-s bold-600 full mb-1">Contact Us</div>
                  <FooterLink
                     link="mailto:agencyminweb@gmail.com"
                     label="Send us a Mail"
                     icon={<MailCheck size={17} />}
                  />
                  <div className="text-xxs dfb align-center gap-5">
                     <Mail size={17} /> agencyminweb@gmail.com
                  </div>
               </div>

               <div className="footer-link-section">
                  <div className="text-s bold-600 full mb-1">Cooperations</div>
                  {cooperations.map((cooperation, index) => (
                     <div key={index} className="box fit pd-05">
                        <FooterLink
                           link={cooperation.link}
                           label={cooperation.label}
                           icon={<CustomIcon url={cooperation.iconUrl} round size={17} />}
                        />
                     </div>
                  ))}
               </div>

               <div className="footer-link-section">
                  <div className="text-s bold-600 full mb-1">Founder - Philip</div>
                  <div className="box fit pd-05">
                     <FooterLink
                        link="https://mypocketskill.com/listings/66222/"
                        label="Philip's Profile"
                        icon={<CustomIcon url="https://static.mypocketskill.com/static/favicon/icon-32.png" round size={17} />}
                     />
                  </div>
               </div>
            </div>
            
            <Spacing size={1} />

            <div className="box full pd-1">
               <p className="footer-copy text-xxxs text-center full">
                  &copy; {new Date().getFullYear()} Minweb. All rights reserved
               </p>
            </div>
         </div>
      </footer>
   );
}
