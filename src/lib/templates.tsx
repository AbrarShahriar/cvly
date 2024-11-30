import { Budapest } from "@/templates/Budapest";
import { Chicago } from "@/templates/Chicago";
import { Salem } from "@/templates/Salem";
import { WhiteHouse } from "@/templates/WhiteHouse";

export type TemplateNames = "Chicago" | "White House" | "Budapest" | "Salem";

export const loadTemplate = (name: TemplateNames) => {
  const templates = {
    Chicago,
    "White House": WhiteHouse,
    Budapest,
    Salem,
  };
  return templates[name];
};
