'use client'
import ClientWebsite from "@/components/ClientWebsite/ClientWebsite"
import { motion } from "framer-motion"

export default function OurWork () {
   const websites = [
      {
         name: "The Loupe Collective", 
         link: "https://theloupecollective.com/",
         logo: "https://cdn.shopify.com/s/files/1/0981/8449/5441/files/favicon.ico?v=1762179399"
      },
      {
         name: "UrbanAura", 
         link: "https://uaofk.com/",
         logo: "https://uaofk.com/cdn/shop/files/logo.jpg?crop=center&height=32&v=1732961531&width=32"
      },
      {
         name: "Qualys Services Ltd", 
         link: "https://qualysservs.com/",
         logo: "https://qualysservs.com/assets/img/logo.png"
      },
      {
         name: "Ready To Grow Plants", 
         link: "https://readytogrowplants.co.uk/",
         logo: "https://readytogrowplants.co.uk/cdn/shop/files/apha_kogo.png?v=1762201808&width=150"
      },
      {
         name: "Anouska Longley", 
         link: "https://www.anouskalongley.co.uk/",
         logo: "https://static.wixstatic.com/media/57a43f_3243402591ca4f219bc26e262e29fb8f~mv2.jpg/v1/fill/w_873,h_1020,fp_0.52_0.43,q_85,usm_0.66_1.00_0.01,enc_avif,quality_auto/57a43f_3243402591ca4f219bc26e262e29fb8f~mv2.jpg"
      },
      {
         name: "The Fertility Connect", 
         link: "https://thefertilityconnect.com/",
         logo: "https://thefertilityconnect.com/favicon.ico"
      },
      {
         name: "Stroller Rain Covers", 
         link: "https://strollerraincovers.co.uk/",
         logo: "https://strollerraincovers.co.uk/cdn/shop/files/strollerraincoversbanner.png?v=1767025568&width=250"
      }
   ]

   return (<div className="box full pdx-2">
      <div className="text-xxxl bold-700 text-center pd-1">Our Work</div>
      <div className="text-xs grey-4 text-center pd-1 mb-3">Here are some of the websites we've built for our customers</div>
      <div className="box full dfb justify-center">
         <div className="box full dfb justify-center wrap gap-10 mw-1000">
            {websites.map((website, index) => (
               <ClientWebsite key={index} website={website} index={index} />
            ))}
         </div>
      </div>
   </div>)
}
