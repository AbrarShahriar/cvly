"use client";

import { PDFViewer } from "@react-pdf/renderer/lib/react-pdf.browser.min";
import React, { Suspense } from "react";
import {
  Page,
  Document,
  Font,
} from "@react-pdf/renderer/lib/react-pdf.browser.min";
import Html from "react-pdf-html";
import { createTw } from "react-pdf-tailwind";
import { templates } from "@/lib/templates";
import { View, Text } from "@react-pdf/renderer";
import { Toronto } from "@/templates/Toronto";

const payload = {
  firstName: "Abrar",
  lastName: "Shahriar",
  email: "AbrarShahriar321@gmail.com",
  phone: "+8801841210657",
  location: "Dhaka, Bangladesh",
  summary:
    "<p><span class='italic'>Financial Advisor with 7+ years of experience delivering financial/investment advisory services to high value clients. Proven success in managing multi-million dollar portfolios, driving profitability, and increasing ROI through skillful strategic planning, consulting, and financial advisory services</span></p>",
  socialLinks: [
    {
      id: "e7e7ea57-bcbd-4b0c-afd0-7f864da3e0e7",
      title: "Portfolio",
      link: "",
    },
  ],
  workExperiences: [
    {
      id: "ef5864e8-d7e2-4f14-9f05-f5f5000819c5",
      position: "Front End Developer",
      employer: "Google",
      location: "LA",
      description:
        "<ul><li>Edit: <strong>hello</strong> <span class='italic'>Italic</span> Italic In my case I use CustomImage.configure({ inline: true }), because I need the paragraph tag around image. But may be you don't need that.</li><li>Where can I find updates on this for v2? I am trying to use bubble menu to set classes like left, center or right to images. How do I approach this? Also how do I retain existing classes on images?</li><li>Edit: In my case I use CustomImage.configure({ inline: true }), because I need the paragraph tag around image. But may be you don't need that.</li><li>Where can I find updates on this for v2? I am trying to use bubble menu to set classes like left, center or right to images. How do I approach this? Also how do I retain existing classes on images?</li><li>Edit: In my case I use CustomImage.configure({ inline: true }), because I need the paragraph tag around image. But may be you don't need that.</li><li>Where can I find updates on this for v2? I am trying to use bubble menu to set classes like left, center or right to images. How do I approach this? Also how do I retain existing classes on images?</li></ul>",
      startDate: "Tue Oct 10 2023",
      endDate: "Sun Dec 31 2023",
    },
    {
      id: "ef5864e8-d7e2-4f14-9f05-f5f5000819c5",
      position: "Front End Developer",
      employer: "Microsoft",
      location: "Washington",
      description:
        "<ul><li>Edit: In my case I use CustomImage.configure({ inline: true }), because I need the paragraph tag around image. But may be you don't need that.</li><li>Where can I find updates on this for v2? I am trying to use bubble menu to set classes like left, center or right to images. How do I approach this? Also how do I retain existing classes on images?</li><li>Edit: In my case I use CustomImage.configure({ inline: true }), because I need the paragraph tag around image. But may be you don't need that.</li><li>Where can I find updates on this for v2? I am trying to use bubble menu to set classes like left, center or right to images. How do I approach this? Also how do I retain existing classes on images?</li><li>Edit: In my case I use CustomImage.configure({ inline: true }), because I need the paragraph tag around image. But may be you don't need that.</li><li>Where can I find updates on this for v2? I am trying to use bubble menu to set classes like left, center or right to images. How do I approach this? Also how do I retain existing classes on images?</li></ul>",
      startDate: "Tue Oct 10 2023",
      endDate: "Sun Dec 31 2023",
    },
    {
      id: "ef5864e8-d7e2-4f14-9f05-f5f5000819c5",
      position: "Front End Developer",
      employer: "Microsoft",
      location: "Washington",
      description: `<p>Edit: In my case I use CustomImage.configure({ inline: true })</p>`,
      startDate: "Tue Oct 10 2023",
      endDate: "Sun Dec 31 2023",
    },
  ],
  educations: [
    {
      id: "1332f380-611c-411e-b68d-abd6178c9815",
      school: "BRAC University",
      degree: "CSE",
      location: "Dhaka",
      description: "<ul><li>Jello</li><li>Hello</li></ul>",
      startDate: "Tue Oct 10 2023",
      endDate: "Present",
    },
    {
      id: "1332f380-611c-411e-b68d-abd6178c9815",
      school: "BRAC University",
      degree: "CSE",
      location: "Dhaka",
      description:
        "<ul><li>Edit: In my case I use CustomImage.configure({ inline: true }), because I need the paragraph tag around image. But may be you don't need that.</li><li>Where can I find updates on this for v2? I am trying to use bubble menu to set classes like left, center or right to images. How do I approach this? Also how do I retain existing classes on images?</li><li>Edit: In my case I use CustomImage.configure({ inline: true }), because I need the paragraph tag around image. But may be you don't need that.</li><li>Where can I find updates on this for v2? I am trying to use bubble menu to set classes like left, center or right to images. How do I approach this? Also how do I retain existing classes on images?</li><li>Edit: In my case I use CustomImage.configure({ inline: true }), because I need the paragraph tag around image. But may be you don't need that.</li><li>Where can I find updates on this for v2? I am trying to use bubble menu to set classes like left, center or right to images. How do I approach this? Also how do I retain existing classes on images?</li></ul>",
      startDate: "Tue Oct 10 2023",
      endDate: "Present",
    },
  ],
};

const tw = createTw({});

Font.register({
  family: "Lora",
  src: "/fonts/Lora/Lora-Regular.ttf",
});
Font.register({
  family: "LoraBold",
  src: "/fonts/Lora/Lora-Bold.ttf",
});
Font.register({
  family: "LoraItalic",
  src: "/fonts/Lora/Lora-Italic.ttf",
});

Font.registerHyphenationCallback((word) => [word]);

export default function Pdf() {
  return (
    <Suspense
      fallback={<h1 className="text-4xl text-white">Loading...</h1>}
      unstable_expectedLoadTime={10000}
    >
      <div className="w-[100%]">
        <PDFViewer width={"100%"} height={"800"}>
          {/* <Document>
            <Page size="A4" style={tw(`p-6 pt-8 `)}>
              <Html>{templates.toronto(payload)}</Html>
            </Page>
          </Document> */}
          {Toronto(payload)}
          {/* <Document>
            <Page size={"A4"}>
              {["A", "B", "C"].map((el) => (
                <Text>{el}</Text>
              ))}
            </Page>
          </Document> */}
        </PDFViewer>
      </div>
    </Suspense>
  );
}
