import React from "react";
import Tiptap from "./Tiptap";
import {
  Card,
  CardHeader,
  CardTitle,
  CardDescription,
  CardContent,
  CardFooter,
} from "./ui/card";
import { DatePicker } from "./ui/datepicker";
import { WorkExperienceType } from "@/types";
import { Input } from "./ui/input";
import { Label } from "./ui/label";
import { Button } from "./ui/button";

interface WorkExperienceProps {
  workExperience: WorkExperienceType;
  setWorkExperiences: any;
  index: number;
}

export default function WorkExperience({
  workExperience,
  setWorkExperiences,
  index,
  ...props
}: WorkExperienceProps) {
  const handleChange = (e: any, type: keyof WorkExperienceType) => {
    const newValue: any = ["startDate", "endDate", "description"].includes(type)
      ? e
      : e.target.value;
    setWorkExperiences((prevExperiences: WorkExperienceType[]) =>
      prevExperiences.map((experience) =>
        experience.id === workExperience.id
          ? { ...workExperience, [type]: newValue }
          : experience
      )
    );
  };

  const handleDelete = (e: any) => {
    e.preventDefault();
    console.log(workExperience.id);

    setWorkExperiences((prevExperiences: WorkExperienceType[]) =>
      prevExperiences.filter(
        (experience) => experience.id !== workExperience.id
      )
    );
  };

  return (
    <div className="flex gap-4 items-center w-full">
      <Card className="bg-neutral-100 rounded-md w-full outline-1 outline-dashed outline-slate-700">
        <CardHeader>
          {/* <CardTitle>
            {!workExperience.position || !workExperience.employer
              ? "Unspecified"
              : `${workExperience.position} at ${workExperience.employer}`}
          </CardTitle>
          <CardDescription>
            From {workExperience.date.start.toDateString()} to{" "}
            {workExperience.date.end.toDateString()}
          </CardDescription> */}
          <CardTitle>Job {index + 1}</CardTitle>
          <CardDescription>Please add correct information</CardDescription>
        </CardHeader>
        <CardContent className="flex flex-col gap-5">
          <div className="flex gap-4">
            <Input
              className="bg-neutral-200"
              defaultValue={workExperience.position}
              label="Position"
              onChange={(e) => handleChange(e, "position")}
            />
            <Input
              className="bg-neutral-200"
              defaultValue={workExperience.employer}
              label="Employer"
              onChange={(e) => handleChange(e, "employer")}
            />
          </div>
          <div className="flex gap-4">
            <div className="flex flex-col max-w-[50%] w-full">
              <Label className="text-sm font-medium leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70 mb-2">
                Start & End Date
              </Label>
              <div className="flex gap-4 w-full items-end justify-between ">
                <DatePicker
                  date={new Date(workExperience.startDate)}
                  callback={(date) => handleChange(date, "startDate")}
                />
                <DatePicker
                  date={
                    workExperience.endDate == "Present"
                      ? "Present"
                      : new Date(workExperience.endDate)
                  }
                  disabler
                  disablerLabel="Present"
                  callback={(date) => handleChange(date, "endDate")}
                  disablerDefault={false}
                />
              </div>
            </div>

            <Input
              className="bg-neutral-200 w-full "
              defaultValue={workExperience.location}
              label="Location"
              onChange={(e) => handleChange(e, "location")}
            />
          </div>

          <Tiptap
            callback={(htmlVal) => handleChange(htmlVal, "description")}
            label="Description"
            placeholder="Describe your role and achievements"
          />
        </CardContent>
        <CardFooter>
          <Button
            onClick={(e) => handleDelete(e)}
            className="ml-auto"
            variant="destructive"
          >
            Delete
          </Button>
        </CardFooter>
      </Card>
    </div>
  );
}
