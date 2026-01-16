"use client"
import "./ClientWebsite.css"
import { getWebsiteMetadata } from "@/app/actions/extras";
import { SquareArrowOutUpRight } from "lucide-react";
import { useState, useEffect } from "react";
import { CustomUserIcon } from "../Icons/Icon";
import { useRouter } from "next/navigation";
import Link from "next/link";
import DefaultWebsiteIcon from "@/public/loading-site.png";

type ClientWebsiteProps = {
   website: string;
}

export default function ClientWebsite ({ website }: ClientWebsiteProps) {
   const router = useRouter();
   const [metadata, setMetadata] = useState({
      websiteTitle: website, icon: DefaultWebsiteIcon.src
   })

   const loadMetadata = async () => {
      const siteMetadata = await getWebsiteMetadata(`${website}`);
      if (siteMetadata !== null) setMetadata(siteMetadata);
   }

   useEffect(() => {
      const load = () => loadMetadata();
      load();
   }, [])

   const openPageInNewTab = () => {
      window.open(website, "_blank");
   }

   return (
      <div className="client-website box cursor-pointer" onClick={openPageInNewTab}>
         <div className="box full dfb align-center gap-10">
            <div className="box h-full fit">
               <CustomUserIcon url={metadata.icon} size={40} round />
            </div>
         </div>
         <div className="text-s full bold-600 pd-1">{metadata.websiteTitle}</div>
         <div className="text-t full visible-link">{website}</div>
      </div>
   )
}