import { Chicago } from "@/templates/Chicago";
import { WhiteHouse } from "@/templates/WhiteHouse";

export type TemplateNames = "Chicago" | "White House";

export const loadTemplate = (name: TemplateNames) => {
  const templates = {
    Chicago,
    "White House": WhiteHouse,
  };
  return templates[name];
};
