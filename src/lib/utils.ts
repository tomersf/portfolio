import { type ClassValue, clsx } from "clsx"
import { twMerge } from "tailwind-merge"

export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs))
}


export function getYearsSince2022() {
  const currentDate = new Date();
  const january2022 = new Date("January 1, 2022");

  const diffInMilliseconds = currentDate.getTime() - january2022.getTime();
  const millisecondsInYear = 1000 * 60 * 60 * 24 * 365.25; // Average milliseconds in a year

  const years = Math.floor(diffInMilliseconds / millisecondsInYear);

  return years;
}

