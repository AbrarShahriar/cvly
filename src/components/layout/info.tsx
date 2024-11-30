"use client";

import Education from "@/components/Education";
import SocialLinkComp from "@/components/SocialLink";
import Tiptap from "@/components/Tiptap";

import { Input } from "@/components/ui/input";
import WorkExperience from "@/components/WorkExperience";
import {
  EducationType,
  PdfPayloadType,
  SocialLink,
  WorkExperienceType,
} from "@/types";
import { useEffect, useState } from "react";
import { LuPlus } from "react-icons/lu";
import { FaRegSave } from "react-icons/fa";
import { v4 as uuidv4 } from "uuid";
import { Button } from "../ui/button";
import AlertBox from "../AlertBox";

export default function Info() {
  const [defaultPayload, setDefaultPayload] = useState<PdfPayloadType>(
    JSON.parse(localStorage.getItem("resume-draft") as string)
  );

  const [isDraftSaved, setIsDraftSaved] = useState(false);
  const [firstName, setFirstName] = useState<string>(
    defaultPayload && defaultPayload.firstName
  );
  const [lastName, setLastName] = useState<string>(
    defaultPayload && defaultPayload.lastName
  );
  const [email, setEmail] = useState(defaultPayload && defaultPayload.email);
  const [phone, setPhone] = useState(defaultPayload && defaultPayload.phone);
  const [location, setLocation] = useState(
    defaultPayload && defaultPayload.location
  );
  const [summary, setSummary] = useState(
    defaultPayload && defaultPayload.summary
  );
  const [socialLinks, setSocialLinks] = useState<SocialLink[]>(
    defaultPayload
      ? defaultPayload.socialLinks
      : [
          {
            id: uuidv4(),
            title: "",
            link: "",
          },
        ]
  );
  const [workExperiences, setWorkExperiences] = useState<WorkExperienceType[]>(
    defaultPayload
      ? defaultPayload.workExperiences
      : [
          {
            id: uuidv4(),
            position: "",
            employer: "",
            location: "",
            description: ``,
            startDate: new Date().toDateString(),
            endDate: new Date().toDateString(),
          },
        ]
  );
  const [educations, setEducations] = useState<EducationType[]>(
    defaultPayload
      ? defaultPayload.educations
      : [
          {
            id: uuidv4(),
            school: "",
            degree: "",
            location: "",
            description: "",
            startDate: new Date().toDateString(),
            endDate: new Date().toDateString(),
          },
        ]
  );
  const [additional, setAdditional] = useState(
    defaultPayload && defaultPayload.additional
  );

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
    const payload: PdfPayloadType = {
      firstName,
      lastName,
      email,
      phone,
      location,
      summary,
      socialLinks,
      workExperiences,
      educations,
      additional,
    };

    localStorage.setItem("resume-draft", JSON.stringify(payload));

    setIsDraftSaved(true);
  };

  useEffect(() => {
    setIsDraftSaved(Boolean(localStorage.getItem("resume-draft")));
  }, []);

  return (
    <div className="outline-2 w-[70%] m-auto mb-32 p-8 pb-4 rounded-lg  bg-neutral-100 shadow-md max-md:w-full">
      <h1 className="text-3xl font-bold text-slate-800 mb-2">
        Personal Details
      </h1>
      <p className="mb-10 text-sm opacity-80 w-[70%] max-md:w-[90%]">
        Please provide your full name, contact information, and other relevant
        details. This information helps potential employers reach you easily.
      </p>

      <div className="flex flex-col  w-full pb-4">
        {/* NAME */}
        <div className="flex justify-center gap-5 mb-8 max-md:flex-col">
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
        <div className="flex justify-center gap-5 mb-8 max-md:flex-col">
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
          Social Link
        </h2>
        <p className="text-sm opacity-80 w-[70%] mb-6">
          {/* Include links to your professional social media profiles, such as
          LinkedIn, GitHub, or personal websites, to showcase your work and
          online presence. */}
          Include a link to your most active work related social media profile.
          If you are active on LinkedIn, then preferably add LinkedIn. If you
          are a developer not much active on LinkedIn, then add GitHub.
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
        {/* <p
          className="flex gap-1 cursor-pointer text-blue-500 items-center font-bold text-sm  hover:bg-blue-100 p-3 rounded-md mb-12"
          onClick={(e) => handleAddSocialLink(e)}
        >
          <LuPlus strokeWidth={3} size={16} /> Add another link
        </p> */}

        {/* WORK EXPERIENCE */}
        <h1 className="text-3xl font-bold text-slate-800 mb-2">
          Work Experience
        </h1>
        <p className="mb-10 text-sm opacity-80 w-[70%] max-md:w-[90%]">
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

        {/* ADDITIONAL */}
        <h1 className="text-3xl font-bold text-slate-800 mb-2">
          Additional Information
        </h1>
        <p className="mb-10 text-sm opacity-80 w-[70%]">
          The additional information section allows you to highlight unique
          aspects of your background that don&apos;t fit into standard sections
          like work experience or education. It provides a space to showcase
          certifications, language skills, volunteer work, hobbies, or awards,
          helping you stand out and demonstrate a well-rounded personality.
        </p>
        <Tiptap
          defaultValue={additional}
          callback={(htmlAdditional) => setAdditional(htmlAdditional)}
          label="Details (Certifications, Skills, etc.)"
          placeholder="Provide details such as certifications, skills, hobbies, or other achievements."
        />
        <p className="mb-20"></p>

        {isDraftSaved ? (
          <AlertBox
            className="mb-6"
            variant="warning"
            message="A draft is already saved, proceed to overwrite!"
          />
        ) : (
          <AlertBox
            className="mb-6"
            variant="error"
            message="Do not proceed without saving the draft!"
          />
        )}
        {/* SUBMIT */}
        <Button
          onClick={handleSubmit}
          className="flex items-center w-fit max-md:text-lg max-md:font-bold max-md:px-8 max-md:py-6"
        >
          <FaRegSave size={16} className="mr-2" /> Save
        </Button>
      </div>
    </div>
  );
}
