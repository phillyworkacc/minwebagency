'use client'
import Footer from '@/components/Footer/Footer'
import Header from '@/components/Header/Header'

export default function BookCallPage () {
   return (<>
      <Header />
      <div className="box full dfb align-center justify-center pd-6">
         <div className="box full pdx-2 mw-1200">
            <div className="text-xxxl bold-800 text-center pd-1">Book A Call With Us</div>
            <div className="text-xs grey-4 text-center mt-1">Want to book a time to talk ?</div>
            <div className="box full dfb justify-center">
               <div 
                  className="calendly-inline-widget" 
                  data-url="https://calendly.com/minweb-agency/minweb-agency-web-design-and-marketing-calendar?hide_gdpr_banner=1&primary_color=1121ff" 
                  style={{
                     minWidth: "320px", height: "700px",
                     width: "100%"
                  }}
               />
            </div>
            <script type="text/javascript" src="https://assets.calendly.com/assets/external/widget.js" async></script>
         </div>
      </div>
      <Footer />
   </>)
}
