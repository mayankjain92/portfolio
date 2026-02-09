"use client";
import React from "react";
import DarkVeil from "./DarkVeil";

const Background = () => {
  return (
    <div className="fixed inset-0 -z-10 overflow-hidden">
      <DarkVeil />
    </div>
  );
};

export default Background;
