import React from "react";
import { useGlobalContext } from "./reducers/context";
import "./Home.css";
import About from "./About";
import { motion, AnimatePresence } from "framer-motion/dist/framer-motion";
const Home = () => {
  const { dark } = useGlobalContext();

  const cards = [
    {
      titleText: "Future Concept",
      icons: "",
      text: "Nulla sint dolor nisi est sit laborum culpa nostrud ipsum.",
    },
    {
      titleText: "The Big Ideas",
      icons: "",
      text: "Nulla sint dolor nisi est sit laborum culpa nostrud ipsum.",
    },
    {
      titleText: "Creative Solution",
      icons: "",
      text: "Nulla sint dolor nisi est sit laborum culpa nostrud ipsum.",
    },
  ];
  const boxV = {
    hidden: {
      opacity: 0,
      transition: {
        staggerChildren: 0.2,
        staggerDirection: -1,
      },
    },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2,
        type: "bounce",
        stiffness: 500,
        // when: "beforeChildren",

        // delay: 0.1,
      },
    },
  };

  return (
    <div
      className={`main-section ${dark && "dark-home"} transit`}
      style={{ paddingTop: "100px" }}
    >
      <div style={{ height: "auto" }}>
        <div className={`transit ${dark ? "home-group" : ""}`}>
          <About />
        </div>

        {/* Cards here */}
        <div id="abouts">
          <AnimatePresence>
            <motion.aside
              initial="hidden"
              whileInView="visible"
              className="card-container"
              variants={boxV}
              exitBeforeEnter
              exit="hidden"
            >
              {React.Children.toArray(
                cards.map((card) => {
                  return (
                    <motion.div
                      intial="hidden"
                      whileInView="visible"
                      variants={boxV}
                      className={` card ${dark ? "dark-card" : "light-card"}`}
                      style={{ color: !dark && "white" }}
                    >
                      <div>{card.icons}</div>
                      <div className="bold-text">{card.titleText}</div>
                      <div className="line"></div>
                      <div style={{ textAlign: "center" }}>{card.text}</div>
                    </motion.div>
                  );
                })
              )}
            </motion.aside>
          </AnimatePresence>
        </div>
      </div>
    </div>
  );
};

export default Home;
