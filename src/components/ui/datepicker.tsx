"use client";

import * as React from "react";
import { CalendarIcon } from "@radix-ui/react-icons";
import { format } from "date-fns";

import { cn } from "@/lib/utils";
import { Button } from "@/components/ui/button";
import { Calendar } from "@/components/ui/calendar";
import {
  Popover,
  PopoverContent,
  PopoverTrigger,
} from "@/components/ui/popover";
import { Label } from "@radix-ui/react-label";
import { Switch } from "./switch";

interface DatePickerProps extends React.InputHTMLAttributes<HTMLInputElement> {
  date: Date | "Present";
  disabler?: boolean;
  disablerLabel?: string;
  disablerDefault?: boolean;
  callback: (newVal: string | "Present") => void;
}

export function DatePicker({
  date,
  disabler = false,
  disablerLabel = "",
  disablerDefault = false,
  callback,
  ...props
}: DatePickerProps) {
  const [dateState, setDateState] = React.useState<Date>(
    date == "Present" ? new Date() : new Date(date)
  );
  const [disablerState, setDisablerState] = React.useState<boolean>(
    date == "Present" ? true : disablerDefault
  );

  const handleChecked = (val: boolean) => {
    setDisablerState(val);
    if (val) {
      callback("Present");
    }
  };

  return (
    <Popover {...props}>
      <PopoverTrigger asChild>
        <Button
          variant={"outline"}
          className={cn(
            "w-full justify-start text-left font-normal text-sm py-5 px-2 bg-neutral-200 hover:bg-neutral-300",
            !dateState && "text-muted-foreground"
          )}
        >
          <CalendarIcon className="mr-2 h-4 w-4" />
          {disabler && disablerState ? (
            "Present"
          ) : dateState ? (
            format(dateState, "PPP")
          ) : (
            <span>Present</span>
          )}
        </Button>
      </PopoverTrigger>
      <PopoverContent
        className="w-auto p-0 bg-neutral-100 outline-1 outline-double outline-slate-400"
        align="start"
      >
        <Calendar
          disabled={disablerState}
          mode="single"
          selected={dateState}
          onSelect={(value: any) => {
            setDateState(value);
            callback((value as Date).toDateString());
          }}
          initialFocus
        />
        {disabler && (
          <div className="flex items-cente space-x-3 ml-3 mb-3">
            <Switch
              id="working-here"
              checked={disablerState}
              onCheckedChange={handleChecked}
            />
            <Label htmlFor="working-here">Present</Label>
          </div>
        )}
      </PopoverContent>
    </Popover>
  );
}
