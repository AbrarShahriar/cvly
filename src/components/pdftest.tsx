"use client";

import React from "react";
import { Page, Text, View, Document, StyleSheet } from "@react-pdf/renderer";
import { PdfPayloadType } from "@/types";

const templates = {
  toronto: {
    page: {
      backgroundColor: "white",
    },
    section: {
      margin: 10,
      padding: 10,
      flexGrow: 1,
    },
  },
};

// Create styles
const styles = StyleSheet.create({
  page: {
    backgroundColor: "white",
    marginTop: "50px",
    padding: "20px",
  },

  header: {
    textAlign: "center",
  },
  name: {
    fontSize: "24px",
    fontWeight: "bold",
    width: "100%",
    paddingBottom: "10px",
    borderBottom: "1px solid rgba(0, 0, 0, 0.05)",
    marginBottom: "10px",
  },
  basicInfo: {
    marginBottom: "20px",
  },
  summary: { marginBottom: "20px" },
  sectionTitle: {
    fontSize: "32px",
    fontWeight: "bold",
    marginBottom: "20px",
  },
  workExperience: {
    textAlign: "center",
    marginBottom: "40px",
  },
  employer: {
    fontWeight: "bold",
  },
  timeOfWorkAndEducation: {
    fontStyle: "italic",
  },
  educations: {
    textAlign: "center",
  },
});

// Create Document Component
export const MyCV = (payload?: PdfPayloadType) =>
  payload ? (
    <Document>
      <Page size="A4" style={styles.page}>
        {/* Personal Info */}
        <View style={styles.header}>
          <Text style={styles.name}>
            {payload.firstName} {payload.lastName}
          </Text>
          <Text style={styles.basicInfo}>
            {payload.location} | {payload.email} | {payload.phone}
          </Text>
          <Text style={styles.summary}>{payload.summary}</Text>
        </View>

        {/* Work */}
        <View style={styles.workExperience}>
          <Text style={styles.sectionTitle}>Professional Experience</Text>
          {payload.workExperiences.map((workExperience, i) => (
            <View key={i}>
              <Text style={{}}>{workExperience.position}</Text>
              <Text style={{}}>
                {workExperience.employer}, {workExperience.location}
              </Text>
              <Text style={styles.timeOfWorkAndEducation}>
                {workExperience.startDate} - {workExperience.endDate}
              </Text>
            </View>
          ))}
        </View>

        {/* Education */}
        <View style={styles.educations}>
          <Text style={styles.sectionTitle}>Education</Text>
          {payload.educations.map((education, i) => (
            <View key={i}>
              <Text style={{}}>
                {education.school}, {education.location}
              </Text>
              <Text style={styles.timeOfWorkAndEducation}>
                {education.startDate} - {education.endDate}
              </Text>
              <Text style={{}}>{education.degree}</Text>
            </View>
          ))}
        </View>
      </Page>
    </Document>
  ) : (
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
          <Text style={{ fontSize: "42px" }}>Failed</Text>
        </View>
      </Page>
    </Document>
  );
