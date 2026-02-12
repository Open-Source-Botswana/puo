"use client";
import { motion } from "framer-motion";
import { Brain, Cpu, Database, FileText, Mic, Shield } from "lucide-react";

const features = [
	{
		icon: Mic,
		title: "ASR & Speech Processing",
		desc: "Transfer learning with Whisper + LoRA for local language speech recognition.",
	},
	{
		icon: Brain,
		title: "Culturally-Grounded NLP",
		desc: "Tokenization systems that preserve cultural and contextual meaning for Bantu and non-Bantu languages.",
	},
	{
		icon: Database,
		title: "Multimodal Data Pipeline",
		desc: "Automated pipelines processing oral recordings, texts, and visual materials at scale.",
	},
	{
		icon: FileText,
		title: "Open Metadata Schema",
		desc: "Aligned with Local Context Ontology (LCO) and African PID Alliance standards.",
	},
	{
		icon: Shield,
		title: "Ethical AI Framework",
		desc: "Community consent, benefit-sharing, and indigenous knowledge protocols built in.",
	},
	{
		icon: Cpu,
		title: "Community-Run Evals",
		desc: "Domain representatives create and run their own evaluation benchmarks.",
	},
];

const FeaturesSection = () => {
	return (
		<section id="features" className="py-24 bg-muted/50">
			<div className="container mx-auto px-4">
				<motion.div
					initial={{ opacity: 0, y: 20 }}
					whileInView={{ opacity: 1, y: 0 }}
					viewport={{ once: true }}
					className="text-center mb-16"
				>
					<h2 className="text-3xl md:text-5xl font-bold text-foreground mb-4">
						Platform Features
					</h2>
					<p className="text-muted-foreground text-lg max-w-2xl mx-auto">
						Tools designed and tested for local contexts with communities.
					</p>
				</motion.div>

				<div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
					{features.map((f, i) => (
						<motion.div
							key={f.title}
							initial={{ opacity: 0, y: 20 }}
							whileInView={{ opacity: 1, y: 0 }}
							viewport={{ once: true }}
							transition={{ delay: i * 0.08 }}
							className="bg-card rounded-xl p-6 border border-border hover:border-primary/30 transition-all"
						>
							<f.icon className="text-primary mb-4" size={28} />
							<h3 className="text-lg font-bold text-foreground mb-2">
								{f.title}
							</h3>
							<p className="text-muted-foreground text-sm leading-relaxed">
								{f.desc}
							</p>
						</motion.div>
					))}
				</div>
			</div>
		</section>
	);
};

export default FeaturesSection;
