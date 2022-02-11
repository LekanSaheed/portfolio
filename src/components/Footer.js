import React from "react";
import "./Footer.css";
import { navLinks } from "./Header";
import { Link } from "react-scroll";
import SocialLink from "./SocialLink";
import { BsGithub } from "react-icons/bs";
import { motion } from "framer-motion/dist/framer-motion";
const Footer = () => {
  const box = {
    hidden: {
      opacity: 1,
    },
    visible: {
      transition: {
        staggerChildren: 0.3,
        when: "beforeChildren",
      },
    },
  };
  const listV = {
    hidden: {
      x: 10,
      opacity: 0,
    },
    visible: {
      x: 0,
      opacity: 1,
      transition: {
        delay: 0.2,
      },
    },
  };
  const listR = {
    hidden: {
      x: -20,
      opacity: 0,
    },
    visible: {
      x: 0,
      opacity: 1,
    },
  };
  const listM = {
    hidden: {
      scale: 0,
      opacity: 0,
    },
    visible: {
      scale: 1,
      opacity: 1,
    },
  };

  return (
    <motion.div className="footer" id="contact">
      <motion.div
        initial="hidden"
        whileInView="visible"
        variants={box}
        className="footer_main"
      >
        <motion.div
          variants={listV}
          className="footer_main_flex1 footer_main_flex "
        >
          <div className="imd_node">
            <h2>Quick Links</h2>
            <div className="flex-column">
              {" "}
              {navLinks.map((nav, id) => {
                return (
                  <Link
                    className="footer_links"
                    activeClass="nil"
                    key={id}
                    to={nav.to}
                    smooth
                    offset={-90}
                    spy={true}
                  >
                    {nav.text}
                  </Link>
                );
              })}
            </div>
          </div>
        </motion.div>
        <motion.div
          variants={listM}
          className="footer_main_flex2 footer_main_flex"
        >
          <div className="imd_node">
            <h2>Leave a Message</h2>
            <div className="flex-column">
              <div className="input_container">
                <input placeholder="Your message" />
              </div>
              <SocialLink icon={<BsGithub />} />
            </div>
          </div>
        </motion.div>
        <motion.div
          variants={listR}
          className="footer_main_flex3 footer_main_flex"
        >
          Flex 3
        </motion.div>
      </motion.div>
      <div className="footer_bottom">
        Copyright{" "}
        <span
          style={{
            alignItems: "center",
            justifyContent: "center",
            display: "flex",
          }}
        >
          {" "}
          &copy;
        </span>
        {new Date().getFullYear()}.{" "}
        <span style={{ fontSize: "13px" }}>Made with love and React.</span>
      </div>
    </motion.div>
  );
};

export default Footer;
