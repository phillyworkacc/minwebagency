'use client';
import "./Services.css"
import Spacing from "../Spacing/Spacing";
import { motion } from 'framer-motion';
import { Bot, CreditCard, DollarSign, FileText, Globe, LineChart, Mail, MessageSquareText, PhoneMissed, ShieldCheck, ShoppingCart, Stars, Timer } from "lucide-react";

const features = [
   {
      title: "Email Marketing",
      description: "Automated campaigns that convert and nurture leads.",
      icon: Mail,
   },
   {
      title: "Missed Call Text-Back",
      description: "Automatically text back missed callers so no lead slips through the cracks.",
      icon: PhoneMissed,
   },
   {
      title: "Payment Processing",
      description: "Secure, fast checkout setups for services or products.",
      icon: CreditCard,
   },
   {
      title: "5-Star Google Reviews",
      description: "Boost visibility and trust with consistently high Google ratings.",
      icon: Stars,
   },
   {
      title: "SMS Quote Requests",
      description: "Get instant quote requests delivered straight to your phone.",
      icon: MessageSquareText,
   },
   {
      title: "Shopify Development",
      description: "Custom Shopify builds designed to drive sales.",
      icon: ShoppingCart,
   },
   {
      title: "Affordable Rates",
      description: "Premium web services without the inflated agency pricing.",
      icon: DollarSign,
   },
   {
      title: "AI Chatbot",
      description: "Smart site assistant that answers questions 24/7.",
      icon: Bot,
   },
   {
      title: "Analytics & Insights",
      description: "Clear metrics that show what's working and what's not.",
      icon: LineChart,
   },
   {
      title: "Website Management",
      description: "Hosting, updates, backups, and ongoing site care.",
      icon: Globe,
   },
   {
      title: "Security & Compliance",
      description: "Secure builds with best-practice protections.",
      icon: ShieldCheck,
   },
   {
      title: "Fast Delivery",
      description: "Quick turnaround times without compromising quality.",
      icon: Timer,
   },
];


export default function Services() {
   return (
      <section className="how-it-works" id="how">
         <div className="page-container">
            <h2 style={{fontSize:"2rem"}}>What we provide?</h2>
            <div className="text-xs grey-5 pd-3 full mb-1 text-center">
               Everything your business needs to run smoothly online, everything is built, managed, and optimized in one place. We handle the heavy lifting: websites, automation, payments, marketing, and tools that save you time and drive results.
            </div>
            <div className="steps">
               {features.map((feature, index) => (
                  <motion.div
                     key={index}
                     className="step"
                     initial={{ opacity: 0, y: 20 }}
                     animate={{ opacity: 1, y: 0 }}
                     transition={{ delay: index * 0.2, duration: 0.5 }}
                  >
                     <div className="step-icon">
                        <div className="box dfb align-center justify-center" style={{ height: "50px", aspectRatio: 1, borderRadius: "50%", background: "#1121ff", color: "white" }}>
                           <feature.icon size={20} />
                        </div>
                     </div>
                     <div className="text-sm bold-700 pd-1 text-left full pdx-15">{feature.title}</div>
                     <div className="text-xxs grey-4 text-left mb-2 full pdx-15">{feature.description}</div>
                  </motion.div>
               ))}
            </div>
         </div>
         <Spacing size={3} />
      </section>
   );
}
