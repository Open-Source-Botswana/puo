"use client";
import { motion } from "framer-motion";
import {
	BookOpen,
	Headphones,
	Languages,
	Leaf,
	Stethoscope,
} from "lucide-react";

const projects = [
	{
		icon: Languages,
		title: "PuoAI Translation",
		desc: "Multilingual text and speech translation across Setswana, Ikalanga, San/Nama, and English.",
		tags: ["ASR", "NLP", "Translation"],
		highlight: true,
		link: "http://98.92.253.52:3000/learn",
	},
	{
		icon: Leaf,
		title: "Agricultural Advisory",
		desc: "Crop advice prototypes for farmers in their native language using indigenous knowledge.",
		tags: ["Agriculture", "AI", "Community"],
		highlight: false,
		link: "http://98.92.253.52:3000/botanical",
	},
	{
		icon: Stethoscope,
		title: "Medical Plant Lookup",
		desc: "Traditional healer knowledge digitized for medical plant identification and usage.",
		tags: ["Health", "Indigenous Knowledge"],
		highlight: false,
		link: "http://98.92.253.52:3000/botanical",
	},
	{
		icon: BookOpen,
		title: "IKMS — Knowledge System",
		desc: "Phase 1 of Botswana's national Indigenous Knowledge Management System with 18 TK domains.",
		tags: ["Heritage", "Digitization"],
		highlight: false,
		link: "http://98.92.253.52:3000",
	},
	{
		icon: Headphones,
		title: "San Speech Dataset",
		desc: "First open San cluster image-speech-text dataset for language preservation.",
		tags: ["Dataset", "San", "Open Data"],
		highlight: false,
		link: "http://98.92.253.52:3000/learn",
	},
];

const ProjectsSection = () => {
	return (
		<section id="projects" className="py-24 bg-background">
			<div className="container mx-auto px-4">
				<motion.div
					initial={{ opacity: 0, y: 20 }}
					whileInView={{ opacity: 1, y: 0 }}
					viewport={{ once: true }}
					className="text-center mb-16"
				>
					<h2 className="text-3xl md:text-5xl font-bold text-foreground mb-4">
						Projects
					</h2>
					<p className="text-muted-foreground text-lg max-w-2xl mx-auto">
						Community-driven initiatives building Africa's linguistic future.
					</p>
				</motion.div>

				<div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
					{projects.map((p, i) => (
						<motion.div
							key={p.title}
							initial={{ opacity: 0, y: 20 }}
							whileInView={{ opacity: 1, y: 0 }}
							viewport={{ once: true }}
							transition={{ delay: i * 0.08 }}
							className={`rounded-xl p-6 border transition-all ${
								p.highlight
									? "bg-primary/5 border-primary/30 ring-1 ring-primary/20"
									: "bg-card border-border hover:border-primary/20"
							}`}
						>
							{p.highlight && (
								<span className="inline-block bg-primary text-primary-foreground text-xs font-semibold px-2 py-0.5 rounded mb-3">
									Featured
								</span>
							)}
							<p.icon className="text-primary mb-3" size={28} />
							<h3 className="text-lg font-bold text-foreground mb-2">
								{p.title}
							</h3>
							<p className="text-muted-foreground text-sm leading-relaxed mb-4">
								{p.desc}
							</p>
							<div className="flex flex-wrap gap-2">
								{p.tags.map((t) => (
									<span
										key={t}
										className="text-xs bg-muted text-muted-foreground px-2.5 py-1 rounded-full"
									>
										{t}
									</span>
								))}
							</div>
						</motion.div>
					))}
				</div>
			</div>
		</section>
	);
};

export default ProjectsSection;
