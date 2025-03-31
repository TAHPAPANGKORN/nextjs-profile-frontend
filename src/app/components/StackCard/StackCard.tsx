"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { IoIosArrowForward } from "react-icons/io";

const cards = [
  {
    id: 1,
    title: "MY INFO",
    content: "Name: Papangkorn<br>SurName: Pitjawong<br>NickName: cheetah<br>Age: 19", // ใช้ <br> เพื่อเว้นบรรทัด
  },
  {
    id: 2,
    title: "STUDY CARER",
    content:
      "2020-2024: PSP. school com-sci<br>2024-current: Burapha U. com-sci major",
  },
  {
    id: 3,
    title: "MOTTO",
    content:
      "Empowering Possibilities Through Innovation",
  },
];




export const StackCards = () => {
  const [stack, setStack] = useState(cards);

  const handleRemove = (id: number) => {
    const newStack = [...stack];
    const cardToMove = newStack.find((card) => card.id === id);
    if (cardToMove) {
      newStack.splice(newStack.indexOf(cardToMove), 1);
      newStack.push(cardToMove);
      setStack(newStack);
    }
  };

  return (
    <div id="about" className="md:p-10 h-[100vh] z-0 scroll-mt-[40px] md:-scroll-mt-24  lg:scroll-mt-0">
      <div className="flex flex-col mt-50 justify-center items-center ">
        <h1 className="header-item mb-5">About</h1>
        <div className="relative  w-105 mx-10 md:w-130">
          <AnimatePresence>
            {stack.map((card, index) => (
              <motion.div
                key={card.id}
                layout // เพิ่ม layout เพื่อให้ Framer Motion จัดการ animation ของตำแหน่ง
                className="absolute ml-13 w-80 h-90 md:h-100 md:mx-0 md:w-full bg-white shadow-xl rounded-xl flex flex-col items-center  p-4 cursor-pointer"
                style={{ left: index * 5, zIndex: stack.length - index }}
                initial={{ scale: 0.8, opacity: 0, y: 50 }}
                animate={{ scale: 1, opacity: 1, y: 0 }}
                exit={{ scale: 0.8, opacity: 0, y: -50 }}
                transition={{ type: "spring", stiffness: 300, damping: 30 }}
                whileHover={{ scale: 1.05 }} // เพิ่ม animation ขยายเมื่อ hover
                whileTap={{ scale: 0.95 }} // เพิ่ม animation เมื่อกด
                onClick={() => handleRemove(card.id)}
              >
                <h2 className="text-xl font-bold">{card.title}</h2>
                <div>
                  <p
                    className="text-[12px] mt-5 md:text-2xl m-2 "
                    dangerouslySetInnerHTML={{ __html: card.content }}
                  />
                </div>
                <span className="absolute right-10  bottom-5 md:bottom-10 text-3xl cursor-pointer hover:text-black/30">
                  <IoIosArrowForward />
                </span>
              </motion.div>
            ))}
          </AnimatePresence>
        </div>
      </div>
    </div>
  );
}
export default StackCards

