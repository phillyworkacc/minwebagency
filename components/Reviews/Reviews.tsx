'use client'
import "./Reviews.css"
import { motion } from "framer-motion"
import Spacing from "../Spacing/Spacing"
import Review from "./Review"

export default function Reviews () {
	const reviews = [
		{
			author: 'Anouska Longely',
			authorImage: './rating/anouska.jpg',
			authorWebsite: 'https://www.anouskalongley.co.uk/',
			review: 'MinWeb was great, so quick, prompt and helpful. They got to work immediately, produced really high quality work, was great at communicating and really helped resolve my web issues. I would certainly endorse them to anyone need support with the website design and layout.'
		},
		{
			author: 'Asfand Khan',
			authorImage: 'https://minwebappcmgr.vercel.app/clientdefault.jpg',
			authorWebsite: '',
			review: "Really great working with him. Soo helpful and put soo much time and effort into my work. He's soo patient and spent his personal time to help me finish off the website and set it up for my drop next day. He's very professional and definitely worth his prices. I'm looking forward to working with him in future again for my 2 new businesses that I'm working on. Overall perfect guy who puts in the time and effort on the job."
		},{
			author: 'Glendean Rehvan',
			authorImage: 'https://minwebappcmgr.vercel.app/clientdefault.jpg',
			authorWebsite: 'https://theloupecollective.com',
			review: 'Philip has been amenable and exceptional from start to finish. His knowledge has been integral to me getting the best outcomes. A rising young star with amazing talent. Highly recommended. Thank you Philip for bringing my website and other tasks to life.'
		}
	]
   
	return (
      <div className="reviews">
			<div className="text-xl bold-700 full pd-2 text-center">What our customers say</div>
			<div className="text-xs grey-5 pd-1 full mb-1 text-center">
				See what real clients say about working with us and how our work helped their business grow.
			</div>
			<div className="reviews-list">
				{reviews.map((review, index) => (
					<motion.div
						key={index}
						className="box dfb"
						initial={{ opacity: 0, y: 20 }}
						animate={{ opacity: 1, y: 0 }}
						transition={{ delay: index * 0.2, duration: 0.5 }}
					>
						<Review review={review} />
					</motion.div>
				))}
			</div>
         <Spacing size={4} />
		</div>
   )
}
