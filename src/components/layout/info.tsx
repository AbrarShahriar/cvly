"use client";

import Education from "@/components/Education";
import SocialLinkComp from "@/components/SocialLink";
import Tiptap from "@/components/Tiptap";

import { Input } from "@/components/ui/input";
import WorkExperience from "@/components/WorkExperience";
import { EducationType, SocialLink, WorkExperienceType } from "@/types";
import { useState } from "react";
import { LuPlus } from "react-icons/lu";
import { FaRegSave } from "react-icons/fa";
import { v4 as uuidv4 } from "uuid";
import { generatePdf } from "../pageGenerate";
import { Button } from "../ui/button";
import { Font } from "@react-pdf/renderer/lib/react-pdf.browser.min";
import { TemplateNames } from "@/lib/templates";
import { Sumana } from "next/font/google";

export default function Info() {
  const [firstName, setFirstName] = useState("Abrar");
  const [lastName, setLastName] = useState("Shahriar");
  const [email, setEmail] = useState("AbrarShahriar321@gmail.com");
  const [phone, setPhone] = useState("(+880) 1841210657");
  const [location, setLocation] = useState("5no Road, Kallyanpur, Dhaka-1207");
  const [summary, setSummary] = useState(
    "<p>Tech enthusiast utilizing technologies such as <strong>NextJS, NestJS and Docker</strong> Financial Advisor with 7+ years of experience delivering financial/investment advisory services to high value clients. Proven success in managing multi-million dollar portfolios, driving profitability, and increasing ROI through skillful strategic planning, consulting, and financial advisory services</p>"
  );
  const [socialLinks, setSocialLinks] = useState<SocialLink[]>([
    {
      id: uuidv4(),
      title: "",
      link: "",
    },
  ]);
  const [workExperiences, setWorkExperiences] = useState<WorkExperienceType[]>([
    {
      id: uuidv4(),
      position: "Senior Financial Advisor",
      employer: "Wells Fargo Advisors",
      location: "Houston, TX",
      description: `<ul><li>Deliver financial advice to clients, proposing strategies to achieve short- and long-term objectives for investments, insurance, business and estate planning with minimal risk</li>
<li>Develop, review, and optimize investment portfolios for 300+ high value clients with over $190M AUM (Assets Under Management)</li>
<li>Ensure maximum client satisfaction by providing exceptional and personalized service, enhancing client satisfaction ratings from 88% to 99.9% in less than 6 months</li>
<li>Work closely with specialists from multiple branches, managing investment portfolios for over 800 clients with over $25M in assets under care</li>
</ul>`,
      startDate: new Date().toDateString(),
      endDate: new Date().toDateString(),
    },
  ]);
  const [educations, setEducations] = useState<EducationType[]>([
    {
      id: uuidv4(),
      school: "Louisiana State University",
      degree:
        "Bachelor of Science in Business Administration (concentration: finance)",
      location: "Baton Rouge, LA",
      description: "<p>Honors: cum laude (GPA: 3.7/4.0)</p>",
      startDate: new Date().toDateString(),
      endDate: new Date().toDateString(),
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
        endDate: new Date().toDateString(),
      },
    ]);
  };

  const handleSubmit = () => {
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

    localStorage.setItem("resume-draft", JSON.stringify(payload));

    // reactPdfUpdate(generatePdf({ payload, selectedTemplate }));
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

      <div className="flex flex-col  w-full pb-4">
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
          defaultValue={summary}
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
        <Button onClick={handleSubmit} className="flex items-center w-fit">
          <FaRegSave size={16} className="mr-2" /> Save
        </Button>
      </div>
    </div>
  );
}
