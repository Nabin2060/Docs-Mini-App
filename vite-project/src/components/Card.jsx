import React from "react";

import { FaFileAlt } from "react-icons/fa";
import { LuDownload } from "react-icons/lu";
import { IoIosCloseCircle } from "react-icons/io";
import { motion } from "framer-motion";

const Card = ({ data, reference }) => {
  return (
    <motion.div
      drag
      dragConstraints={reference}
      whileDrag={{ scale: 1.3 }}
      className="relative w-60 h-72 rounded-[50px] bg-zinc-900/90 text-white p-8 overflow-hidden"
    >
      <FaFileAlt />
      <p className="text-sm leading-tight mt-5 font-semibold">
        Lorem ipsum dolor sit amet, consectetur adipisicing elit. Blanditiis,
        harum?
      </p>

      <div className="footer absolute bottom-0  w-full left-0">
        <div className="flex items-center justify-between px-8 py-3 mb-5">
          <h5>{data.filesize}.4mb</h5>
          <span className="w-7 h-7 bg-zinc-600 rounded-full flex items-center justify-center">
            {data.close ? (
              <IoIosCloseCircle size="1.5em" />
            ) : (
              <LuDownload size="1.2em" color="#fff" />
            )}
          </span>
        </div>
        {data.tag.isOpen && (
          <div
            className={`tag w-full py-4 ${
              data.tag.tagColor === "blue" ? "bg-blue-600" : "bg-green-600"
            } flex items-center justify-center`}
          >
            <h3 className="text-sm font-semibold">{data.tag.tagTitle}</h3>
          </div>
        )}
      </div>
    </motion.div>
  );
};

export default Card;
