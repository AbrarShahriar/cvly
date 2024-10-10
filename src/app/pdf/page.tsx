"use client";

import { PDFViewer } from "@react-pdf/renderer/lib/react-pdf.browser.min";
import React, { Suspense } from "react";
import { Font } from "@react-pdf/renderer/lib/react-pdf.browser.min";
import { loadTemplate } from "@/lib/templates";

const payload = {
  firstName: "Shahriar",
  lastName: "Adib",
  email: "teste@gmail.com",
  phone: "01887764008",
  location: "Chittagong",
  summary:
    '<p><span class="italic">Full-stack Developer</span> utilizing technologies such as <strong>NextJS</strong>, <strong>NestJS</strong> and <strong>Docker</strong></p>',
  socialLinks: [
    {
      id: "4aad9ab1-320c-4c6d-a748-462fa93b0379",
      title: "Portfolio",
      link: "",
    },
  ],
  workExperiences: [
    {
      id: "2256170f-1a94-48bc-8e1a-289ea2cb52dd",
      position: "Freelance Front-End Developer",
      employer: "Siam Khandaker",
      location: "Noakhali",
      description:
        "<ul><li><p>Designed a user-friendly website for a graphics designer</p></li><li><p>Used vanilla technologies to ensure instant load</p></li></ul>",
      startDate: "Thu Sep 08 2022",
      endDate: "Thu Dec 22 2022",
    },
    {
      id: "c8d94935-99b6-4c24-8d47-a7f38846cf77",
      position: "Freelance Front-End Developer",
      employer: "Siam Khandaker",
      startDate: "Thu Sep 08 2022",
      endDate: "Thu Dec 22 2022",
      location: "Noakhali",
      description:
        "<ul><li><p>Designed a user-friendly website for a graphics designer</p></li><li><p>Used vanilla technologies to ensure instant load</p></li></ul>",
    },
  ],
  educations: [
    {
      id: "260e8d99-7263-43b5-bd2e-349842d3aed7",
      school: "BRAC University",
      degree: "Bachelor of Science in Computer Science & Engineering",
      location: "Dhaka",
      description:
        "<p>Finished 1st Semester. CGPA: <strong>(3.93/4.00)</strong></p>",
      startDate: "Tue May 28 2024",
      endDate: "Present",
    },
  ],
};

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
          {loadTemplate("Toronto")(payload)}
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
