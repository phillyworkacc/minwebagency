"use client"
import { Link2 } from 'lucide-react'
import Link from 'next/link'

type Review = {
   author: string;
   authorImage: string;
   authorWebsite: string;
   review: string;
}

export default function Review({ review }: { review: Review }) {
   return (
      <div className="review">
         <div className="review-text">
            "{review.review}"
         </div>
         <div className="reviewer">
            <div className="image">
               <img src={review.authorImage} alt="image" />
            </div>
            <div className="info">
               <div className="name">{review.author}</div>
               {(review.authorWebsite !== "") && (<div className="website">
                  <Link href={review.authorWebsite} target="_blank">
                     <Link2 size={18} /> Visit Website
                  </Link>
               </div>)}
            </div>
         </div>
      </div>
   )
}
