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
import { EducationType, WorkExperienceType } from "@/types";
import { Input } from "./ui/input";
import { Label } from "./ui/label";
import { Button } from "./ui/button";

interface WorkExperienceProps {
  education: EducationType;
  setEducations: any;
  index: number;
}

export default function Education({
  education,
  setEducations,
  index,
  ...props
}: WorkExperienceProps) {
  const handleChange = (e: any, type: keyof EducationType) => {
    const newValue = ["startDate", "endDate", "description"].includes(type)
      ? e
      : e.target.value;
    setEducations((prevEducations: WorkExperienceType[]) =>
      prevEducations.map((ed) =>
        ed.id === education.id ? { ...ed, [type]: newValue } : ed
      )
    );
  };

  const handleDelete = (e: any) => {
    e.preventDefault();
    console.log(education.id);

    setEducations((prevEducations: WorkExperienceType[]) =>
      prevEducations.filter((ed) => ed.id !== education.id)
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
          <CardTitle>Education {index + 1}</CardTitle>
          <CardDescription>Please add correct information</CardDescription>
        </CardHeader>
        <CardContent className="flex flex-col gap-5">
          <div className="flex gap-4">
            <Input
              className="bg-neutral-200"
              defaultValue={education.school}
              label="School"
              onChange={(e) => handleChange(e, "school")}
            />
            <Input
              className="bg-neutral-200"
              defaultValue={education.degree}
              label="Degree"
              onChange={(e) => handleChange(e, "degree")}
            />
          </div>
          <div className="flex gap-4">
            <div className="flex flex-col max-w-[50%] w-full">
              <Label className="text-sm font-medium leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70 mb-2">
                Start & End Date
              </Label>
              <div className="flex gap-4 w-full items-end justify-between ">
                <DatePicker
                  date={new Date(education.startDate)}
                  onChange={(e) => handleChange(e, "startDate")}
                  callback={(date) => handleChange(date, "startDate")}
                />
                <DatePicker
                  date={
                    education.endDate == "Present"
                      ? "Present"
                      : new Date(education.endDate)
                  }
                  callback={(date) => handleChange(date, "endDate")}
                  disabler
                  disablerLabel="Present"
                  disablerDefault={false}
                />
              </div>
            </div>

            <Input
              className="bg-neutral-200 w-full "
              defaultValue={education.location}
              label="Location"
              onChange={(e) => handleChange(e, "location")}
            />
          </div>

          <Tiptap
            callback={(descHTML) => handleChange(descHTML, "description")}
            label="Description"
            placeholder="Highlight your major, degree, and key accomplishments"
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
