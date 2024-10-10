"use client";

import React from "react";
import Template from "../Template";
import { TemplateType } from "@/types";
import { Button } from "../ui/button";
import { Checkbox } from "../ui/checkbox";
import { Label } from "../ui/label";
import { SiCodemagic } from "react-icons/si";

export default function Templates({ reactPdf }: any) {
  const [templates, setTemplates] = React.useState<TemplateType[]>([
    {
      name: "Toronto",
      selected: false,
    },
    {
      name: "Manchester",
      selected: false,
    },
    {
      name: "New York",
      selected: false,
    },
    {
      name: "Washington",
      selected: false,
    },
  ]);

  return (
    <div className="w-[70%] mx-auto my-8 min-w-fit bg-neutral-100 py-12 px-8 rounded-lg">
      <div className="grid grid-cols-4 justify-items-center gap-4 mb-24">
        {templates.map((temp, i) => (
          <Template
            key={i}
            name={temp.name}
            templates={templates}
            setTemplates={setTemplates}
            defaultSelected={temp.selected}
          />
        ))}
      </div>

      <h3 className="text-xl font-semibold mb-2">Settings</h3>
      <div className="shadow-sm flex flex-col gap-4 rounded-lg p-6 border border-dashed border-slate-900 bg-neutral-200">
        <div className="items-top flex space-x-2">
          <Checkbox checked={true} id="pdf-export" />
          <div className="grid gap-1.5 leading-none">
            <Label
              htmlFor="pdf-export"
              className="text-sm font-medium leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70"
            >
              Export PDF
            </Label>
          </div>
        </div>
        <div className="items-top flex space-x-2">
          <Checkbox disabled id="html-export" />
          <div className="grid gap-1.5 leading-none">
            <Label
              htmlFor="html-export"
              className="text-sm font-medium leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70"
            >
              Export HTML
            </Label>
            <p className="text-sm text-muted-foreground">
              Currently not available.
            </p>
          </div>
        </div>

        <Button className="p-6 w-fit flex items-centerw-fit row-start-2 row-span-2 mt-2  font-semibold ">
          <a
            className="flex items-center w-fit m-4 text-md"
            href={reactPdf.url as string}
            download="test.pdf"
          >
            <SiCodemagic className="mr-2" /> Generate Your CV
          </a>
        </Button>
      </div>
    </div>
  );
}
