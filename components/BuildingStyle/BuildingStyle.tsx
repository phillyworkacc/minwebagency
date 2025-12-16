'use client';
import "./BuildingStyle.css"
import { motion } from 'framer-motion';
import Spacing from "../Spacing/Spacing";
import ShopifyImage from "@/public/features/shopify.png"
import CodeImage from "@/public/features/code.png"

const flows = [
   {
      title: "Custom Web Design",
      description: "Experienced web designers build and craft your website for your needs. WordPress, NextJS, etc.",
      image: CodeImage.src,
   },
   {
      title: "Shopify Themes",
      description: "For your clothing brand or e-commerce store, we can custom create themes and styles for your Shopify store.",
      image: ShopifyImage.src
   },
];


export default function BuildingStyle () {
   return (
      <section className="how-it-works" id="how">
         <div className="page-container">
            <h2 style={{fontSize:"2rem"}}>Website Building Style</h2>
            <div className="text-xs grey-5 pd-3 full mb-1 text-center">
               High-quality custom builds tailored to your brand. From full websites to Shopify themes, we design with intention and deliver with precision.
            </div>
            <div className="steps">
               {flows.map((flow, index) => (
                  <motion.div
                     key={index}
                     className="step"
                     initial={{ opacity: 0, y: 20 }}
                     animate={{ opacity: 1, y: 0 }}
                     transition={{ delay: index * 0.2, duration: 0.5 }}
                  >
                     <div className="box full pd-1 pdx-1">
                        <div className="step-image">
                           <img src={flow.image} alt="feature image" />
                        </div>
                     </div>
                     <div className="text-sm bold-700 pd-1 text-left full pdx-15">{flow.title}</div>
                     <div className="text-xxs grey-4 text-left mb-2 full pdx-15">{flow.description}</div>
                  </motion.div>
               ))}
            </div>
         </div>
         <Spacing size={3} />
      </section>
   );
}
