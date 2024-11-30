"use client";

import React from "react";
import { useState } from "react";
import { motion, AnimatePresence } from "motion/react";
import { FaCirclePlus, FaCircleMinus } from "react-icons/fa6";
import { IoIosCheckmarkCircle } from "react-icons/io";
import { RxCrossCircled } from "react-icons/rx";
import { ImRadioUnchecked } from "react-icons/im";

function Node({ criteria, operator, description = "" }) {
  const [open, setOpen] = useState(false);
  return (
    <div className="mb-2">
      <div className="flex justify-start items-center gap-1">
        <button onClick={() => setOpen(!open)}>
          {open ? <FaCircleMinus size={20} /> : <FaCirclePlus size={20} />}
        </button>
        {description && <Description description={description} />}
      </div>
      <AnimatePresence>
        {open && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: "auto" }}
            exit={{ opacity: 0, height: 0 }}
            transition={{ duration: 0.3 }}
            className="overflow-hidden"
          >
            {criteria.map((c, i) => (
              <div className="ml-10" key={i}>
                {c.subcriteria.length > 0 ? (
                  <Node
                    criteria={c.subcriteria}
                    operator={c.subcriterion_logical_operator}
                    description={c.criterion_description}
                  />
                ) : (
                  <Description description={c.criterion_description} />
                )}
                {i < criteria.length - 1 ? (
                  <p className="text-sm font-bold">{operator.toUpperCase()}</p>
                ) : null}
              </div>
            ))}
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
}

function Description({ description }) {
  const [approved, setApproved] = useState("neutral");
  return (
    <div
      className={`relative text-lg font-medium w-fit max-w-5xl py-4 px-2 border my-2
            ${
              approved === "neutral"
                ? "border-gray-400 bg-gray-300"
                : approved === "yes"
                ? "border-green-400 bg-green-300"
                : "border-red-500 bg-red-300"
            } rounded-md`}
    >
      {description}
      <div className="absolute right-[-25px] top-0 flex flex-col justify-center items-center">
        <button onClick={() => setApproved("neutral")}>
          <ImRadioUnchecked className="text-gray-400" size={20} />
        </button>
        <button onClick={() => setApproved("yes")}>
          <IoIosCheckmarkCircle className="text-green-400" size={20} />
        </button>
        <button onClick={() => setApproved("no")}>
          <RxCrossCircled className="text-red-500" size={20} />
        </button>
      </div>
    </div>
  );
}

export default Node;
