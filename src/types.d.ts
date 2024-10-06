export type SocialLink = {
  id: string;
  title: string;
  link: string;
};

export type WorkExperienceType = {
  id: string;
  position: string;
  employer: string;
  location: string;
  startDate: string;
  endDate: string | "Present";
  description: string;
};

export type EducationType = {
  id: string;
  school: string;
  degree: string;
  location: string;
  startDate: string;
  endDate: string | "Present";
  description: string;
};

export type TemplateType = {
  name: string;
  selected: boolean;
};
