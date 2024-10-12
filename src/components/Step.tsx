import React from "react";

interface StepProps {
  title: string;
  description: string;
  imgSrc: string;
  stepNumber: number;
}

export default function Step({
  description,
  imgSrc,
  title,
  stepNumber,
}: StepProps) {
  return (
    <main
      className={`flex ${
        stepNumber % 2 != 0 && "flex-row-reverse"
      } items-center justify-between  max-md:flex-col-reverse`}
    >
      <div
        className={`flex flex-col ${
          stepNumber % 2 != 0 ? "items-start" : "items-end"
        }  w-[50%] gap-8 max-md:w-[90%]`}
      >
        <h1
          className={`${
            stepNumber % 2 != 0 ? "bg-cyan-600 " : "bg-pink-600"
          } text-white rounded-md flex items-center justify-center text-5xl font-bold w-[96px] h-[96px]`}
        >
          {stepNumber + 1}
        </h1>
        <div className="bg-neutral-200 p-8 rounded-md">
          <h4 className="text-lg font-bold mb-4">{title}</h4>
          <p>{description}</p>
        </div>
      </div>
      <img className="w-[70%] max-md:w-full" src={imgSrc} alt="" />
    </main>
  );
}
