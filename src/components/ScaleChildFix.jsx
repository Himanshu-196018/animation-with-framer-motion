import { useState } from "react";
import { motion } from "framer-motion";

const ScaleChildFix = () => {
  const [isOpen, setIsOpen] = useState(false);
  return (
    <motion.div
      layout
      className="parent"
      data-isOpen={isOpen}
      initial={{ borderRadius: 50 }}
      onClick={() => setIsOpen(!isOpen)}
    >
      <motion.div layout className="child" />
    </motion.div>
  );
};

export default ScaleChildFix;
