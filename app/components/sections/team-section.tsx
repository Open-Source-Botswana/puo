"use client";

// biome-ignore assist/source/organizeImports: <explanation>
import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { ChevronLeft, ChevronRight } from "lucide-react";
import { Button } from "../ui/button";

const team = [
	{
		name: "Technical NLP Team",
		role: "Core Development",
		desc: "Software graduates with AI expertise developing tokenization systems for Setswana that preserve cultural essence and contextual meaning.",
	},
	{
		name: "Community Leadership",
		role: "Bukalanga Representative",
		desc: "Ensuring authentic community voices guide the Ikalanga language documentation process.",
	},
	{
		name: "Linguistic Experts",
		role: "Expert Collaborators",
		desc: "Leading experts in Setswana linguistics with decades of research on Botswana's unique linguistic landscape.",
	},
	{
		name: "San Research Centre",
		role: "Indigenous Knowledge Protocols",
		desc: "Ensuring culturally appropriate engagement with San communities and ethical approaches to documenting San/Nama languages.",
	},
	{
		name: "CIPA & National Archives",
		role: "Institutional Partners",
		desc: "Providing unique access to archival oral, visual, and textual data essential for building comprehensive language corpora.",
	},
];

const TeamSection = () => {
	const [current, setCurrent] = useState(0);

	const next = () => setCurrent((c) => (c + 1) % team.length);
	const prev = () => setCurrent((c) => (c - 1 + team.length) % team.length);

	return (
		<section id="team" className="py-24 bg-background">
			<div className="container mx-auto px-4">
				<motion.div
					initial={{ opacity: 0, y: 20 }}
					whileInView={{ opacity: 1, y: 0 }}
					viewport={{ once: true }}
					className="text-center mb-16"
				>
					<h2 className="text-3xl md:text-5xl font-bold text-foreground mb-4">
						Our Team
					</h2>
					<p className="text-muted-foreground text-lg max-w-2xl mx-auto">
						A diverse coalition of technologists, linguists, and community
						leaders.
					</p>
				</motion.div>

				<div className="max-w-3xl mx-auto">
					<div className="relative bg-card rounded-2xl border border-border overflow-hidden">
						<div className="md:flex">
							<div className="md:w-2/5">
								<img
									src="/assets/images/community.png"
									alt="PuoAi community"
									className="w-full h-full object-cover min-h-[200px]"
								/>
							</div>
							<div className="md:w-3/5 p-8 flex flex-col justify-center">
								<AnimatePresence mode="wait">
									<motion.div
										key={current}
										initial={{ opacity: 0, x: 20 }}
										animate={{ opacity: 1, x: 0 }}
										exit={{ opacity: 0, x: -20 }}
										transition={{ duration: 0.3 }}
									>
										<span className="text-xs font-semibold text-primary uppercase tracking-wider">
											{team[current].role}
										</span>
										<h3 className="text-2xl font-bold text-foreground mt-2 mb-3">
											{team[current].name}
										</h3>
										<p className="text-muted-foreground text-sm leading-relaxed">
											{team[current].desc}
										</p>
									</motion.div>
								</AnimatePresence>

								<div className="flex items-center gap-4 mt-6">
									<Button
										onClick={prev}
										className="w-10 h-10 rounded-full border border-border flex items-center justify-center hover:border-primary transition"
									>
										<ChevronLeft size={18} className="text-foreground" />
									</Button>
									<span className="text-sm text-muted-foreground">
										{current + 1} / {team.length}
									</span>
									<Button
										onClick={next}
										className="w-10 h-10 rounded-full border border-border flex items-center justify-center hover:border-primary transition"
									>
										<ChevronRight size={18} className="text-foreground" />
									</Button>
								</div>
							</div>
						</div>
					</div>
				</div>
			</div>
		</section>
	);
};

export default TeamSection;
