"use client";

// biome-ignore assist/source/organizeImports: <explanation>
import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Target, ChevronDown } from "lucide-react";
import { Button } from "../ui/button";
interface Milestone {
	step: number;
	title: string;
	description: string;
	status: "Completed" | "In Progress" | "Pending";
	details?: string;
}
const milestones: Milestone[] = [
	{
		step: 1,
		title: "Text-To-Text",
		description:
			"Community-verified phrase banks for Setswana, Ikalanga, and Khoekhoegowab with direct translation lookup across 18 TK domains.",
		status: "Completed",
		details:
			"Built open phrase datasets with community annotators covering greetings, health, and agriculture. All data reviewed by native speakers.",
	},
	{
		step: 2,
		title: "Text-To-Speech",
		description:
			"Bringing sentences to life in audio, creating natural-sounding speech from text so anyone can hear the language spoken by AI.",
		status: "In Progress",
		details:
			"Developing ASR models using Whisper + LoRA transfer learning with native-speaker training data. Targeting 50 hrs of annotated audio.",
	},
	{
		step: 3,
		title: "Speech-To-Speech",
		description:
			"Real-time voice translation so two people can speak and understand each other instantly, even without a common language.",
		status: "Pending",
		details:
			"Planned architecture: streaming ASR → NMT → TTS pipeline optimised for low-resource Bantu and Khoe-San language pairs.",
	},
	{
		step: 4,
		title: "Culturally-Grounded NLP Tools",
		description:
			"Tokenizers and language models that preserve cultural context and meaning unique to Botswana's linguistic landscape.",
		status: "Pending",
		details:
			"Building on preliminary tokenization work to develop systems that understand culturally-specific terminology in agriculture, health, and traditional knowledge.",
	},
];
const statusColors: Record<string, string> = {
	Completed: "bg-secondary text-secondary-foreground",
	"In Progress": "bg-primary text-primary-foreground",
	Pending: "bg-yellow-500 text-muted-foreground",
};
const MilestonesSection = () => {
	const [expanded, setExpanded] = useState<number | null>(null);
	return (
		<section
			id="milestones"
			className="py-24 bg-gradient-to-br from-primary via-primary/90 to-primary/70 text-primary-foreground relative overflow-hidden"
		>
			<div className="absolute inset-0 opacity-10">
				{Array.from({ length: 6 }).map((_, i) => (
					<div
						// biome-ignore lint/suspicious/noArrayIndexKey: <explanation>
						key={i}
						className="absolute rounded-full border border-primary-foreground/30"
						style={{
							width: `${120 + i * 80}px`,
							height: `${120 + i * 80}px`,
							top: `${10 + i * 12}%`,
							right: `${-5 + i * 3}%`,
						}}
					/>
				))}
			</div>
			<div className="container mx-auto px-4 relative z-10">
				<motion.div
					initial={{ opacity: 0, y: 20 }}
					whileInView={{ opacity: 1, y: 0 }}
					viewport={{ once: true }}
					className="mb-16"
				>
					<h2 className="text-3xl md:text-5xl font-bold flex items-center gap-3">
						Milestone <Target size={40} />
					</h2>
				</motion.div>
				<div className="space-y-6 max-w-3xl">
					{milestones.map((m, i) => (
						<motion.div
							key={m.step}
							initial={{ opacity: 0, x: -30 }}
							whileInView={{ opacity: 1, x: 0 }}
							viewport={{ once: true }}
							transition={{ delay: i * 0.1 }}
							className="flex gap-5"
						>
							{/* Step circle */}
							<div className="flex flex-col items-center">
								<div className="w-12 h-12 rounded-full border-2 border-primary-foreground/40 flex items-center justify-center text-lg font-bold shrink-0">
									{m.step}
								</div>
								{i < milestones.length - 1 && (
									<div className="w-px flex-1 bg-primary-foreground/20 mt-2" />
								)}
							</div>
							{/* Content */}
							<div className="flex-1 pb-6">
								<div className="flex items-start justify-between gap-3 mb-2">
									<h3 className="text-xl md:text-2xl font-bold">{m.title}</h3>
									<span
										className={`text-xs px-3 py-1 rounded-full font-semibold shrink-0 ${statusColors[m.status]}`}
									>
										{m.status}
									</span>
								</div>
								<p className="text-primary-foreground/80 text-sm leading-relaxed mb-2">
									{m.description}
								</p>
								{m.details && (
									<>
										<Button
											onClick={() =>
												setExpanded(expanded === m.step ? null : m.step)
											}
											className="text-xs flex items-center gap-1 text-primary-foreground/60 hover:text-primary-foreground transition"
										>
											{expanded === m.step ? "Hide details" : "Show details"}
											<ChevronDown
												size={14}
												className={`transition-transform ${expanded === m.step ? "rotate-180" : ""}`}
											/>
										</Button>
										<AnimatePresence>
											{expanded === m.step && (
												<motion.div
													initial={{ height: 0, opacity: 0 }}
													animate={{ height: "auto", opacity: 1 }}
													exit={{ height: 0, opacity: 0 }}
													className="overflow-hidden"
												>
													<p className="mt-2 text-sm text-primary-foreground/70 bg-primary-foreground/10 rounded-lg p-3">
														{m.details}
													</p>
												</motion.div>
											)}
										</AnimatePresence>
									</>
								)}
							</div>
						</motion.div>
					))}
				</div>
			</div>
		</section>
	);
};
export default MilestonesSection;
