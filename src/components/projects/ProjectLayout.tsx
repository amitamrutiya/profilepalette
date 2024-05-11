import React, { useState } from "react";
import { ProjectListType } from "@/types";
import { motion } from "framer-motion";
import Link from "next/link";
import { ChevronDown, ChevronUp } from "lucide-react";

function ProjectLayout({
  name,
  subHeading,
  description,
  techStack,
  demoLink,
  sourceLink,
}: ProjectListType) {
  const [dropDown, SetDropDown] = useState(false);
  return (
    <div className="relative">
      <button
        onClick={() => SetDropDown(!dropDown)}
        className="text-sm md:text-base flex items-center justify-between w-full rounded-lg overflow-hidden p-4 md:p-6 custom-bg"
      >
        <div className="flex items-center justify-center space-x-2">
          <h2 className="text-foreground">{name}</h2>
          <p className="text-muted ">{subHeading}</p>
        </div>
        <div className="self-end flex-1 mx-2 mb-1 bg-transparent border-b border-dashed border-muted hidden sm:inline-block" />

        <span className="text-muted sm:text-foreground">
          {dropDown ? <ChevronUp /> : <ChevronDown />}
        </span>
      </button>
      <div
        className={`transition-all transform origin-top ${
          dropDown ? "scale-y-100" : "scale-y-0"
        } w-full mt-2 overflow-hidden text-sm md:text-base flex items-center justify-between rounded-lg p-4 md:p-6 custom-bg`}
      >
        <div className="p-4">
          <h3 className="font-bold text-lg mb-2">Description</h3>
          <p>{description}</p>
          <h3 className="font-bold mt-4 text-lg">Tech Stack</h3>
          <div className="flex flex-wrap gap-2">
            {techStack.map((tech, index) => (
              <span
                key={index}
                className="mt-2 inline-block bg-blue-500 text-white px-2 py-1 rounded-full text-xs font-bold"
              >
                {tech}
              </span>
            ))}
          </div>{" "}
          <div className="mt-6">
            <Link href={demoLink}>
              <span className="inline-block px-4 py-2 border border-blue-500 text-blue-500 rounded hover:bg-blue-500 hover:text-white transition-colors duration-200">
                Demo
              </span>
            </Link>
            <Link href={sourceLink}>
              <span className="ml-2 inline-block px-4 py-2 border border-blue-500 text-blue-500 rounded hover:bg-blue-500 hover:text-white transition-colors duration-200">
                Source Code
              </span>
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
}

export default ProjectLayout;
