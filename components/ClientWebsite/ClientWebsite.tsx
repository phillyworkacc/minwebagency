"use client"
import "./ClientWebsite.css"
import { CustomUserIcon } from "../Icons/Icon";
import { motion } from "framer-motion";

type ClientWebsiteProps = {
   website: {
      name: string;
      link: string;
      description: string;
      logo: string;
   };
   index: number;
}

export default function ClientWebsite ({ website, index }: ClientWebsiteProps) {
   const openPageInNewTab = () => {
      window.open(website.link, "_blank");
   }
   
   return (
      <motion.div 
         className="client-website box cursor-pointer"
         onClick={openPageInNewTab}
         initial={{ y: 50, opacity: 0 }}
         animate={{ y: 0, opacity: 1 }}
         transition={{ duration: 0.2, ease: "easeIn", delay: index * 0.2 }}
      >
         <div className="box full dfb align-center gap-10">
            <div className="box h-full fit">
               <CustomUserIcon url={website.logo} size={40} round />
            </div>
         </div>
         <div className="text-sm full bold-600 pd-1">{website.name}</div>
         <div className="text-xxs full grey-5 mb-1">{website.description}</div>
         <div className="text-xxxs full grey-4 visible-link">{website.link}</div>
      </motion.div>
   )
}