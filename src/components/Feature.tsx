import { ReactElement } from "react";

interface FeatureProps {
  icon: ReactElement;
  title: string;
  description: string;
}
export default function Feature({ description, icon, title }: FeatureProps) {
  return (
    <div className="flex items-start w-fit gap-4 rounded-md ">
      <div className="text-white bg-blue-800 rounded-full p-2 flex items-center justify-center">
        {icon}
      </div>
      <div>
        <h3 className="font-semibold w-fit text-lg">{title}</h3>
        <p className="w-[300px]">{description}</p>
      </div>
    </div>
  );
}
