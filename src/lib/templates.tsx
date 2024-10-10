import { Toronto } from "@/templates/Toronto";
import { PdfPayloadType } from "@/types";
import dynamic from "next/dynamic";

type TemplateNames = "Toronto";

export const loadTemplate = (name: TemplateNames) => {
  const templates = {
    Toronto,
  };
  return templates[name];
};
