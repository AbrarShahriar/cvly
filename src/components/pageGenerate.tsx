"use client";

import { Text, View, Page, Document, Font } from "@react-pdf/renderer";
import React from "react";

import { PdfPayloadType } from "@/types";
import Html from "react-pdf-html";
import { createTw } from "react-pdf-tailwind";
import { templates } from "@/lib/templates";

const payload = {
  firstName: "Abrar",
  lastName: "Shahriar",
  email: "AbrarShahriar321@gmail.com",
  phone: "+8801841210657",
  location: "Dhaka, Bangladesh",
  summary:
    "Lorem ipsum dolor, sit amet consectetur adipisicing elit. Ducimus delectus, numquam ipsa necessitatibus nesciunt deleniti iure et libero dolore incidunt, vel voluptas atque explicabo? In doloribus voluptates cupiditate dignissimos ex?",
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
      description: "N/A",
      startDate: "Tue Oct 10 2023",
      endDate: "Sun Dec 31 2023",
    },
    {
      id: "ef5864e8-d7e2-4f14-9f05-f5f5000819c5",
      position: "Front End Developer",
      employer: "Google",
      location: "LA",
      description: "N/A",
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
      description: "N/A",
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

  return (
    <Document>
      <Page size="A4" style={tw(`p-6 pt-8 `)}>
        <Html>{templates["toronto"](payload)}</Html>
      </Page>
    </Document>
  );
};
