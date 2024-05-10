"use client";

import { BtnList } from "@/data";
import React from "react";
import NavButton from "./NavButton";
import { motion } from "framer-motion";

const container = {
  hidden: { opacity: 0 },
  show: {
    opacity: 1,
    transition: {
      staggerChildren: 0.3,
    },
  },
};

function Navigation() {
  const angleIncrement = 360 / BtnList.length;
  return (
    <div className="fixed h-screen flex items-center justify-center w-full">
      <motion.div
        variants={container}
        initial="hidden"
        animate="show"
        className="w-max flex items-center justify-center relative hover:pause animate-spin-slow group"
      >
        {BtnList.map((btn, index) => {
          const angleRad = (index * angleIncrement * Math.PI) / 180;
          const radius = "calc(20vw - 1rem)";

          const x = `calc(${radius}*${Math.cos(angleRad)})`;
          const y = `calc(${radius}*${Math.sin(angleRad)})`;

          return <NavButton key={btn.label} x={x} y={y} {...btn} />;
        })}
      </motion.div>
    </div>
  );
}

export default Navigation;
