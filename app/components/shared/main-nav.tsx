"use client";
import { motion } from "framer-motion";
import { Menu, X } from "lucide-react";
import Link from "next/link";
import { useState } from "react";
import { Button } from "../ui/button";

const navLinks = [
	{ label: "Goals", href: "#goals" },
	{ label: "Features", href: "#features" },
	{ label: "Projects", href: "#projects" },
	{ label: "Team", href: "#team" },
	{ label: "FAQ", href: "#faq" },
];

const Navbar = () => {
	const [open, setOpen] = useState(false);

	return (
		<nav className="fixed top-0 left-0 right-0 z-50 bg-background/80 backdrop-blur-md border-b border-border">
			<div className="container mx-auto flex items-center justify-between h-16 px-4">
				<a
					href="/"
					className="text-2xl font-bold text-foreground tracking-tight"
				>
					Puo<span className="text-primary">Ai</span>
				</a>

				<div className="hidden md:flex items-center gap-8">
					{navLinks.map((link) => (
						<a
							key={link.href}
							href={link.href}
							className="text-sm font-semibold text-muted-foreground hover:text-primary transition-colors"
						>
							{link.label}
						</a>
					))}
					<a
						href="#waitlist"
						className="bg-primary text-primary-foreground px-5 py-2 rounded-lg text-sm font-semibold hover:opacity-90 transition"
					>
						Join Waitlist
					</a>
				</div>

				<Button
					className="md:hidden text-foreground"
					onClick={() => setOpen(!open)}
				>
					{open ? <X size={24} /> : <Menu size={24} />}
				</Button>
			</div>

			{open && (
				<motion.div
					initial={{ opacity: 0, y: -10 }}
					animate={{ opacity: 1, y: 0 }}
					className="md:hidden bg-background border-b border-border px-4 pb-4"
				>
					{navLinks.map((link) => (
						<Link
							key={link.href}
							href={link.href}
							onClick={() => setOpen(false)}
							className="block py-2 text-sm font-semibold text-muted-foreground hover:text-primary"
						>
							{link.label}
						</Link>
					))}
					<Link
						href="#waitlist"
						onClick={() => setOpen(false)}
						className="block mt-2 bg-primary text-primary-foreground px-5 py-2 rounded-lg text-sm font-semibold text-center"
					>
						Join Waitlist
					</Link>
				</motion.div>
			)}
		</nav>
	);
};

export default Navbar;
