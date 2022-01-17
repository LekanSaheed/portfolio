import React from "react";
import { useGlobalContext } from "./reducers/context";
import "./Services.css";
import { motion } from "framer-motion/dist/framer-motion";
const Services = () => {
  const { dark } = useGlobalContext();

  const cards = [
    {
      titleText: "Html",
      icons: "",
      text: "Nulla sint dolor nisi est sit laborum culpa nostrud ipsum.",
    },
    {
      titleText: "CSS",
      icons: "",
      text: "Nulla sint dolor nisi est sit laborum culpa nostrud ipsum.",
    },
    {
      titleText: "Javascript",
      icons: "",
      text: "Nulla sint dolor nisi est sit laborum culpa nostrud ipsum.",
    },
    {
      titleText: "React",
      icons: "",
      text: "Nulla sint dolor nisi est sit laborum culpa nostrud ipsum.",
    },
    {
      titleText: "Node js",
      icons: "",
      text: "Nulla sint dolor nisi est sit laborum culpa nostrud ipsum.",
    },
    {
      titleText: "Next js",
      icons: "",
      text: "Nulla sint dolor nisi est sit laborum culpa nostrud ipsum.",
    },
  ];
  const listVariant = {
    hidden: {
      opacity: 0,
      x: -100,
    },
    visible: {
      x: 0,
      opacity: 1,
    },
  };
  const boxVariant = {
    hidden: {
      opacity: 0,
    },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.13,
        // when: "beforeChildren",
      },
    },
  };
  return (
    <div
      id="toolbox"
      className={`service-container main-section ${
        dark ? "dark-service" : "light-service"
      }`}
    >
      <div style={{ marginTop: "20px" }} className="flex-column">
        <div className="flex-row">
          <div className="line"></div>
          <h1>Toolbox.</h1>
        </div>
        <span className="theme-text bold-text">MY WONDERFUL TOOLBOX.</span>

        <motion.div
          initial="hidden"
          whileInView="visible"
          variants={boxVariant}
          viewPort={{ once: false }}
          className="card-container"
        >
          {React.Children.toArray(
            cards.map((card) => {
              return (
                <motion.div
                  variants={listVariant}
                  whileInView="visible"
                  className={` toolcard ${dark ? "dark-card" : " "}`}
                  style={{ color: !dark && "white" }}
                >
                  <div>{card.icons}</div>
                  <div className="bold-text title-text">{card.titleText}</div>
                  <div>{card.text}</div>
                </motion.div>
              );
            })
          )}
        </motion.div>
      </div>
    </div>
  );
};

export default Services;
