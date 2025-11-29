'use client'
import "./Header.css"
import { BricolageGrotesqueFont } from "@/app/fonts";
import { MinwebLogo } from "@/components/Icons/Icon"

export default function Header() {
	const helloBtn = () => {
		alert("Hello there! Thanks for visiting the minweb website.")
	}
   
   return (
      <div className="box full h-fit dfb align-center justify-center" style={{background:"#eff1ff"}}>
         <header>
            <div className="logo">
               <MinwebLogo size={40} />
               <p className={BricolageGrotesqueFont.className}>minweb.</p>
            </div>
            <div className="action">
               <button className="xxs pd-1 pdx-2" onClick={helloBtn}>Hello</button>
            </div>
         </header>
      </div>
   )
}
