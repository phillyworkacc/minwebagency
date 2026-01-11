'use client'
import { Star, UserStar } from "lucide-react"
import TrustBar from "../TrustBar/TrustBar"

export default function Analytics() {
   return (
      <div className="box full dfb align-center justify-center mb pd-4" style={{ background: "#eff1ff" }}>
         <TrustBar 
            trustItems={[
               { icon: <UserStar />, label: "50+ Happy Clients" },
               { icon: <Star color="#ffbb00" fill="#ffbb00" />, label: "5 Star Rated Service" },
            ]}
            bgColor="#eff1ff"
         />
      </div>
   )
}
