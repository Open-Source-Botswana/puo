import HeroSection from "@/app/components/sections/hero-section";
import Navbar from "@/app/components/shared/main-nav";
import FAQSection from "./components/sections/faq-section";
import FeaturesSection from "./components/sections/features-section";
import Footer from "./components/sections/footer-section";
import GetInvolvedSection from "./components/sections/getinvolved-section";
import GoalsSection from "./components/sections/goals-section";
import MilestonesSection from "./components/sections/milestones-section";
import ProjectsSection from "./components/sections/projects-section";
import TeamSection from "./components/sections/team-section";
import TranslatorSection from "./components/sections/translator-section";
import WaitlistSection from "./components/sections/waiting-list-section";

export default async function Home() {
	return (
		<div className="min-h-screen bg-background">
			<main className="flex-grow">
				<Navbar />
				<HeroSection />
				<GoalsSection />
				<FeaturesSection />
				<ProjectsSection />
				<TranslatorSection />
				<MilestonesSection />
				<GetInvolvedSection />
				<TeamSection />
				<FAQSection />
				<WaitlistSection />
				<Footer />
			</main>
		</div>
	);
}
