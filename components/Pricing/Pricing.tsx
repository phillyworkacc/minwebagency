'use client'
import { Check, Phone } from "lucide-react"
import { CSSProperties } from "react"
import Card from "../Card/Card"
import Link from "next/link"
import Spacing from "../Spacing/Spacing"

export default function Pricing () {
   const cardStyles: CSSProperties = {
      width: '500px', padding: '25px', border: '1px solid #f1f1f1', boxShadow: '0 2px 4px rgba(0, 0, 0, 0.095)'
   }

   return (
      <section className='pricing' style={{ backgroundColor: "#f7f7f7" }}>
         <div className="page-container">
            <div className="text-xxxl bold-700 full pd-2 text-center">Our Pricing</div>
            <div className="box full dfb align-center justify-center">
               <Card styles={cardStyles}>
                  <div className="text-s bold-500 full mb-05">Contractor Package</div>
                  <div className="text-xl bold-800 full">£200</div>
                  <div className="text-xxxs grey-5 full mb-15">per month</div>
                  <div className="text-xxs full dfb align-center gap-5 pd-1"><Check size={17} color="#1121ff" /> Professional Website</div>
                  <div className="text-xxs full dfb align-center gap-5 pd-1"><Check size={17} color="#1121ff" /> Missed Call Text Back</div>
                  <div className="text-xxs full dfb align-center gap-5 pd-1"><Check size={17} color="#1121ff" /> Quote Form</div>
                  <div className="text-xxs full dfb align-center gap-5 pd-1"><Check size={17} color="#1121ff" /> SMS Chat Bot</div>
                  <div className="text-xxs full dfb align-center gap-5 pd-1"><Check size={17} color="#1121ff" /> 5-Star Google Reviews</div>
                  <div className="text-xxs full dfb align-center gap-5 pd-1"><Check size={17} color="#1121ff" /> Website Management</div>
                  <div className="text-xxs full dfb align-center gap-5 pd-1"><Check size={17} color="#1121ff" /> Website Analytics (optional)</div><br />
                  <Link className="xs full" href="" target="_blank">
                     <button className="xxs full pd-13">Book A Call <Phone size={17} /></button>
                  </Link>
               </Card>
            </div>
            <Spacing size={4} />
         </div>
      </section>
   )
}
