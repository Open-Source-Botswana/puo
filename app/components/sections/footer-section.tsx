const Footer = () => {
	return (
		<footer className="relative bg-foreground text-background pt-16 pb-8 overflow-hidden">
			{/* Soundwave decoration */}
			<div className="absolute top-0 left-0 right-0 flex items-end justify-center gap-1 h-12 opacity-20">
				{Array.from({ length: 40 }).map((_, i) => (
					<div
						// biome-ignore lint/suspicious/noArrayIndexKey: <explanation>
						key={i}
						className="soundwave-bar w-1 bg-primary rounded-full"
						style={{
							animationDelay: `${i * 0.08}s`,
							height: `${8 + Math.random() * 24}px`,
						}}
					/>
				))}
			</div>

			<div className="container mx-auto px-4">
				<div className="grid md:grid-cols-3 gap-8 mb-12">
					<div>
						<h3 className="text-2xl font-bold mb-3">
							Open<span className="text-primary">Lang</span>
						</h3>
						<p className="text-background/60 text-sm leading-relaxed">
							Building open datasets and AI tools for Botswana's indigenous
							languages through community collaboration.
						</p>
					</div>

					<div>
						<h4 className="font-semibold mb-3">Quick Links</h4>
						<div className="space-y-2 text-sm text-background/60">
							<a href="#goals" className="block hover:text-primary transition">
								Goals
							</a>
							<a
								href="#features"
								className="block hover:text-primary transition"
							>
								Features
							</a>
							<a
								href="#projects"
								className="block hover:text-primary transition"
							>
								Projects
							</a>
							<a href="#team" className="block hover:text-primary transition">
								Team
							</a>
						</div>
					</div>

					<div>
						<h4 className="font-semibold mb-3">Connect</h4>
						<div className="space-y-2 text-sm text-background/60">
							<a
								href="#waitlist"
								className="block hover:text-primary transition"
							>
								Join Waitlist
							</a>
							<p>IKMS Botswana</p>
						</div>
					</div>
				</div>

				<div className="border-t border-background/10 pt-6 text-center text-xs text-background/40">
					© {new Date().getFullYear()} OpenSourceBotswana — Preserving
					Botswana's Linguistic Heritage. All rights reserved.
				</div>
			</div>
		</footer>
	);
};

export default Footer;
