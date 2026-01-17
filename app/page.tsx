"use client"
import HeroSection from "@/components/HeroSection/HeroSection";
import Footer from "@/components/Footer/Footer";
import Header from "@/components/Header/Header";
import Reviews from "@/components/Reviews/Reviews";
import Services from "@/components/Services/Services";
import Spacing from "@/components/Spacing/Spacing";
import Analytics from "@/components/Analytics/Analytics";
import BuildingStyle from "@/components/BuildingStyle/BuildingStyle";
import Pricing from "@/components/Pricing/CustomWebsitePricing";

export default function Home() {
	return (<>
		<Header />
		<HeroSection />
		<Analytics />
		<Services />
		<BuildingStyle />	
		<Spacing size={3} />
		<Reviews />
		<Spacing size={6} />
		<Footer />
	</>);
}
