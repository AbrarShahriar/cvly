"use client";

import Info from "@/components/layout/info";
import Templates from "@/components/layout/templates";
import React from "react";

export default function Home() {
  return (
    <div>
      <h1 className="text-white text-4xl text-center font-bold mt-32 mb-8">
        Start Creating
      </h1>
      <Info />
      <h1 className="text-white text-4xl text-center font-bold mb-8">
        Choose A Template
      </h1>
      <Templates />
    </div>
  );
}
