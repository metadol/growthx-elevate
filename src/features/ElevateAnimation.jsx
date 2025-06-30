import { AnimatePresence, motion } from "framer-motion";
import SparkleImage from "../components/SparkleImage";
import ElevateText from "../components/ElevateText";
import ElevateReveal from "../components/ElevateReveal";
import ReplayButton from "../components/ReplayButton";
import { useAnimationSequence } from "../hooks/useAnimationSequence";

const ElevateAnimation = () => {
    
    const {
        animationTrigger,
        showElevateText,
        elevateContent,
        fadeOut,
        triggerAnimation
    } = useAnimationSequence();

    return (
        <div className="flex flex-col items-center justify-center min-h-screen bg-black p-4">
            <AnimatePresence mode="wait">
                <motion.div
                    key={animationTrigger}
                    className="flex flex-col items-center justify-center"
                    animate={{ y: elevateContent ? -60 : 0, opacity: fadeOut ? 0 : 1 }}
                    transition={{
                        y: { duration: 1.4, ease: [0.25, 0.1, 0.25, 1] },
                        opacity: { duration: 2.0, ease: [0.25, 0.1, 0.25, 1] }
                    }}
                >
                    <SparkleImage />
                    <ElevateReveal animationTrigger={animationTrigger} />
                    <ElevateText show={showElevateText} />
                </motion.div>
            </AnimatePresence>

            <ReplayButton onClick={triggerAnimation} />
        </div>
    );
};

export default ElevateAnimation;
