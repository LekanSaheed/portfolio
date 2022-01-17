import React from "react";
import { navLinks } from "./Header";
import { motion, AnimatePresence } from "framer-motion/dist/framer-motion";
import { useGlobalContext } from "./reducers/context";
import "./MobileNav.css";
import { Link } from "react-scroll";
import { IoClose } from "react-icons/io5";
import { BsCloudSun, BsCloudMoon } from "react-icons/bs";
const MobileNav = () => {
  const { nav, toggleNav, setTheme, dark } = useGlobalContext();
  const navV = {
    closed: {
      opacity: 0,
      x: 100,
      staggerChildren: 0.07,
      staggerDirection: -1,
    },
    open: {
      x: 0,
      opacity: 1,
      width: 320,
      transition: {
        staggerChildren: 0.07,
      },
    },
  };
  return (
    <AnimatePresence>
      {nav && (
        <motion.nav
          initial="closed"
          animate="open"
          variants={navV}
          className="mobile_nav"
          exit="closed"
        >
          <div className="flex-row" style={{ justifyContent: "space-between" }}>
            <div style={{ fontSize: "30px" }} onClick={() => setTheme()}>
              {dark ? <BsCloudSun /> : <BsCloudMoon />}
            </div>
            <div style={{ fontSize: "40px" }} onClick={() => toggleNav()}>
              <IoClose />
            </div>
          </div>
          {navLinks.map((nav, id) => {
            return (
              <motion.div variants={navV} key={id}>
                <Link to={nav.to} smooth offset={-90} spy={true}>
                  {nav.text}
                </Link>
              </motion.div>
            );
          })}
        </motion.nav>
      )}
    </AnimatePresence>
  );
};

export default MobileNav;
