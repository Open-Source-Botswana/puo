"use client";

import { motion } from "framer-motion";
import { BookOpen, Code, Microscope, Users } from "lucide-react";

const roles = [
	{
		icon: Code,
		title: "Developers",
		desc: "Build NLP tools, ASR models, and data pipelines for Botswana's languages.",
	},
	{
		icon: Microscope,
		title: "Researchers & Linguists",
		desc: "Contribute linguistic expertise and validate culturally-grounded models.",
	},
	{
		icon: Users,
		title: "Community Partners",
		desc: "NGOs and civil society organizations translating AI frameworks for communities.",
	},
	{
		icon: BookOpen,
		title: "Investors & Funders",
		desc: "Support the first open multilingual benchmark for Southern African languages.",
	},
];

const GetInvolvedSection = () => {
	return (
		<section id="get-involved" className="py-24 bg-muted/50">
			<div className="container mx-auto px-4">
				<motion.div
					initial={{ opacity: 0, y: 20 }}
					whileInView={{ opacity: 1, y: 0 }}
					viewport={{ once: true }}
					className="text-center mb-16"
				>
					<h2 className="text-3xl md:text-5xl font-bold text-foreground mb-4">
						Get Involved
					</h2>
					<p className="text-muted-foreground text-lg max-w-2xl mx-auto">
						Join the community building equitable AI for Botswana's languages.
					</p>
				</motion.div>

				<div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
					{roles.map((r, i) => (
						<motion.div
							key={r.title}
							initial={{ opacity: 0, y: 20 }}
							whileInView={{ opacity: 1, y: 0 }}
							viewport={{ once: true }}
							transition={{ delay: i * 0.1 }}
							className="bg-card rounded-xl p-6 border border-border text-center hover:border-accent/50 transition-all"
						>
							<div className="w-14 h-14 bg-accent/10 rounded-full flex items-center justify-center mx-auto mb-4">
								<r.icon className="text-accent" size={24} />
							</div>
							<h3 className="text-lg font-bold text-foreground mb-2">
								{r.title}
							</h3>
							<p className="text-muted-foreground text-sm">{r.desc}</p>
						</motion.div>
					))}
				</div>
			</div>
		</section>
	);
};

export default GetInvolvedSection;
