"use client";

import { Text, View, Page, Document, Font } from "@react-pdf/renderer";
import React from "react";

import { PdfPayloadType } from "@/types";
import { createTw } from "react-pdf-tailwind";
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

export const generatePdf = (payload?: PdfPayloadType) => {
  if (!payload) {
    return (
      <Document>
        <Page
          size="A4"
          style={{
            alignItems: "center",
            justifyContent: "center",
            width: "100vw",
            height: "100vh",
            display: "flex",
          }}
        >
          <View>
            <Text style={{ fontSize: "42px" }}>
              Please Fill Out The Form!!!
            </Text>
          </View>
        </Page>
      </Document>
    );
  }

  return loadTemplate("Toronto")(payload);
};
