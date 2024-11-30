"use client";

import React from "react";
import Template from "../Template";
import { PdfPayloadType, TemplateType } from "@/types";
import { Button } from "../ui/button";
import { Checkbox } from "../ui/checkbox";
import { Label } from "../ui/label";
import { SiCodemagic } from "react-icons/si";
import { usePDF } from "@react-pdf/renderer/lib/react-pdf.browser.min";
import { generatePdf } from "../../lib/pageGenerate";
import { Modal } from "../Modal";
import { ScrollArea } from "../ui/scroll-area";
import Image from "next/image";

import { CustomDialog, DialogContent } from "../CustomDialog";
import { TemplateNames } from "@/lib/templates";
import { sendGAEvent } from "@next/third-parties/google";

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
    {
      name: "Budapest",
      selected: false,
      img: "https://cdn.create.microsoft.com/catalog-assets/en-us/a8bd8a14-9ea2-40cf-af65-bf5e5b2944b5/thumbnails/616/ats-classic-hr-resume-white-modern-simple-2-1-8aa636d33184.webp",
    },
    {
      name: "Salem",
      selected: false,
      img: "https://cdn.create.microsoft.com/catalog-assets/en-us/7af668a8-d9d4-4a54-989e-422a9b87280f/thumbnails/616/basic-sales-resume-white-modern-simple-2-1-a604636a88cd.webp",
    },
  ]);

  const [openNotSavedModal, setOpenNotSavedModal] = React.useState(false);
  const [openNoThemeModal, setOpenNoThemeModal] = React.useState(false);
  const [openGeneratingBackdrop, setOpenGeneratingBackdrop] =
    React.useState(false);
  // const [textsIndex, setTextsIndex] = React.useState(0);

  const loadingStateTexts = [
    "Setting up the layout...",
    "Fetching the fonts and styles...",
    "Injecting your information into the template...",
    "Rendering your resume...",
    "Download will begin shortly... Try again if download does not start",
  ];

  const handleGenerate = () => {
    const isDraftSaved = Boolean(localStorage.getItem("resume-draft"));
    if (!isDraftSaved) {
      return setOpenNotSavedModal(true);
    }

    const isTemplateSelected = templates.some((el) => el.selected);
    if (!isTemplateSelected) {
      return setOpenNoThemeModal(true);
    }

    const payload: PdfPayloadType = JSON.parse(
      localStorage.getItem("resume-draft") as string
    );

    let selectedTemplate: TemplateNames = "Chicago";
    templates.forEach((template) => {
      if (template.selected) {
        selectedTemplate = template.name;
      }
    });
    updateInstance(generatePdf({ payload, selectedTemplate }));
    setOpenGeneratingBackdrop(true);

    (window as any).beam(`/selected_template/${selectedTemplate}`);

    const timeout = setTimeout(() => {
      const url = instance.url as string;
      const link = document.createElement("a");
      link.target = "_blank";
      link.href = url;
      link.download = `Resume-${date.getDate()}/${date.getMonth()}/${date.getFullYear()}.pdf`;
      link.click();
      link.remove();
      setOpenGeneratingBackdrop(false);
      clearTimeout(timeout);
      sendGAEvent("event", "SELECTED_TEMPLATE", { value: selectedTemplate });
    }, 2000);
  };

  return (
    <div
      className={`w-[70%] mx-auto  bg-neutral-100 py-12 px-8 rounded-lg max-md:w-full max-md:px-2 max-md:rounded-b-none mb-24 max-md:mb-0 ${
        openGeneratingBackdrop && "pointer-events-none"
      }`}
    >
      <div className="grid grid-cols-4 py-8 gap-12 px-4 mb-16 border-y border-neutral-300 max-h-[400px] overflow-x-hidden overflow-y-scroll  max-md:grid-cols-2 justify-items-center ">
        {templates.map((temp, i) => (
          <Template
            key={i}
            img={temp.img}
            name={temp.name}
            templates={templates}
            setTemplates={setTemplates}
            defaultSelected={temp.selected}
            updateInstance={updateInstance}
          />
        ))}
        <p className="mt-2 col-span-4 text-center text-sm max-md:col-span-2">
          More Coming Soon...
        </p>
      </div>

      {/* Settings */}
      <div className="max-md:px-4">
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
          <div className="items-top flex space-x-2">
            <Checkbox disabled id="html-export" />
            <div className="grid gap-1.5 leading-none">
              <Label
                htmlFor="html-export"
                className="text-sm font-medium leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70"
              >
                Export DOCX
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

      <CustomDialog open={openGeneratingBackdrop}>
        <DialogContent className="sm:max-w-[425px] grid place-items-center rounded-lg">
          <Image
            alt="loading"
            src="/assets/loader.gif"
            width={100}
            height={100}
          />
          <p className="text-center">{loadingStateTexts[4]}</p>
        </DialogContent>
      </CustomDialog>
    </div>
  );
}
