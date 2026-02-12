"use client";
import { motion } from "framer-motion";
import {
	ArrowLeftRight,
	Copy,
	ThumbsDown,
	ThumbsUp,
	Volume2,
} from "lucide-react";
import { useMemo, useState } from "react";
import { toast } from "@/app/hooks/use-toast";
import {
	ALL_LANGUAGES,
	translateFromEnglish,
	translateToEnglish,
} from "@/app/utils/data/phrases";
import { Button } from "../ui/button";

const TranslatorSection = () => {
	const [sourceLang, setSourceLang] = useState("english");
	const [targetLang, setTargetLang] = useState("setswana");
	const [inputText, setInputText] = useState("");
	const languageOptions = [
		{ id: "english", name: "English" },
		...ALL_LANGUAGES.map((l) => ({ id: l.id, name: l.name })),
	];
	const result = useMemo(() => {
		if (!inputText.trim()) return "";
		if (sourceLang === "english") {
			return (
				translateFromEnglish(inputText.trim(), targetLang) ??
				"Translation not found in phrase bank."
			);
		}
		if (targetLang === "english") {
			return (
				translateToEnglish(inputText.trim(), sourceLang) ??
				"Translation not found in phrase bank."
			);
		}
		// Cross-language: source → english → target
		const eng = translateToEnglish(inputText.trim(), sourceLang);
		if (!eng) return "Translation not found in phrase bank.";
		return (
			translateFromEnglish(eng, targetLang) ??
			"Translation not found in phrase bank."
		);
	}, [inputText, sourceLang, targetLang]);
	const swapLanguages = () => {
		setSourceLang(targetLang);
		setTargetLang(sourceLang);
		setInputText(
			result && result !== "Translation not found in phrase bank."
				? result
				: "",
		);
	};
	const speakText = (text: string) => {
		if ("speechSynthesis" in window) {
			const utterance = new SpeechSynthesisUtterance(text);
			window.speechSynthesis.speak(utterance);
		} else {
			toast({
				title: "Audio coming soon",
				description: "Speech synthesis not supported in this browser.",
			});
		}
	};
	const copyResult = () => {
		if (result) {
			navigator.clipboard.writeText(result);
			toast({
				title: "Copied!",
				description: "Translation copied to clipboard.",
			});
		}
	};

	const availablePhrases = useMemo(() => {
		if (sourceLang === "english") {
			const target = ALL_LANGUAGES.find((l) => l.id === targetLang);
			return target?.phrases.map((p) => p.english) ?? [];
		}
		const src = ALL_LANGUAGES.find((l) => l.id === sourceLang);
		return src?.phrases.map((p) => p.word) ?? [];
	}, [sourceLang, targetLang]);
	return (
		<section id="translator" className="py-24 bg-muted/50">
			<div className="container mx-auto px-4 max-w-4xl">
				<motion.div
					initial={{ opacity: 0, y: 20 }}
					whileInView={{ opacity: 1, y: 0 }}
					viewport={{ once: true }}
					className="text-center mb-12"
				>
					<h2 className="text-3xl md:text-5xl font-bold text-foreground mb-4">
						Translate Botswana's Languages
					</h2>
					<p className="text-muted-foreground text-lg max-w-2xl mx-auto">
						Explore phrases in Setswana, Ikalanga, and Khoekhoegowab — powered
						by community-verified phrase banks.
					</p>
				</motion.div>
				<motion.div
					initial={{ opacity: 0, y: 20 }}
					whileInView={{ opacity: 1, y: 0 }}
					viewport={{ once: true }}
					className="bg-card rounded-2xl border border-border shadow-lg p-6 md:p-8"
				>

					<div className="flex items-center justify-between gap-4 mb-6">
						<select
							value={sourceLang}
							onChange={(e) => setSourceLang(e.target.value)}
							className="flex-1 bg-muted border border-border rounded-lg px-4 py-2.5 text-foreground font-medium focus:outline-none focus:ring-2 focus:ring-primary"
						>
							{languageOptions.map((l) => (
								<option key={l.id} value={l.id}>
									{l.name}
								</option>
							))}
						</select>
						<Button
							onClick={swapLanguages}
							className="p-2 rounded-full bg-muted transition"
							aria-label="Swap languages"
						>
							<ArrowLeftRight size={20} className="text-muted-foreground" />
						</Button>
						<select
							value={targetLang}
							onChange={(e) => setTargetLang(e.target.value)}
							className="flex-1 bg-muted border border-border rounded-lg px-4 py-2.5 text-foreground font-medium focus:outline-none focus:ring-2 focus:ring-primary"
						>
							{languageOptions.map((l) => (
								<option key={l.id} value={l.id}>
									{l.name}
								</option>
							))}
						</select>
					</div>

					<div className="grid md:grid-cols-2 gap-4 mb-4">
						<div className="relative">
							<textarea
								value={inputText}
								onChange={(e) => setInputText(e.target.value)}
								placeholder="Enter your text to translate."
								className="w-full h-32 bg-muted/50 border border-border rounded-xl px-4 py-3 text-foreground placeholder:text-muted-foreground resize-none focus:outline-none focus:ring-2 focus:ring-primary"
								maxLength={200}
							/>
							<div className="absolute bottom-2 right-3 text-xs text-muted-foreground">
								{inputText.split(/\s+/).filter(Boolean).length}/50 words
							</div>
						</div>
						<div className="relative bg-muted/30 border border-border rounded-xl px-4 py-3 min-h-[128px]">
							<p className="text-xs text-muted-foreground mb-1">Result:</p>
							<p className="text-foreground font-medium">{result}</p>
						</div>
					</div>

					<div className="flex items-center justify-between">
						<Button
							onClick={() => {
								if (
									result &&
									result !== "Translation not found in phrase bank."
								) {
									speakText(result);
								}
							}}
							className="bg-foreground text-background px-6 py-2.5 rounded-lg font-semibold hover:opacity-90 transition text-sm"
						>
							Translate
						</Button>
						<div className="flex items-center gap-2">
							<Button
								onClick={() => speakText(result)}
								className="p-2 bg-muted rounded-lg transition"
								aria-label="Play audio"
							>
								<Volume2 size={18} className="text-muted-foreground" />
							</Button>
							<Button
								className="p-2 bg-muted rounded-lg transition"
								aria-label="Good translation"
							>
								<ThumbsUp size={18} className="text-muted-foreground" />
							</Button>
							<Button
								className="p-2 bg-muted rounded-lg transition"
								aria-label="Bad translation"
							>
								<ThumbsDown size={18} className="text-muted-foreground" />
							</Button>
							<Button
								onClick={copyResult}
								className="p-2 bg-muted rounded-lg transition"
								aria-label="Copy"
							>
								<Copy size={18} className="text-muted-foreground" />
							</Button>
						</div>
					</div>

					{availablePhrases.length > 0 && (
						<div className="mt-6 pt-4 border-t border-border">
							<p className="text-xs text-muted-foreground mb-2">
								Try a phrase:
							</p>
							<div className="flex flex-wrap gap-2">
								{availablePhrases.slice(0, 6).map((p) => (
									<Button
										key={p}
										onClick={() => setInputText(p)}
										className="text-xs bg-primary/10 text-primary px-3 py-1.5 rounded-full hover:bg-primary/20 transition font-medium"
									>
										{p}
									</Button>
								))}
							</div>
						</div>
					)}
				</motion.div>
			</div>
		</section>
	);
};
export default TranslatorSection;
