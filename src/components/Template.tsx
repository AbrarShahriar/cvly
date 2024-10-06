"use client";

import { TemplateType } from "@/types";
import React from "react";
import { MdDone } from "react-icons/md";

interface TemplateProps {
  name: string;
  templates: TemplateType[];
  setTemplates: (newVal: TemplateType[]) => void;
  defaultSelected: boolean;
}

export default function Template({
  name,
  setTemplates,
  templates,
  defaultSelected,
}: TemplateProps) {
  const handleSelected = () => {
    const data = [...templates];

    for (let i = 0; i < data.length; i++) {
      if (data[i].name == name) {
        data[i].selected = !defaultSelected;
      } else {
        data[i].selected = false;
      }
    }

    setTemplates(data);
  };

  return (
    <div
      className="flex flex-col items-center justify-center w-48 h-64 rounded-lg cursor-pointer "
      onClick={handleSelected}
    >
      <p className=" text-center font-semibold mb-1">{name}</p>
      <div className="relative">
        <img
          className={`rounded-lg w-48 h-64 object-cover border-4 border-solid transition-all shadow-md  hover:border-blue-500 ${
            defaultSelected ? "border-blue-500" : "border-transparent"
          }`}
          src="https://s3.resume.io/cdn-cgi/image/format=auto,fit=scale-down,dpr=1.5,width=154/uploads/local_template_image/image/142/persistent-resource/oslo-resume-templates.jpg"
          alt=""
        />
        <div
          className={`absolute translate-x-[-50%] translate-y-[-50%] top-[50%] left-[50%] text-white bg-blue-500 rounded-full transition-opacity p-3 ${
            defaultSelected ? "opacity-100" : "opacity-0"
          }`}
        >
          <MdDone size={18} />
        </div>
      </div>
    </div>
  );
}
