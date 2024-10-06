"use client";

import React from "react";
import { SocialLink } from "@/types";
import { RiDeleteBinLine } from "react-icons/ri";
import { Button } from "./ui/button";
import { Input } from "./ui/input";

interface SocialLinkProps {
  socialLink: SocialLink;
  setSocialLinks: any;
  socialLinks: SocialLink[];
}

export default function SocialLinkComp({
  setSocialLinks,
  socialLink,
}: SocialLinkProps) {
  const handleChange = (e: any, type: keyof SocialLink) => {
    setSocialLinks((prevLinks: SocialLink[]) =>
      prevLinks.map((link) =>
        link.id === socialLink.id
          ? { ...socialLink, [type]: e.target.value }
          : link
      )
    );
  };

  const handleSocialLinkDelete = (e: any) => {
    e.preventDefault();
    console.log(socialLink.id);

    setSocialLinks((prevLinks: SocialLink[]) =>
      prevLinks.filter((link) => link.id !== socialLink.id)
    );
  };

  return (
    <div className="flex gap-4 items-center">
      <Input
        defaultValue={socialLink.title}
        placeholder="Title"
        type="text"
        onChange={(e) => handleChange(e, "title")}
      />
      <Input
        defaultValue={socialLink.link}
        placeholder="Link"
        type="url"
        onChange={(e) => handleChange(e, "link")}
      />
      <Button variant="ghost" onClick={(e) => handleSocialLinkDelete(e)}>
        <RiDeleteBinLine className="text-red-600" size={22} />
      </Button>
    </div>
  );
}
