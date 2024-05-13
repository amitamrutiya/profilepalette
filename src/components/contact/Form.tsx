"use client";
import React, { useState } from "react";
import emailjs from "@emailjs/browser";
import { Toaster, toast } from "sonner";
import { motion } from "framer-motion";

const container = {
  hidden: { opacity: 0 },
  show: {
    opacity: 1,
    transition: {
      staggerChildren: 0.3,
      delayChildren: 0.2,
    },
  },
};

const item = {
  hidden: { scale: 0 },
  show: { scale: 1 },
};

export default function Form() {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [message, setMessage] = useState("");
  const [errors, setErrors] = useState({ message: "" });

  const sendEmail = (params: any) => {
    const toastId = toast.loading("Sending your message, please wait...");

    toast.info(
      "Form submissions are demo-only here. Please checkout the final code repo to enable it. If you want to connect you can reach out to me via codebucks27@gmail.com.",
      {
        id: toastId,
      }
    );
  };

  const onSubmit = (data: any) => {
    event!.preventDefault();
    
    if (!name || !email || !message) {
      setErrors({ message: "Please fill all the fields" });
      return;
    }

    if (message.length < 50) {
      setErrors({ message: "Message should be more than 50 characters" });
      return;
    }

    if (message.length > 500) {
      setErrors({ message: "Message should be less than 500 characters" });
      return;
    }

    const templateParams = {
      to_name: "CodeBucks",
      from_name: data.name,
      reply_to: data.email,
      message: data.message,
    };

    sendEmail(templateParams);
  };

  return (
    <>
      <Toaster richColors={true} />
      <motion.form
        variants={container}
        initial="hidden"
        animate="show"
        onSubmit={onSubmit}
        className="max-w-md w-full flex flex-col items-center justify-center space-y-4"
      >
        <motion.input
          variants={item}
          type="text"
          placeholder="name"
          value={name}
          onChange={(e) => setName(e.target.value)}
          className="w-full p-2 rounded-md shadow-lg text-foreground focus:outline-none focus:ring-2 focus:ring-accent/50 custom-bg"
        />
        <motion.input
          variants={item}
          type="email"
          placeholder="email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          className="w-full p-2 rounded-md shadow-lg text-foreground focus:outline-none focus:ring-2 focus:ring-accent/50 custom-bg"
        />
        <motion.textarea
          variants={item}
          placeholder="message"
          onChange={(e) => setMessage(e.target.value)}
          className="w-full p-2 rounded-md shadow-lg text-foreground focus:outline-none focus:ring-2 focus:ring-accent/50 custom-bg"
        />
        {errors && (
          <span className="inline-block self-start text-accent">
            {errors.message}
          </span>
        )}

        <motion.input
          variants={item}
          value="Cast your message!"
          className="px-10 py-4 rounded-md shadow-lg bg-background border border-accent/30 border-solid
      hover:shadow-glass-sm backdrop-blur-sm text-foreground focus:outline-none focus:ring-2 focus:ring-accent/50 cursor-pointer capitalize
      "
          type="submit"
        />
      </motion.form>
    </>
  );
}
