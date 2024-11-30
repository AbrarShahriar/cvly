import { clsx, type ClassValue } from "clsx";
import { twMerge } from "tailwind-merge";
import type { renderToStaticMarkup as _renderToStaticMarkup } from "react-dom/server";

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

export function removePfromLi(html: string) {
  return html.replaceAll(
    /<li><p>(.*?)<\/p><(\/?)(ol|li|ul)>/gi,
    "<li>$1<$2$3>"
  );
}

export let renderToStaticMarkup: typeof _renderToStaticMarkup;
import("react-dom/server").then((module) => {
  renderToStaticMarkup = module.renderToStaticMarkup;
});
