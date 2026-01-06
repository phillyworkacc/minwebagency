'use client'
import { useEffect, useState } from "react";
import { CircleDollarSign } from "lucide-react";
import Select from "../Select/Select";
import { toast } from "sonner";

export default function Pricing () {
   const nicheOptions = ["Choose Niche", "Clothing Brand", "Reseller", "E-Commerce", "Service Business", "Personal Brand", "Saas"];
   const paymentStyleOptions = ["Choose Payment Style", "Monthly", "Yearly", "One-Off", "Website Drops Only (E-Commerce Businesses)"];
   const deliveryTimeOptions = ["Choose Delivery Time", "Next Day", "Within a week", "Within a month", "Within a few months"];

   const [basePrice, setBasePrice] = useState(450);
   const [finalPrice, setFinalPrice] = useState({
      price: 0, description: ''
   })

   const [niche, setNiche] = useState("");
   const [deliveryTime, setDeliveryTime] = useState("");
   const [paymentStyle, setPaymentStyle] = useState("");


   function switchCase (variable: string, cases: { case: string, action: Function }[]) {
      cases.forEach((caseInfo) => {
         if (variable == caseInfo.case) caseInfo.action();
      });
   }

   const onSelectNiche = (nicheSelected: string) => {
      switchCase(nicheSelected, [
         { case: "Clothing Brand", action: () => setBasePrice(400) },
         { case: "Reseller", action: () => setBasePrice(350) },
         { case: "E-Commerce", action: () => setBasePrice(450) },
         { case: "Service Business", action: () => setBasePrice(400) },
         { case: "Personal Brand", action: () => setBasePrice(150) },
         { case: "Saas", action: () => setBasePrice(900) },
      ]);
      setNiche(nicheSelected);
   }

   const onSelectPaymentStyle = (paymentStyleSelected: string) => {
      setPaymentStyle(paymentStyleSelected);
   }

   const onSelectDeliveryTime = (deliveryTimeSelected: string) => {
      switchCase(deliveryTimeSelected, [
         { case: "Next Day", action: () => setBasePrice(p => p * 1.2) },
         { case: "Within a week", action: () => setBasePrice(p => p * 1.1) },
         { case: "Within a month", action: () => setBasePrice(p => p * 1) },
         { case: "Within a few months", action: () => setBasePrice(p => p * 1) },
      ]);
      setDeliveryTime(deliveryTimeSelected);
   }

   const generateEstimate = () => {
      if (niche == "") {
         toast.error("Please choose a niche");
         return;
      }
      if (deliveryTime == "") {
         toast.error("Please choose a desired delivery time");
         return;
      }
      if (paymentStyle == "") {
         toast.error("Please choose a desired payment style");
         return;
      }
      switchCase(paymentStyle, [
         {
            case: "Monthly",
            action: () => setFinalPrice({
               price: 150, description: "All websites paid monthly cost £150 each month."
            })
         },
         {
            case: "Yearly",
            action: () => setFinalPrice({
               price: 1500, description: "Yearly payments come with a 17% discount."
            })
         },
         {
            case: "One-Off",
            action: () => setFinalPrice({
               price: basePrice * 2.5, description: "This is the cost for your website for a one-off payment."
            })
         },
         {
            case: "Website Drops Only (E-Commerce Businesses)",
            action: () => setFinalPrice({
               price: 350, description: "All drops cost £350 each drop with a new website design if you wish."
            })
         },
      ]);
   }

   const estimateAgain = () => {
      setFinalPrice(p => ({ ...p, price: 0 }));
      setNiche("")
      setPaymentStyle("")
      setDeliveryTime("")
   }

   return (
      <section className="pricing">
         <div className="page-container">
            <div className="text-xl bold-700 full pd-05 text-center">Estimate Website Custom Build Cost</div>
            <div className="text-xs grey-5 pd-1 full mb-3 text-center">
               Get an estimate of how much a website at Minweb will cost for your website.
            </div>
            <div className="box full dfb align-center justify-center">
               <div 
                  className="box full dfb column pd-4 pdx-4 no-trans"
                  style={{ background: "#dde1ffff", color: "black", borderRadius: "20px" }}
               >

                  {(finalPrice.price !== 0) ? (<>
                     <div className="text-xb full pd-2 mt-2 bold-800 text-center no-trans">
                        £ {finalPrice.price.toFixed(2)}
                     </div>
                     <div className="text-s full text-center pd-1 no-trans">{finalPrice.description}</div>

                     <div className="box full pd-2 dfb column gap-10 align-center no-trans">
                        <button className="xs fit pd-15 pdx-3 outline-black tiny-shadow" onClick={estimateAgain}>
                           Estimate Again
                        </button>
                     </div>
                  </>) : (<>
                     
                     <div className="box full dfb wrap align-center justify-center gap-10 no-trans">
                        <div className="box fit pd-1">
                           <div className="text-m bold-600 mb-1">Choose Niche</div>
                           <div className="box full pd-05">
                              <Select
                                 options={nicheOptions}
                                 onSelect={(option, index) => { if (index !== 0) onSelectNiche(option); }}
                                 style={{ color: "black", background: "white", padding: "10px", width: "100%", minWidth: "300px", maxWidth: "500px" }}
                                 optionStyle={{ padding: "10px" }}
                              />
                           </div>
                        </div>

                        <div className="box fit pd-1">
                           <div className="text-m bold-600 mb-1">Payment Style</div>
                           <div className="box full pd-05">
                              <Select
                                 options={paymentStyleOptions}
                                 onSelect={(option, index) => { if (index !== 0) onSelectPaymentStyle(option); }}
                                 style={{ color: "black", background: "white", padding: "10px", width: "100%", minWidth: "300px", maxWidth: "500px" }}
                                 optionStyle={{ padding: "10px" }}
                              />
                           </div>
                        </div>

                        <div className="box fit pd-1">
                           <div className="text-m bold-600 mb-1">Delivery Time</div>
                           <div className="box full pd-05">
                              <Select
                                 options={deliveryTimeOptions}
                                 onSelect={(option, index) => { if (index !== 0) onSelectDeliveryTime(option); }}
                                 style={{ color: "black", background: "white", padding: "10px", width: "100%", minWidth: "300px", maxWidth: "500px" }}
                                 optionStyle={{ padding: "10px" }}
                              />
                           </div>
                        </div>

                        <div className="box full pd-2 dfb column gap-10 align-center">
                           <div className="text-s full pd-1 text-center">
                              Click below to generate your estimated price
                           </div>
                           <button className="xs fit pd-15 pdx-3 outline-black tiny-shadow" onClick={generateEstimate}>
                              <CircleDollarSign size={20} /> Generate Price
                           </button>
                        </div>
                     </div>

                  </>)}

               </div>
            </div>
         </div>
      </section>
   )
}
