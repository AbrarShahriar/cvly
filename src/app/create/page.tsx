"use client";

import Info from "@/components/layout/info";
import Templates from "@/components/layout/templates";
import React from "react";

export default function Home() {
  return (
    <div>
      <Info />
      <h1 className="text-white text-4xl text-center font-bold">
        Choose A Template
      </h1>
      <Templates />
    </div>
  );
}
