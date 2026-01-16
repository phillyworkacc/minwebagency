'use client'
import ClientWebsite from "@/components/ClientWebsite/ClientWebsite"

export default function OurWork () {
   const websites = [
      'https://theloupecollective.com/', 'https://uaofk.com/', 'https://readytogrowplants.co.uk/', 'https://qualysservs.com/',
      'https://thefertilityconnect.com/', 'https://www.anouskalongley.co.uk/', 'https://strollerraincovers.co.uk/'
   ]

   return (<>
      <div className="text-xxxl bold-700 text-center pd-2 mb-2">Our Work</div>
      <div className="box full dfb justify-center">
         <div className="box full dfb wrap gap-10 mw-1000">
            {websites.map((website, index) => (
               <ClientWebsite key={index} website={website} />
            ))}
         </div>
      </div>
   </>)
}
