import { ReactElement } from "react";

interface FeatureProps {
  icon: ReactElement;
  title: string;
  description: string;
}
export default function Feature({ description, icon, title }: FeatureProps) {
  return (
    <div className="flex flex-col items-start w-fit gap-4 p-4 rounded-lg group max-sm:text-center">
      <div className="text-white border-2 border-transparent bg-blue-600 rounded-full p-2 flex items-center justify-center group-hover:border-blue-600 group-hover:bg-transparent group-hover:text-blue-500 transition-colors shadow-sm max-sm:m-auto">
        {icon}
      </div>
      <div>
        <h3 className="font-semibold w-fit text-lg mb-2 max-sm:w-full">
          {title}
        </h3>
        <p className="w-[300px]">{description}</p>
      </div>
    </div>
  );
}
