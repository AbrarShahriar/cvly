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
import { EducationType, WorkExperienceType } from "@/types";
import { Input } from "./ui/input";
import { Label } from "./ui/label";
import { Button } from "./ui/button";
import { parseDate } from "@/lib/utils";
import { DateTimePicker } from "./ui/datetimepicker";

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
        ed.id === education.id ? { ...education, [type]: newValue } : ed
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
          <CardTitle>
            {!education.degree || !education.school
              ? "Unspecified"
              : `Studying ${education.degree} from ${education.school}`}
          </CardTitle>
          <CardDescription>
            From {parseDate(education.startDate)} to{" "}
            {parseDate(education.endDate)}
          </CardDescription>
        </CardHeader>
        <CardContent className="flex flex-col gap-5">
          <div className="flex gap-4 max-md:flex-col">
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
          <div className="flex gap-4 max-md:flex-col">
            <div className="flex flex-col max-w-[50%] w-full max-md:max-w-full">
              <Label className="text-sm font-medium leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70 mb-2">
                Start & End Date
              </Label>
              <div className="flex gap-4 w-full items-end justify-between max-md:flex-col">
                <DateTimePicker
                  granularity="day"
                  value={new Date(education.startDate)}
                  callback={(date) => handleChange(date, "startDate")}
                />
                <DateTimePicker
                  showPresentCheckbox={true}
                  granularity="day"
                  value={new Date(education.endDate)}
                  callback={(date) => handleChange(date, "endDate")}
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
            defaultValue={education.description}
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
