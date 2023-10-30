import { useRef } from "react";
import { motion } from "framer-motion";
import UseFollowPointer from "./UseFollowPointer";

const SpringTrackMouse = () => {
  const ref = useRef(null);
  const { x, y } = UseFollowPointer(ref);
  return (
    <motion.div
      ref={ref}
      className="circle"
      animate={{ x, y }}
      transition={{
        type: "spring",
        damping: 3,
        stiffness: 50,
        restDelta: 0.001,
      }}
    />
  );
};

export default SpringTrackMouse;
