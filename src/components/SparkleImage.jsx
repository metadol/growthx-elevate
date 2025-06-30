import { motion } from "framer-motion";
import aiSparkle from "../assets/ai-sparkle.jpeg"; // Adjust the path as necessary

const SparkleImage = () => (
  <motion.img
    src={aiSparkle}
    alt="AI Sparkle"
    className="w-12 h-12 object-cover mb-[2px] ml-[-1rem]"
    initial={{ opacity: 0, x: -80, scale: 0.2, rotate: -180 }}
    animate={{ opacity: 1, x: 0, scale: 1, rotate: 0 }}
    transition={{
      duration: 1.2,
      ease: [0.25, 0.46, 0.45, 0.94],
      delay: 0.2
    }}
  />
);

export default SparkleImage;
