"use client";
import React from "react";
import DarkVeil from "./DarkVeil";

const Background = () => {
  return (
    <div
      className="fixed inset-0 -z-10 overflow-hidden pointer-events-none"
      aria-hidden="true"
    >
      <DarkVeil />
    </div>
  );
};

export default Background;
