import React from "react";
import { motion } from "framer-motion/dist/framer-motion";
const SocialLink = ({ link, icon }) => {
  return (
    <motion.a whileInView={{ opacity: 1 }} className="social_icons" href={link}>
      {icon}
    </motion.a>
  );
};

export default SocialLink;
