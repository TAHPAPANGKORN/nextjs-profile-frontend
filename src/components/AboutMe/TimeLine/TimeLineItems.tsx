'use client';
import { motion } from "framer-motion";

// import { SplittingText } from "@/components/textAnimations/splitting-text";
import { TimelineItemProps } from "@/components/AboutMe/TimeLine/types";

export const TimelineItem = ({
  title,
  date,
  description,
  variants,
}: TimelineItemProps) => {
  return (
    <motion.li className="mb-10 relative pl-6" variants={variants}>
      <span className="absolute left-0 top-1 bg-blue-500 rounded-full w-4 h-4 border-2 border-blue-500 z-10" />
      <h4 className="text-lg font-semibold">{title}</h4>
      <time className="block mb-1 text-sm text-blue-500">{date}</time>
      <p>{description}</p>
    </motion.li>

  );
};