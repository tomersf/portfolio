import { Noto_Serif, Merriweather_Sans, Lustria } from "next/font/google";

export const notoSerif = Noto_Serif({
    subsets: ["latin"],
    variable: "--font-noto",
});
export const merriweatherSans = Merriweather_Sans({
    subsets: ["latin"],
    variable: "--font-merriweather",
});
export const lustria = Lustria({
    subsets: ["latin"],
    weight: "400",
    variable: "--font-lustria",
});