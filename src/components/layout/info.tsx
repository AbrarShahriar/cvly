"use client";

import Education from "@/components/Education";
import { FormButton } from "@/components/formButton";
import SocialLinkComp from "@/components/SocialLink";
import Tiptap from "@/components/Tiptap";

import { Input } from "@/components/ui/input";
import WorkExperience from "@/components/WorkExperience";
import { EducationType, SocialLink, WorkExperienceType } from "@/types";
import { useState } from "react";
import { LuPlus } from "react-icons/lu";
import { FaRegSave } from "react-icons/fa";
import { v4 as uuidv4 } from "uuid";
import { usePDF } from "@react-pdf/renderer";
import { MyCV } from "../pdftest";

export default function Info({ reactPdfUpdate }: any) {
  const [firstName, setFirstName] = useState("");
  const [lastName, setLastName] = useState("");
  const [email, setEmail] = useState("");
  const [phone, setPhone] = useState("");
  const [location, setLocation] = useState("");
  const [summary, setSummary] = useState("");
  const [socialLinks, setSocialLinks] = useState<SocialLink[]>([
    {
      id: uuidv4(),
      title: "Portfolio",
      link: "",
    },
  ]);
  const [workExperiences, setWorkExperiences] = useState<WorkExperienceType[]>([
    {
      id: uuidv4(),
      position: "Front End Developer",
      employer: "Google",
      location: "LA",
      description: "N/A",
      startDate: new Date("10/10/23").toDateString(),
      endDate: new Date("12/31/23").toDateString(),
    },
  ]);
  const [educations, setEducations] = useState<EducationType[]>([
    {
      id: uuidv4(),
      school: "BRAC University",
      degree: "CSE",
      location: "Dhaka",
      description: "N/A",
      startDate: new Date("10/10/23").toDateString(),
      endDate: new Date("12/31/23").toDateString(),
    },
  ]);

  const handleAddSocialLink = (e: any) => {
    e.preventDefault();
    setSocialLinks([
      ...socialLinks,
      {
        id: uuidv4(),
        link: "",
        title: "",
      },
    ]);
  };

  const handleAddWorkExperience = (e: any) => {
    e.preventDefault();
    setWorkExperiences([
      ...workExperiences,
      {
        id: uuidv4(),
        position: "",
        employer: "",
        startDate: new Date().toDateString(),
        endDate: new Date().toDateString(),
        location: "",
        description: "",
      },
    ]);
  };

  const handleAddEducation = (e: any) => {
    e.preventDefault();
    setEducations([
      ...educations,
      {
        id: uuidv4(),
        school: "",
        degree: "",
        location: "",
        description: "",
        startDate: new Date().toDateString(),
        endDate: "Present",
      },
    ]);
  };

  const handleSubmit = async () => {
    const payload = {
      firstName,
      lastName,
      email,
      phone,
      location,
      summary,
      socialLinks,
      workExperiences,
      educations,
    };
    console.log(payload);

    reactPdfUpdate(MyCV(payload));
  };

  return (
    <div className="outline-2 w-[70%] m-auto my-32 p-8 pb-4 rounded-lg  bg-neutral-100 shadow-md">
      <h1 className="text-3xl font-bold text-slate-800 mb-2">
        Personal Details
      </h1>
      <p className="mb-10 text-sm opacity-80 w-[70%]">
        Please provide your full name, contact information, and other relevant
        details. This information helps potential employers reach you easily.
      </p>

      <form action={handleSubmit} className="flex flex-col  w-full">
        {/* NAME */}
        <div className="flex justify-center gap-5 mb-8">
          <Input
            value={firstName}
            onChange={(e) => setFirstName(e.target.value)}
            label="First Name"
            type="text"
          />
          <Input
            value={lastName}
            onChange={(e) => setLastName(e.target.value)}
            label="Last Name"
            type="text"
          />
        </div>

        {/* CONTACT */}
        <div className="flex justify-center gap-5 mb-8">
          <Input
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            label="Email"
            type="email"
          />
          <Input
            value={phone}
            onChange={(e) => setPhone(e.target.value)}
            label="Phone Number"
            type="tel"
          />
        </div>

        {/* LOCATION */}
        <Input
          value={location}
          onChange={(e) => setLocation(e.target.value)}
          className="mb-8"
          label="Location"
          type="text"
        />

        {/* SUMMARY */}
        <Tiptap
          callback={(htmlSummary) => setSummary(htmlSummary)}
          label="Summary"
          placeholder="Write 2-3 sentence about yourself."
        />

        {/* SOCIAL LINKS */}
        <h2 className="text-2xl font-bold text-slate-800 mt-10 mb-2">
          Social Links
        </h2>
        <p className="text-sm opacity-80 w-[70%] mb-6">
          Include links to your professional social media profiles, such as
          LinkedIn, GitHub, or personal websites, to showcase your work and
          online presence.
        </p>
        <div className="flex flex-col gap-4 mb-4">
          {socialLinks.map((socialLink) => (
            <SocialLinkComp
              setSocialLinks={setSocialLinks}
              socialLink={socialLink}
              socialLinks={socialLinks}
              key={socialLink.id}
            />
          ))}
        </div>
        <p
          className="flex gap-1 cursor-pointer text-blue-500 items-center font-bold text-sm  hover:bg-blue-100 p-3 rounded-md mb-12"
          onClick={(e) => handleAddSocialLink(e)}
        >
          <LuPlus strokeWidth={3} size={16} /> Add another link
        </p>

        {/* WORK EXPERIENCE */}
        <h1 className="text-3xl font-bold text-slate-800 mb-2">
          Work Experience
        </h1>
        <p className="mb-10 text-sm opacity-80 w-[70%]">
          List your previous roles, including job titles, company names, and
          employment dates. Highlight key responsibilities, achievements, and
          skills gained in each position.
        </p>

        <div className="flex flex-col gap-6">
          {workExperiences.map((workExperience, i) => (
            <WorkExperience
              workExperience={workExperience}
              key={workExperience.id}
              setWorkExperiences={setWorkExperiences}
              index={i}
            />
          ))}
          <p
            className="flex gap-1 cursor-pointer text-blue-500 items-center font-bold text-sm  hover:bg-blue-100 p-3 rounded-md mb-12"
            onClick={(e) => handleAddWorkExperience(e)}
          >
            <LuPlus strokeWidth={3} size={16} /> Add another employment
          </p>
        </div>

        {/*EDUCATION */}
        <h1 className="text-3xl font-bold text-slate-800 mb-2">Education</h1>
        <p className="mb-10 text-sm opacity-80 w-[70%]">
          List your educational background, including degrees, institutions, and
          any relevant honors or achievements.
        </p>

        <div className="flex flex-col gap-6">
          {educations.map((ed, i) => (
            <Education
              education={ed}
              key={ed.id}
              setEducations={setEducations}
              index={i}
            />
          ))}
          <p
            className="flex gap-1 cursor-pointer text-blue-500 items-center font-bold text-sm  hover:bg-blue-100 p-3 rounded-md mb-8"
            onClick={(e) => handleAddEducation(e)}
          >
            <LuPlus strokeWidth={3} size={16} /> Add another education
          </p>
        </div>

        {/* SUBMIT */}
        <FormButton className="flex items-center">
          <FaRegSave size={16} className="mr-2" /> Save
        </FormButton>
      </form>
    </div>
  );
}
