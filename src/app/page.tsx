import Feature from "@/components/Feature";
import { Button } from "@/components/ui/button";
import Link from "next/link";
import React from "react";
import { HiLightningBolt } from "react-icons/hi";
import { TbPigMoney } from "react-icons/tb";
import { BsFillShieldLockFill } from "react-icons/bs";
import { PiFilesFill } from "react-icons/pi";
import { LiaUserSecretSolid } from "react-icons/lia";
import { MdOutlineDocumentScanner } from "react-icons/md";
import { IoIosArrowRoundDown } from "react-icons/io";

const otr = "outline outline-black";

const ICON_SIZE = 24;

const features = [
  {
    icon: <HiLightningBolt size={ICON_SIZE} />,
    title: "Edit Your Resume in Real Time",
    description:
      "As you edit your resume with our builder, you’ll see the changes applied to your document.",
  },
  {
    icon: <TbPigMoney size={ICON_SIZE} />,
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
    icon: <LiaUserSecretSolid size={ICON_SIZE} />,
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

export default function Landing() {
  return (
    <div className="bg-neutral-100 text-blue-950 pb-96">
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
          <Button className="font-semibold text-lg px-10 py-6 transition-all shadow-md shadow-black ">
            Create my resume
          </Button>
        </div>
        <img
          className={`z-20 w-[50%] object-cover scale-110 mt-8`}
          src={"/assets/hero2.svg"}
          alt=""
        />
      </section>

      <div className="flex items-start justify-between mb-24">
        <hr className="w-[40%] opacity-50 m-auto bg-black h-[1px] mb-16" />
        <IoIosArrowRoundDown
          className="opacity-50 -mt-2"
          size={32}
          color="black"
        />
        <hr className="w-[40%] opacity-50 m-auto bg-black h-[1px] mb-16" />
      </div>

      {/* FEATURES */}
      <h1 className="text-center text-3xl font-bold mb-4 w-[50%] m-auto">
        Features designed to help you win your dream job
      </h1>
      <div className="h-[7px] m-auto rounded-xl bg-cyan-600 w-[50px] mb-12" />
      <section className="grid grid-cols-2 gap-16 m-auto justify-items-center rounded-lg p-12 bg-slate-200 mb-24 w-[70%] shadow-md">
        {features.map((feature, i) => (
          <Feature
            description={feature.description}
            icon={feature.icon}
            title={feature.title}
            key={i}
          />
        ))}
      </section>

      {/* HOW IT WORKS */}
      <h1 className="text-center text-3xl font-bold mb-2 w-[50%] m-auto">
        Build Your Resume Fast and Easy
      </h1>
      <div className="h-[7px] m-auto rounded-xl bg-pink-600 w-[50px] mb-6" />
      <p className=" text-center w-[70%] m-auto mb-24 text-lg">
        CVly is lightning fast. There's no software to download. No multi-part
        sign-up form. No long-winded tutorials. Just a straightforward process.
      </p>
      <section className="flex flex-col gap-4 w-[70%] m-auto">
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
                Don't sabotage your job search before it has even begun. Choose
                from our ATS-friendly, hand-crafted resume templates
              </p>
            </div>
          </div>
          <img className="w-[70%]" src="/assets/step2.svg" alt="" />
        </main>
        {/* step 4 */}
        <main className={`flex items-center justify-between`}>
          <div className="flex flex-col items-end  w-[50%] gap-8">
            <h1 className="bg-pink-600 text-white rounded-md flex items-center justify-center text-5xl font-bold w-[96px] h-[96px]">
              3
            </h1>
            <div className="bg-neutral-200 p-8 rounded-md">
              <h4 className="text-lg font-bold mb-4">Hit 'Download!'</h4>
              <p>
                And yes, it's free! We don't hit you with a paywall once you've
                completed your resume in the Basic Account. If you use any of
                our premium features, the software will let you know about it.
              </p>
            </div>
          </div>
          <img className="w-[70%]" src="/assets/step3.svg" alt="" />
        </main>
      </section>
    </div>
  );
}
