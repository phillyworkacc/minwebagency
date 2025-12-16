'use client'

import { Star } from "lucide-react"

export default function Analytics() {
   return (
      <div className="box full dfb align-center justify-center pd-4" style={{ background: "#eff1ff" }}>
         <div className="box">
            <div className="box full dfb align-center justify-center gap-60">
               <div className="text-xxs full bold-700">
                  <div className="text-b fit">50+</div>
                  <div className="text-xxs full bold-400 whitespace-nowrap">Happy Clients</div>
               </div>
               <div className="text-xxs full bold-700">
                  <div className="text-b fit">5 <Star size={30} color="#ffbb00" fill="#ffbb00" /></div>
                  <div className="text-xxs full bold-400 whitespace-nowrap">Rated Service</div>
               </div>
            </div>
         </div>
      </div>
   )
}
