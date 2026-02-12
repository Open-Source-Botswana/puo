"use client";

// biome-ignore assist/source/organizeImports: <explanation>
import { useState } from "react";
import { motion } from "framer-motion";

const WaitlistSection = () => {
	const [form, setForm] = useState({
		name: "",
		email: "",
		role: "",
		specialization: "",
		contribution: "",
	});
	const [submitted, setSubmitted] = useState(false);

	const handleSubmit = (e: React.FormEvent) => {
		e.preventDefault();
		setSubmitted(true);
	};

	if (submitted) {
		return (
			<section id="waitlist" className="py-24 bg-background">
				<div className="container mx-auto px-4 max-w-xl text-center">
					<motion.div
						initial={{ opacity: 0, scale: 0.95 }}
						animate={{ opacity: 1, scale: 1 }}
					>
						<div className="text-5xl mb-4">🎉</div>
						<h2 className="text-3xl font-bold text-foreground mb-3">
							You're on the list!
						</h2>
						<p className="text-muted-foreground">
							We'll be in touch soon. Dumela!
						</p>
					</motion.div>
				</div>
			</section>
		);
	}

	return (
		<section id="waitlist" className="py-24 bg-background">
			<div className="container mx-auto px-4 max-w-xl">
				<motion.div
					initial={{ opacity: 0, y: 20 }}
					whileInView={{ opacity: 1, y: 0 }}
					viewport={{ once: true }}
					className="text-center mb-10"
				>
					<h2 className="text-3xl md:text-5xl font-bold text-foreground mb-4">
						Join the Waitlist
					</h2>
					<p className="text-muted-foreground">
						Be among the first to contribute to Africa's linguistic AI future.
					</p>
				</motion.div>

				<form onSubmit={handleSubmit} className="space-y-4">
					<div className="grid sm:grid-cols-2 gap-4">
						<input
							required
							type="text"
							placeholder="Full Name"
							value={form.name}
							onChange={(e) => setForm({ ...form, name: e.target.value })}
							className="w-full px-4 py-3 rounded-lg bg-muted border border-border text-foreground placeholder:text-muted-foreground focus:outline-none focus:ring-2 focus:ring-primary/50"
						/>
						<input
							required
							type="email"
							placeholder="Email Address"
							value={form.email}
							onChange={(e) => setForm({ ...form, email: e.target.value })}
							className="w-full px-4 py-3 rounded-lg bg-muted border border-border text-foreground placeholder:text-muted-foreground focus:outline-none focus:ring-2 focus:ring-primary/50"
						/>
					</div>

					<select
						required
						value={form.role}
						onChange={(e) => setForm({ ...form, role: e.target.value })}
						className="w-full px-4 py-3 rounded-lg bg-muted border border-border text-foreground focus:outline-none focus:ring-2 focus:ring-primary/50"
					>
						<option value="">Select your role</option>
						<option value="developer">Developer</option>
						<option value="researcher">Researcher</option>
						<option value="linguist">Linguist</option>
						<option value="community">Community Partner</option>
						<option value="investor">Investor / Funder</option>
						<option value="other">Other</option>
					</select>

					<input
						type="text"
						placeholder="Specialization (optional)"
						value={form.specialization}
						onChange={(e) =>
							setForm({ ...form, specialization: e.target.value })
						}
						className="w-full px-4 py-3 rounded-lg bg-muted border border-border text-foreground placeholder:text-muted-foreground focus:outline-none focus:ring-2 focus:ring-primary/50"
					/>

					<textarea
						placeholder="What would you like to contribute?"
						value={form.contribution}
						onChange={(e) => setForm({ ...form, contribution: e.target.value })}
						rows={3}
						className="w-full px-4 py-3 rounded-lg bg-muted border border-border text-foreground placeholder:text-muted-foreground focus:outline-none focus:ring-2 focus:ring-primary/50 resize-none"
					/>

					<p className="text-xs text-muted-foreground">
						By signing up, you agree to our data protection policy aligned with
						Botswana's Data Protection Act. Your information will only be used
						for PuoAi communications.
					</p>

					<button
						type="submit"
						className="w-full bg-primary text-primary-foreground py-3.5 rounded-lg font-semibold text-lg hover:opacity-90 transition"
					>
						Join Waitlist
					</button>
				</form>
			</div>
		</section>
	);
};

export default WaitlistSection;
