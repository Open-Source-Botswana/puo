"use client";

import { motion } from "framer-motion";
import { ChevronDown } from "lucide-react";
import { useState } from "react";
import { Button } from "../ui/button";

const faqs = [
	{
		q: "What is PuoAi?",
		a: "PuoAi is a platform for building multilingual datasets and AI tools for African languages, starting with Botswana's Setswana, Ikalanga, and San/Nama languages.",
	},
	{
		q: "How can I contribute?",
		a: "Join our waitlist to get started. We welcome developers, linguists, researchers, community partners, and funders to collaborate on building equitable AI.",
	},
	{
		q: "Is the data open source?",
		a: "Yes — all datasets, models, and tools are released as Digital Public Goods to enable future research and development.",
	},
	{
		q: "What languages are supported?",
		a: "We're starting with Setswana, Ikalanga, and San/Nama languages, with infrastructure designed to expand to other Southern African and Bantu languages.",
	},
	{
		q: "How is community consent handled?",
		a: "We follow indigenous knowledge protocols with community consent and benefit-sharing frameworks, in partnership with the San Research Centre and CIPA.",
	},
];

const FAQSection = () => {
	const [open, setOpen] = useState<number | null>(null);

	return (
		<section id="faq" className="py-24 bg-muted/50">
			<div className="container mx-auto px-4 max-w-3xl">
				<motion.div
					initial={{ opacity: 0, y: 20 }}
					whileInView={{ opacity: 1, y: 0 }}
					viewport={{ once: true }}
					className="text-center mb-16"
				>
					<h2 className="text-3xl md:text-5xl font-bold text-foreground mb-4">
						FAQ
					</h2>
				</motion.div>

				<div className="space-y-3">
					{faqs.map((faq, i) => (
						<motion.div
							// biome-ignore lint/suspicious/noArrayIndexKey: <explanation>
							key={i}
							initial={{ opacity: 0, y: 10 }}
							whileInView={{ opacity: 1, y: 0 }}
							viewport={{ once: true }}
							transition={{ delay: i * 0.05 }}
							className=" rounded-xl border border-border overflow-hidden bg-muted"
						>
							<Button
								onClick={() => setOpen(open === i ? null : i)}
								className="w-full flex items-center justify-between p-8 text-left  bg-muted"
							>
								<span className="font-semibold text-foreground">{faq.q}</span>
								<ChevronDown
									size={18}
									className={`text-foreground transition-transform ${open === i ? "rotate-180" : ""}`}
								/>
							</Button>
							{open === i && (
								<div className="px-5 pb-5 text-muted-foreground text-sm leading-relaxed">
									{faq.a}
								</div>
							)}
						</motion.div>
					))}
				</div>
			</div>
		</section>
	);
};

export default FAQSection;
