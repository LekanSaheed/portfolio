import React from "react";
import "./Header.css";
import { useGlobalContext } from "./reducers/context";
import { motion } from "framer-motion/dist/framer-motion";
import { Link } from "react-scroll";
import { BsCloudMoon, BsCloudSun } from "react-icons/bs";

export const navLinks = [
  { text: "HOME", to: "home", icon: "" },
  { text: "ABOUT", to: "about", icon: "" },
  { text: "TOOLBOX", to: "toolbox", icon: "" },
  { text: "WORKS", to: "works", icon: "" },
  { text: "CONTACT", to: "contact", icon: "" },
  { text: "FOLLOW", to: "follow", icon: "" },
];
const Header = () => {
  const { dark, setTheme, toggleNav } = useGlobalContext();

  const navVariant = {
    hidden: {
      opacity: 0,
    },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.07,
        when: "beforeChildren",
      },
    },
  };
  return (
    <motion.div
      initial="hidden"
      whileInView="visible"
      variants={navVariant}
      viewPort={{ once: false }}
      transition={{ when: "beforeChildren" }}
      className={`header ${dark && "darkHeader light-text"} transit`}
    >
      <div className="bold-text">LEKAN SAHEED</div>

      <div className="bars" onClick={() => toggleNav()}>
        <div className="bar"></div>
        <div className="bar"></div>
        <div className="bar"></div>
      </div>
      <motion.div
        initial="hidden"
        whileInView="visible"
        variants={navVariant}
        // viewPort={{ once: false }}
        className={` nav-container ${dark ? " dark-home" : ""}`}
      >
        {React.Children.toArray(
          navLinks.map((link) => {
            return (
              <motion.li
                variants={navVariant}
                className={`${dark ? "light-text" : ""} transit alink`}
              >
                {" "}
                <Link
                  activeClass="active"
                  to={link.to}
                  smooth
                  offset={-90}
                  spy={true}
                >
                  {link.text}
                </Link>
              </motion.li>
            );
          })
        )}
        <div
          style={{
            fontSize: "25px",
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
          }}
          onClick={() => setTheme()}
        >
          {dark ? <BsCloudSun /> : <BsCloudMoon />}
        </div>
      </motion.div>
    </motion.div>
  );
};

export default Header;
