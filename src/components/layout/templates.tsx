"use client";

import React from "react";
import Template from "../Template";
import { TemplateType } from "@/types";
import { Button } from "../ui/button";
import { Checkbox } from "../ui/checkbox";
import { Label } from "../ui/label";
import { SiCodemagic } from "react-icons/si";
import { usePDF } from "@react-pdf/renderer/lib/react-pdf.browser.min";
import { generatePdf } from "../pageGenerate";
import { Modal } from "../Modal";

const date = new Date();

export default function Templates() {
  const [instance, updateInstance] = usePDF({
    document: generatePdf({ selectedTemplate: "Chicago" }),
  });

  const [templates, setTemplates] = React.useState<TemplateType[]>([
    {
      name: "Chicago",
      selected: false,
      img: "https://resumegenius.com/wp-content/uploads/Chicago-Resume-Template-Dark-Blue-Hub.png",
    },
    {
      name: "White House",
      selected: false,
      img: "https://resumegenius.com/wp-content/uploads/White-House-Resume-Template-Coral-1.png",
    },
  ]);

  const [openNotSavedModal, setOpenNotSavedModal] = React.useState(false);
  const [openNoThemeModal, setOpenNoThemeModal] = React.useState(false);

  const handleGenerate = () => {
    const isDraftSaved = Boolean(localStorage.getItem("resume-draft"));
    if (!isDraftSaved) {
      return setOpenNotSavedModal(true);
    }

    const isTemplateSelected = templates.some((el) => el.selected);
    if (!isTemplateSelected) {
      return setOpenNoThemeModal(true);
    }

    const url = instance.url as string;
    const link = document.createElement("a");
    link.target = "_blank";
    link.href = url;
    link.download = `Resume-${date.getDate()}/${date.getMonth()}/${date.getFullYear()}.pdf`;
    link.click();
    link.remove();
  };

  return (
    <div className="w-[70%] mx-auto my-8 min-w-fit bg-neutral-100 py-12 px-8 rounded-lg">
      <div className="grid grid-cols-4 justify-items-center gap-4 mb-12">
        {templates.map((temp, i) => (
          <Template
            img={temp.img}
            key={i}
            name={temp.name}
            templates={templates}
            setTemplates={setTemplates}
            defaultSelected={temp.selected}
            updateInstance={updateInstance}
          />
        ))}
      </div>

      <p className="mb-12 text-center font-bold text-sm">More Coming Soon...</p>

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

        <Button
          onClick={handleGenerate}
          className="p-6 flex items-center w-fit row-start-2 row-span-2 mt-2  font-semibold "
        >
          <SiCodemagic className="mr-2" /> Generate Your CV
        </Button>

        <Modal
          title="Oops!"
          description="Seems like you forgot to save your draft. Please save it first and then proceed."
          open={openNotSavedModal}
          setOpen={setOpenNotSavedModal}
        />
        <Modal
          title="Oops!"
          description="Seems like you forgot to choose a theme. Please choose a theme first."
          open={openNoThemeModal}
          setOpen={setOpenNoThemeModal}
        />
      </div>
    </div>
  );
}
