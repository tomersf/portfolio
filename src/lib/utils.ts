import {type ClassValue, clsx} from "clsx";
import {twMerge} from "tailwind-merge";

export function cn(...inputs: ClassValue[]) {
    return twMerge(clsx(inputs));
}

export function getYearsSince(startingYear: string, endYear?: string) {
    const start = new Date(Number(startingYear), 0, 1); // Jan 1 start
    const end = endYear
        ? new Date(Number(endYear), 0, 1)  // Jan 1 of end year
        : new Date();

    const diffInMilliseconds = end.getTime() - start.getTime();
    const millisecondsInYear = 1000 * 60 * 60 * 24 * 365.25;

    let years = Math.round(diffInMilliseconds / millisecondsInYear);

    // If no endYear, use floor (current progress in year)
    if (!endYear) {
        years = Math.floor(diffInMilliseconds / millisecondsInYear);
    }

    return Math.max(1, years);
}
