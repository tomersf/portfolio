import { Noto_Serif, Merriweather_Sans, Lustria } from "next/font/google";

const notoSerif = Noto_Serif({
    subsets: ["latin"],
    variable: "--font-noto",
});
const merriweatherSans = Merriweather_Sans({
    subsets: ["latin"],
    variable: "--font-merriweather",
})
const lustria = Lustria({
    subsets: ["latin"],
    weight: "400",
    variable: "--font-lustria",
});

export const fontNotoSerif = notoSerif.className
export const fontMerriweatherSans = merriweatherSans.className
export const fontLustria = lustria.className
