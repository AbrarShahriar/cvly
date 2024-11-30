"use client";

import { TemplateNames } from "@/lib/templates";
import { TemplateType } from "@/types";
import React from "react";
import { MdDone } from "react-icons/md";
import Image from "next/image";

interface TemplateProps {
  name: TemplateNames;
  templates: TemplateType[];
  setTemplates: (newVal: TemplateType[]) => void;
  defaultSelected: boolean;
  updateInstance: any;
  img: string;
}

export default function Template({
  name,
  setTemplates,
  templates,
  defaultSelected,
  updateInstance,
  img,
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
        <Image
          className={`rounded-lg w-48 h-64 object-cover border-4 border-solid transition-all shadow-md  hover:border-blue-500 ${
            defaultSelected ? "border-blue-500" : "border-transparent"
          }`}
          src={img}
          alt={name}
          width={192}
          height={256}
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
