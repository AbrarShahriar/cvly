"use client";

import Info from "@/components/layout/info";
import Templates from "@/components/layout/templates";
import { MyCV } from "@/components/pdftest";
import { usePDF } from "@react-pdf/renderer/lib/react-pdf.browser.min";

export default function Home() {
  const [instance, updateInstance] = usePDF({
    document: MyCV(),
  });

  return (
    <div>
      <Info reactPdfUpdate={updateInstance} />
      <h1 className="text-white text-4xl text-center font-bold">
        Choose A Template
      </h1>
      <Templates reactPdf={instance} />
    </div>
  );
}
