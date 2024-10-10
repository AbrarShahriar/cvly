import { clsx, type ClassValue } from "clsx";
import { twMerge } from "tailwind-merge";

export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs));
}

const months = [
  "January",
  "February",
  "March",
  "April",
  "May",
  "June",
  "July",
  "August",
  "September",
  "October",
  "November",
  "December",
];
export function parseDate(date: string) {
  if (date == "Present") return date;
  const dateObj = new Date(date);
  return `${months[dateObj.getMonth()]} ${dateObj.getFullYear()}`;
}
