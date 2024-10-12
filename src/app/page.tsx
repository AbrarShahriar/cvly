import Feature from "@/components/Feature";
import { Button } from "@/components/ui/button";
import Link from "next/link";
import React from "react";
import { HiLightningBolt } from "react-icons/hi";
import { FaPiggyBank } from "react-icons/fa6";
import { BsFillShieldLockFill } from "react-icons/bs";
import { PiFilesFill } from "react-icons/pi";
import { FaUserSecret } from "react-icons/fa6";
import { MdOutlineDocumentScanner } from "react-icons/md";
import Accordion from "@/components/Accordion";
import {
  FaFacebookSquare,
  FaInstagramSquare,
  FaGithubSquare,
  FaLinkedin,
} from "react-icons/fa";

const otr = "outline outline-black";

const ICON_SIZE = 26;

const features = [
  {
    icon: <HiLightningBolt size={ICON_SIZE} />,
    title: "Edit Your Resume in Real Time",
    description:
      "As you edit your resume with our builder, you’ll see the changes applied to your document.",
  },
  {
    icon: <FaPiggyBank size={ICON_SIZE} />,
    title: "100% Free download",
    description:
      "Ability to download and print resumes in PDF and plain text formatting with no limit",
  },
  {
    icon: <BsFillShieldLockFill size={ICON_SIZE} />,
    title: "Your data is safe",
    description:
      "No data is sent to our server, everything is stored locally on your device.",
  },
  {
    icon: <PiFilesFill size={ICON_SIZE} />,
    title: "Multi-format resume options",
    description:
      "Save your resume in any common format, including HTML and PDF in a single click.",
  },
  {
    icon: <FaUserSecret size={ICON_SIZE} />,
    title: "NO Hidden Fees",
    description:
      "With CVly, you won’t spend hours working on your resume, just to be hit with a hidden paywall.",
  },
  {
    icon: <MdOutlineDocumentScanner size={ICON_SIZE} />,
    title: "ATS-friendly templates",
    description:
      "Our templates are ATS-friendly meaning your resume won’t automatically be rejected by a bot!.",
  },
];

const faqs = [
  {
    title: "Do I need different resume for every different job application?",
    description:
      "Every time you apply for a new job, you should make sure the resume speaks directly to the job description. That means, your resume may not need to be entirely different, but you’ll likely want to make at least a few minor updates. If you’re applying for a different type of job, you may want a completely different resume, from the content all the way to the format. With all the different templates to choose from, take advantage of our resume builder and create a variety of resumes to fit both your personality and your different job applications.",
  },
  {
    title: "How do I choose the right resume template?",
    description:
      "Choosing the right resume template mostly comes down to personal preference. Granted, if you’re applying for a job in finance, you may not want an abstract-leaning format like a graphic designer may use. So, as you browse through all the resume templates while you build your resume, think about what potential employers may expect to see, then pick the resume that fits both your personality and career goals.",
  },
  {
    title:
      "Free resume builder doesn't usually mean free. Does CVly sell my information?",
    description:
      "Absolutely not. Our resume builder is completely free. From creating an account to uploading your resume to downloading and printing, you’ll never pay a dime. Your information is all secure and we will not sell to anyone.",
  },
  {
    title: "What does ATS-Friendly mean?",
    description:
      "ATS stands for Applicant Tracking System. An ATS is generally used by employers to process resumes. Most likely, when you’ve applied for jobs, they’ve asked you to upload a resume that you then have to painstakingly update. ATS-friendly means our resumes are ready to go through an ATS correctly so you don’t have to worry about reuploading all the same information.",
  },
];

