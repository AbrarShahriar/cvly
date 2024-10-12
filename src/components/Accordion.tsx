import {
  AccordionItem,
  AccordionTrigger,
  AccordionContent,
} from "@radix-ui/react-accordion";
import { ShadcnAccordion } from "./ui/accordion";

interface AccordionProps {
  title: string;
  description: string;
}

export default function Accordion({ description, title }: AccordionProps) {
  return (
    <ShadcnAccordion
      type="single"
      collapsible
      className="border-b border-solid border-blue-900 w-[100%] pb-4"
    >
      <AccordionItem value="item-1">
        <AccordionTrigger className="text-lg font-semibold text-left">
          {title}
        </AccordionTrigger>
        <AccordionContent className="pt-4 text-left">
          {description}
        </AccordionContent>
      </AccordionItem>
    </ShadcnAccordion>
  );
}
