'use client'

type TrustBarProps = {
   trustItems: {
      icon: React.ReactNode;
      label: string;
   }[];
   bgColor?: string;
   textColor?: string;
}

export default function TrustBar ({ trustItems, bgColor, textColor }: TrustBarProps) {
   return (
      <div 
         className="trust-bar"
         style={{ backgroundColor: bgColor || 'white', color: textColor || 'black' }}
      >
         <div className="box full dfb align-center justify-center gap-20 wrap">
            {trustItems.map((trustItem, index) => (
               <div key={index} className="box fit dfb align-center justify-center gap-5">
                  {trustItem.icon}
                  <div className="text-sm bold-700 whitespace-nowrap">{trustItem.label}</div>
               </div>
            ))}
         </div>
      </div>
   )
}