export default function Landing() {
  return (
    <div className="bg-neutral-100 text-blue-950 ">
      {/* HEADER */}

      <header className="flex items-center justify-between w-full bg-[rgba(255,255,255,0.5)] backdrop-blur-[6px] py-4 px-16 mb-12  fixed top-0 z-50 border-b border-solid border-[rgba(255, 255, 255, 0.18)]">
        <p className="font-bold text-xl">CVly</p>
        <nav className="flex items-center justify-between gap-6 ">
          <Link className="cursor-pointer" href={"/#faq"}>
            FAQ
          </Link>
          <Link className="cursor-pointer" href={"/#contact"}>
            Contact
          </Link>
          <Link className="cursor-pointer" href={"/create"}>
            <Button>Get Started</Button>
          </Link>
        </nav>
      </header>

      {/* HERO SECTION */}
      <section
        className={`relative flex items-center justify-between px-16 pt-16 `}
      >
        <img
          className="absolute object-contain w-[100%] -top-[70%] -left-[40%] z-10 opacity-40 "
          src="/assets/hero-bg.svg"
          alt=""
        />
        <img
          className="absolute object-contain w-[100%] -top-[90%] -right-[40%] z-10 opacity-50 "
          src="/assets/hero-bg.svg"
          alt=""
        />
        <div className={`w-[50%] text-left -mt-20 z-20`}>
          <p className="w-fit text-sm font-semibold opacity-70 mb-4">
            ONLINE RESUME BUILDER
          </p>
          <h2 className=" text-4xl w-fit font-bold mb-4">
            Create Your Perfect Resume Today
          </h2>
          <p className="text-lg font-semibold w-[80%]  opacity-90 mb-8">
            Only 2% of resumes make it past the first round. Be in the top 2%
          </p>
          <Button className="font-semibold text-lg px-10 py-6 transition-all shadow-md ">
            Create my resume
          </Button>
        </div>
        <img
          className={`z-20 w-[50%] object-cover scale-110 mt-8`}
          src={"/assets/hero2.svg"}
          alt=""
        />
      </section>

      {/* <div className="flex items-start justify-between mb-24 ">
        <hr className="w-[40%] opacity-50 m-auto bg-black h-[1px] mb-16" />
        <IoIosArrowRoundDown
          className="opacity-50 -mt-2"
          size={32}
          color="black"
        />
        <hr className="w-[40%] opacity-50 m-auto bg-black h-[1px] mb-16" />
      </div> */}

      {/* FEATURES */}
      {/* <main className="bg-[url('/assets/feature-bg.svg')] bg-cover "> */}
      <main className="bg-blue-900 py-24 mb-24 relative">
        <div className="triangle-1"></div>
        <h1 className="text-center text-3xl font-bold mb-4 w-[50%] m-auto text-white">
          Features designed to help you win your dream job
        </h1>
        <div className="h-[7px] m-auto rounded-xl bg-cyan-600 w-[50px] mb-12" />
        <section className="grid grid-cols-3 gap-2 m-auto justify-items-center rounded-lg p-8 text-blue-950  w-[80%] shadow-sm bg-[rgba(255,255,255,1)] backdrop-blur-[4px] border-solid border-[rgba(255, 255, 255, 0.5)]">
          {features.map((feature, i) => (
            <Feature
              description={feature.description}
              icon={feature.icon}
              title={feature.title}
              key={i}
            />
          ))}
        </section>
        <div className="triangle-2"></div>
      </main>

      {/* HOW IT WORKS */}
      <h1 className="text-center text-3xl font-bold mb-2 w-[50%] m-auto">
        Build Your Resume Fast and Easy
      </h1>
      <div className="h-[7px] m-auto rounded-xl bg-pink-600 w-[50px] mb-6" />
      <p className=" text-center w-[70%] m-auto mb-24 text-lg">
        CVly is lightning fast. There is no software to download. No multi-part
        sign-up form. No long-winded tutorials. Just a straightforward process.
      </p>
      <section className="flex flex-col gap-4 w-[70%] m-auto mb-24">
        {/* step 1 */}
        <main className={`flex items-center justify-between`}>
          <div className="flex flex-col items-end  w-[50%] gap-8">
            <h1 className="bg-pink-600 text-white rounded-md flex items-center justify-center text-5xl font-bold w-[96px] h-[96px]">
              1
            </h1>
            <div className="bg-neutral-200 p-8 rounded-md">
              <h4 className="text-lg font-bold mb-4">Fill in the Blanks</h4>
              <p>
                Fill in your resume information, let our AI content analyzer do
                its job, and see your resume changes dynamically in real time.
              </p>
            </div>
          </div>
          <img className="w-[70%]" src="/assets/step1.svg" alt="" />
        </main>
        {/* step 2 */}
        <main className={`flex flex-row-reverse items-center justify-between`}>
          <div className="flex flex-col items-start  w-[50%] gap-8">
            <h1 className="bg-cyan-600 text-white rounded-md flex items-center justify-center text-5xl font-bold w-[96px] h-[96px]">
              2
            </h1>
            <div className="bg-neutral-200 p-8 rounded-md">
              <h4 className="text-lg font-bold mb-4">Pick a Template</h4>
              <p>
                Do not sabotage your job search before it has even begun. Choose
                from our ATS-friendly, hand-crafted resume templates
              </p>
            </div>
          </div>
          <img className="w-[70%]" src="/assets/step2.svg" alt="" />
        </main>
        {/* step 4 */}
        <main className={`flex items-center justify-between -mt-12`}>
          <div className="flex flex-col items-end  w-[50%] gap-8">
            <h1 className="bg-pink-600 text-white rounded-md flex items-center justify-center text-5xl font-bold w-[96px] h-[96px]">
              3
            </h1>
            <div className="bg-neutral-200 p-8 rounded-md">
              <h4 className="text-lg font-bold mb-4">Hit Download!</h4>
              <p>
                And yes, it is free! We do not hit you with a paywall once you
                have completed your resume in the Basic Account. If you use any
                of our premium features, the software will let you know about
                it.
              </p>
            </div>
          </div>
          <img className="w-[70%]" src="/assets/step3.svg" alt="" />
        </main>
      </section>

      {/* SECONDARY CALL TO ACTION */}
      <section className="bg-gradient-to-r from-blue-600 to-blue-900 w-[90%] flex items-center justify-between m-auto rounded-xl px-16 shadow-lg mb-32">
        <div>
          <h1 className="text-3xl max-w-[70%] font-bold text-white mb-6">
            Start building your resume today, land your dream job tomorrow
          </h1>
          <Button className="bg-white text-black font-semibold text-md px-8 py-6">
            Create my resume
          </Button>
        </div>
        <img
          className="w-[350px] animate-float"
          src="/assets/document-stack.png"
          alt=""
        />
      </section>

      {/* FAQ */}
      <main
        id="faq"
        className="flex items-start justify-between m-auto w-[80%] mb-24"
      >
        <div>
          <h1 className="text-left text-3xl font-bold mb-4 ">
            Frequently asked questions
          </h1>
          <div className="h-[7px] mr-auto rounded-xl bg-cyan-600 w-[50px] mb-6" />
        </div>
        <section className="flex flex-col w-[70%] gap-8">
          {faqs.map((faq, i) => (
            <Accordion
              description={faq.description}
              title={faq.title}
              key={i}
            />
          ))}
        </section>
      </main>

      {/* Footer */}
      <section className="bg-blue-950 text-white p-16 ">
        <main className="grid grid-cols-3">
          <div>
            <h1 className="text-xl mb-4 font-semibold">Job Seekers</h1>
            <div className="flex flex-col ">
              <Link className="cursor-pointer" href={"/create"}>
                Build a resume
              </Link>
              <Link className="cursor-pointer" href={"/create"}>
                Samples
              </Link>
            </div>
          </div>
          <div>
            <h1 className="text-xl mb-4 font-semibold">Need Help?</h1>
            <div className="flex flex-col ">
              <Link className="cursor-pointer" href={"/#faq"}>
                FAQ
              </Link>
              <Link className="cursor-pointer" href={"/"}>
                Contact Us
              </Link>
              <Link className="cursor-pointer" href={"/"}>
                About Us
              </Link>
            </div>
          </div>
          <div>
            <h1 className="text-xl mb-4 font-semibold">Stay Connected</h1>
            <div className="flex items-center gap-4">
              <Link
                className="cursor-pointer"
                target="_blank"
                href={"https://www.linkedin.com/in/abrar-shahriar-kabir/"}
              >
                <FaLinkedin size={30} />
              </Link>
              <Link
                className="cursor-pointer"
                target="_blank"
                href={"https://github.com/AbrarShahriar"}
              >
                <FaGithubSquare size={30} />
              </Link>
              <Link
                className="cursor-pointer"
                target="_blank"
                href={"https://www.facebook.com/abrar.shahriar.kabir/"}
              >
                <FaFacebookSquare size={30} />
              </Link>
              <Link
                className="cursor-pointer"
                target="_blank"
                href={"https://www.instagram.com/abrar_shahr1ar/"}
              >
                <FaInstagramSquare size={30} />
              </Link>
            </div>
          </div>
        </main>
      </section>
      <p className="text-center bg-blue-950 text-sm text-white pb-4">
        Copyright © Abrar Shahriar 2024
      </p>
    </div>
  );
}
