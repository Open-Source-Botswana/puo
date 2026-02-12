"use client";
import { motion } from "framer-motion";

const greetings = [
	{ text: "Dumela", lang: "Setswana", x: "8%", y: "18%" },
	{ text: "Dumilani", lang: "Ikalanga", x: "75%", y: "12%" },
	{ text: "!Gâi tsēs", lang: "Khoekhoegowab", x: "68%", y: "72%" },
	{ text: "Rumela", lang: "Sebirwa", x: "12%", y: "68%" },
	{ text: "Ke a leboga", lang: "Setswana", x: "82%", y: "42%" },
	{ text: "Mamuka tjini?", lang: "Ikalanga", x: "20%", y: "42%" },
];

const AnimatedDiv = motion.div;

export default function HeroSection() {
	return (
		<section className="relative min-h-screen flex items-center justify-center overflow-hidden pt-16">
			<div className="absolute inset-0">
				<img
					src="/assets/images/hero_wave.jpg"
					alt="Multilingual soundwaves"
					className="w-full h-full object-cover opacity-30"
				/>
				<div className="absolute inset-0 bg-gradient-to-b from-background/60 via-background/40 to-background" />
			</div>

			{/* Floating greetings */}
			{greetings.map((g, i) => (
				<motion.div
					key={g.text}
					className="absolute hidden md:block pointer-events-none select-none"
					style={{ left: g.x, top: g.y }}
					initial={{ opacity: 0, scale: 0.8 }}
					animate={{ opacity: 0.25, scale: 1, y: [0, -12, 0] }}
					transition={{
						delay: i * 0.3,
						duration: 4,
						repeat: Infinity,
						repeatType: "reverse",
					}}
				>
					<span className="text-xl lg:text-2xl font-bold text-primary/60">
						{g.text}
					</span>
					<span className="block text-[10px] text-muted-foreground">
						{g.lang}
					</span>
				</motion.div>
			))}

			<div className="container mx-auto px-4 relative z-10 text-center max-w-4xl">
				<AnimatedDiv
					initial={{ opacity: 0, y: 30 }}
					animate={{ opacity: 1, y: 0 }}
					transition={{ duration: 0.8 }}
				>
					<span className="inline-block bg-primary/10 text-primary px-4 py-1 rounded-full text-sm font-semibold mb-6">
						Preserving Botswana's Linguistic Heritage
					</span>

					<h1 className="text-4xl md:text-6xl lg:text-7xl font-bold text-foreground leading-tight mb-6 text-balance">
						Open Datasets for{" "}
						<span className="text-primary">Botswana's Languages</span>
					</h1>

					<p className="text-lg md:text-xl text-muted-foreground max-w-2xl mx-auto mb-10 text-balance">
						Building multilingual AI tools and open datasets for Botswana's
						indigenous languages — through community collaboration.
					</p>

					<div className="flex flex-col sm:flex-row gap-4 justify-center">
						<a
							href="#waitlist"
							className="bg-primary text-primary-foreground px-8 py-3.5 rounded-lg font-semibold text-lg hover:opacity-90 transition"
						>
							Join the Movement
						</a>
						<a
							href="#goals"
							className="border-2 border-foreground/20 text-foreground px-8 py-3.5 rounded-lg font-semibold text-lg hover:border-primary hover:text-primary transition"
						>
							Learn More
						</a>
					</div>
				</AnimatedDiv>

				<AnimatedDiv
					initial={{ opacity: 0 }}
					animate={{ opacity: 1 }}
					transition={{ delay: 1, duration: 1 }}
					className="mt-16 flex justify-center gap-8 md:gap-16 text-center"
				>
					{[
						{ value: "18", label: "TK Domains" },
						{ value: "50hrs", label: "Dataset Target" },
						{ value: "3+", label: "Languages" },
						{ value: "30+", label: "Youth Trained" },
					].map((stat) => (
						<div key={stat.label}>
							<div className="text-2xl md:text-3xl font-bold text-primary">
								{stat.value}
							</div>
							<div className="text-xs md:text-sm text-muted-foreground mt-1">
								{stat.label}
							</div>
						</div>
					))}
				</AnimatedDiv>
			</div>

			{/* Wave divider */}
			<div className="absolute bottom-0 left-0 right-0">
				{/** biome-ignore lint/a11y/noSvgWithoutTitle: <explanation> */}
				<svg
					viewBox="0 0 1440 60"
					preserveAspectRatio="none"
					className="w-full h-[60px]"
				>
					<path
						d="M0,30 C360,60 720,0 1080,30 C1260,45 1380,30 1440,30 L1440,60 L0,60 Z"
						fill="hsl(var(--background))"
					/>
				</svg>
			</div>
		</section>
	);
}
