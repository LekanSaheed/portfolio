import React from "react";
import { useGlobalContext } from "./reducers/context";
import "./Home.css";
import About from "./About";
import { motion, AnimatePresence } from "framer-motion/dist/framer-motion";
import { HiOutlineLightBulb } from "react-icons/hi";
import { BiBrain } from "react-icons/bi";
import { IoHardwareChipOutline } from "react-icons/io5";
const Home = ({ connectEth }) => {
  const { dark } = useGlobalContext();

  const cards = [
    {
      titleText: "Future Concept",
      icons: <IoHardwareChipOutline />,
      text: "Out of earth technological innovations.",
    },
    {
      titleText: "The Big Ideas",
      icons: <HiOutlineLightBulb />,
      text: "Innovation through imagination.",
    },
    {
      titleText: "Creative Solution",
      icons: <BiBrain />,
      text: "Creative approach to common problems.",
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
          <About connectEth={connectEth} />
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
                      <div className="card_icons">{card.icons}</div>
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
