export interface Phrase {
	word: string;
	english: string;
	language: string;
	audioUrl?: string;
}
export interface LanguageData {
	id: string;
	name: string;
	family: string;
	phrases: Phrase[];
}
export const SETSWANA_PHRASES: Phrase[] = [
	{ word: "Dumela", english: "Hello", language: "Setswana" },
	{ word: "O tsogile jang?", english: "How are you?", language: "Setswana" },
	{ word: "Ke tsogile sentle", english: "I am fine", language: "Setswana" },
	{
		word: "Leina la gago ke mang?",
		english: "What is your name?",
		language: "Setswana",
	},
	{ word: "Leina la me ke...", english: "My name is...", language: "Setswana" },
	{ word: "Ke a leboga", english: "Thank you", language: "Setswana" },
	{
		word: "Tsamaya sentle",
		english: "Go well (goodbye)",
		language: "Setswana",
	},
	{ word: "Sala sentle", english: "Stay well (goodbye)", language: "Setswana" },
	{ word: "Ee", english: "Yes", language: "Setswana" },
	{ word: "Nnyaa", english: "No", language: "Setswana" },
];
export const KALANGA_PHRASES: Phrase[] = [
	{ word: "Dumilani", english: "Good day", language: "Ikalanga" },
	{ word: "Mamuka tjini?", english: "How are you?", language: "Ikalanga" },
	{
		word: "Zina lilo ndiyani?",
		english: "What's your name?",
		language: "Ikalanga",
	},
	{
		word: "Zina langu ndi Tumani.",
		english: "My name is Tumani",
		language: "Ikalanga",
	},
	{
		word: "Ndamuka, to ti ingwi bo?",
		english: "I am good, and you?",
		language: "Ikalanga",
	},
];
export const KHOEKHOEGOWAB_PHRASES: Phrase[] = [
	{ word: "!Gâi tsēs", english: "Good day", language: "Khoekhoegowab" },
	{ word: "Mi re?", english: "How are you?", language: "Khoekhoegowab" },
	{
		word: "Matits |on hâ",
		english: "What's your name?",
		language: "Khoekhoegowab",
	},
];
export const ALL_LANGUAGES: LanguageData[] = [
	{
		id: "setswana",
		name: "Setswana",
		family: "Bantu",
		phrases: SETSWANA_PHRASES,
	},
	{
		id: "ikalanga",
		name: "Ikalanga",
		family: "Bantu",
		phrases: KALANGA_PHRASES,
	},
	{
		id: "khoekhoegowab",
		name: "Khoekhoegowab",
		family: "Khoe-San",
		phrases: KHOEKHOEGOWAB_PHRASES,
	},
];

export function translateFromEnglish(
	english: string,
	languageId: string,
): string | null {
	const lang = ALL_LANGUAGES.find((l) => l.id === languageId);
	if (!lang) return null;
	const phrase = lang.phrases.find(
		(p) => p.english.toLowerCase() === english.toLowerCase(),
	);
	return phrase?.word ?? null;
}

export function translateToEnglish(
	word: string,
	languageId: string,
): string | null {
	const lang = ALL_LANGUAGES.find((l) => l.id === languageId);
	if (!lang) return null;
	const phrase = lang.phrases.find(
		(p) => p.word.toLowerCase() === word.toLowerCase(),
	);
	return phrase?.english ?? null;
}
