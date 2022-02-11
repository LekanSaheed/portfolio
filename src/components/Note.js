import React from "react";
import { BsInfoCircle } from "react-icons/bs";
import { MdClose } from "react-icons/md";
import { motion, AnimatePresence } from "framer-motion/dist/framer-motion";
const Note = ({ note, type }) => {
  const [isNote, setIsNote] = React.useState(true);
  const variant = {
    hidden: {
      opacity: 0,
      x: 30,
    },
    visible: {
      opacity: 1,
      x: 0,
    },
  };
  return (
    <AnimatePresence>
      {isNote && (
        <motion.div
          className="note"
          initial="hidden"
          whileInView="visible"
          variants={variant}
          exit="hidden"
        >
          <div
            style={{
              display: "flex",

              alignItems: "center",
              gap: "10px",
            }}
          >
            <div
              style={{
                display: "flex",
                justifyContent: "center",
                alignItems: "center",
                color: "dodgerblue",
                fontSize: "16px",
              }}
            >
              <BsInfoCircle />
            </div>
            <div>{note}</div>
          </div>
          <div
            style={{
              alignSelf: "end",
              justifySelf: "flex-end",
              display: "flex",
              alignItems: "center",
              fontSize: "19px",
              color: "dodgerblue",
              justifyContent: "center",
            }}
            onClick={() => setIsNote(false)}
          >
            <MdClose />
          </div>
        </motion.div>
      )}
    </AnimatePresence>
  );
};

export default Note;
