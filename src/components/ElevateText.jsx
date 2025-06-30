import { motion } from "framer-motion";

const ElevateText = ({ show }) => (
  <motion.h2
    className="text-gray-300 text-2xl font-medium tracking-[1rem] uppercase mt-8 font-montserrat"
    initial={{ opacity: 0, y: 20 }}
    animate={{ opacity: show ? 1 : 0, y: show ? 0 : 20 }}
    transition={{
      duration: 0.6,
      ease: [0.25, 0.1, 0.25, 1]
    }}
  >
    Elevate
  </motion.h2>
);

export default ElevateText;
