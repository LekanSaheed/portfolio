import React from "react";
import "./Myself.css";
import { motion } from "framer-motion/dist/framer-motion";
import mypics from "../assets/mypics.jpeg";
import { useGlobalContext } from "./reducers/context";
const Myself = () => {
  const { nav } = useGlobalContext();
  const skills = [
    { skill: "Html", val: 90 },
    { skill: "Css", val: 68 },
    { skill: "Javascript", val: 64 },
    { skill: "React", val: 70 },
    { skill: "Node", val: 62 },
    { skill: "Photoshop", val: 77 },
    { skill: "Figma", val: 65 },
  ];
  const rightV = {
    hidden: {
      opacity: 0,
      x: -10,
    },
    visible: {
      opacity: 1,
      x: 0,
      transition: {
        delay: 0.4,
        duration: 0.5,
        type: "spring",
      },
    },
  };
  const leftV = {
    hidden: {
      opacity: 0,
      x: 10,
    },
    visible: {
      opacity: 1,
      x: 0,
      transition: {
        staggerChildren: 0.09,
      },
    },
  };

  return (
    <motion.div className="my_container">
      <motion.div
        initial="hidden"
        whileInView="visible"
        viewport={{ once: false }}
        variants={rightV}
        className="img-me"
      >
        {" "}
        <img src={mypics} alt="myself" />
        <br />
        <div className="about-me">
          <b>ME</b>
          <p>
            Self-Hyped inventor, passionate about solving problems through
            creativity.
          </p>
        </div>
      </motion.div>
      <motion.div
        initial="hidden"
        whileInView="visible"
        variants={leftV}
        viewport={{ once: false }}
        className="detail_container"
      >
        {skills.map((s, id) => {
          return (
            <div
              key={id}
              style={{
                display: "flex",

                marginBottom: "18px",
              }}
            >
              <motion.div
                whileInView="visible"
                variants={leftV}
                style={{
                  display: "flex",
                  background: "teal",
                  justifyContent: "center",
                  alignItems: "center",
                  padding: "0 20px",
                  fontSize: "13px",
                  fontWeight: "600",
                  color: "#fff",
                  boxShadow: "15px 0 14px -1px rgba(0 0 0 /17%)",
                  position: "relative",
                  zIndex: 1,
                }}
              >
                {s.skill}
              </motion.div>
              <motion.progress
                data-text={`${s.val}%`}
                whileInView="visible"
                variants={leftV}
                min={0}
                max={100}
                key={id}
                value={s.val}
              />
              <br />
            </div>
          );
        })}
      </motion.div>
    </motion.div>
  );
};

export default Myself;
