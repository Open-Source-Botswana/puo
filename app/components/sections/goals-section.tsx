"use client";
import { motion } from "framer-motion";
import { BarChart3, Globe, Target, Users } from "lucide-react";

const goals = [
	{
		icon: Globe,
		title: "Open Multilingual Datasets",
		description:
			"Create 50+ hours of context-aware datasets from audio, text, and video across Botswana's indigenous languages.",
	},
	{
		icon: Users,
		title: "Community-Driven AI",
		description:
			"Empower communities to control their digital narrative through co-designed tools and community-run evaluations.",
	},
	{
		icon: BarChart3,
		title: "Real-Time Benchmarking",
		description:
			"Provide the first computational linguistic benchmark in the country with live validation and evaluation metrics.",
	},
	{
		icon: Target,
		title: "AI for Social Good",
		description:
			"Address access to healthcare, education, and agriculture with culturally intelligent AI solutions.",
	},
];

const GoalsSection = () => {
	return (
		<section id="goals" className="py-24 bg-background">
			<div className="container mx-auto px-4">
				<motion.div
					initial={{ opacity: 0, y: 20 }}
					whileInView={{ opacity: 1, y: 0 }}
					viewport={{ once: true }}
					className="text-center mb-16"
				>
					<h2 className="text-3xl md:text-5xl font-bold text-foreground mb-4">
						Our Mission
					</h2>
					<p className="text-muted-foreground text-lg max-w-2xl mx-auto">
						Closing the AI evaluation gap for the majority of the world's
						languages.
					</p>
				</motion.div>

				<div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
					{goals.map((goal, i) => (
						<motion.div
							key={goal.title}
							initial={{ opacity: 0, y: 20 }}
							whileInView={{ opacity: 1, y: 0 }}
							viewport={{ once: true }}
							transition={{ delay: i * 0.1 }}
							className="bg-card rounded-xl p-6 border border-border hover:border-primary/30 hover:shadow-lg transition-all group"
						>
							<div className="w-12 h-12 bg-primary/10 rounded-lg flex items-center justify-center mb-4 group-hover:bg-primary/20 transition">
								<goal.icon className="text-primary" size={24} />
							</div>
							<h3 className="text-lg font-bold text-foreground mb-2">
								{goal.title}
							</h3>
							<p className="text-muted-foreground text-sm leading-relaxed">
								{goal.description}
							</p>
						</motion.div>
					))}
				</div>
			</div>
		</section>
	);
};

export default GoalsSection;
