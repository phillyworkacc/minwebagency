"use client"
import { Mail, Zap } from "lucide-react";
import { InterFont } from "./fonts";
import Link from "next/link";
import Review from "@/components/Reviews/Review";
import HeroSection from "@/components/HeroSection/HeroSection";
import Footer from "@/components/Footer/Footer";
import Header from "@/components/Header/Header";
import Reviews from "@/components/Reviews/Reviews";
import Services from "@/components/Services/Services";
import Mps from "@/components/MPS/Mps";
import Spacing from "@/components/Spacing/Spacing";
import Analytics from "@/components/Analytics/Analytics";
import BuildingStyle from "@/components/BuildingStyle/BuildingStyle";
import Pricing from "@/components/Pricing/Pricing";

export default function Home() {
	return (<>
		<Header />
		<HeroSection />
		<Analytics />
		<Services />
		<BuildingStyle />	
		<Spacing size={3} />
		<Reviews />
		<Spacing size={3} />
		<Pricing />
		<Spacing size={6} />
		<Footer />
	</>);
}
