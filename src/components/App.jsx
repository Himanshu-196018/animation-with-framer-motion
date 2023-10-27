import { motion } from "framer-motion";
import Navbar from "./Navbar";
import Switch from "./Switch";
import ScaleChildFix from "./ScaleChildFix";
import TabularCard from "./TabularCard";
import { useRef } from "react";

const App = () => {
  const constraintsRef = useRef(null);

  return (
    <>
      <h1>Framer Motion - React Animation Library</h1>
      <div className="wrap">
        <motion.div
          className="example-1"
          initial={{ opacity: 0, scale: 0.3 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 3, repeat: Infinity }}
        />
      </div>
      <div className="wrap">
        <motion.div
          className="example-2"
          animate={{
            scale: [1, 2, 2, 1, 1],
            rotate: [0, 0, 180, 180, 0],
            borderRadius: ["0%", "0%", "50%", "50%", "0%"],
          }}
          transition={{
            duration: 2,
            ease: "easeInOut",
            times: [0, 0.2, 0.5, 0.8, 1],
            repeat: Infinity,
            repeatDelay: 1,
          }}
        />
      </div>
      <div className="wrap">
        <Navbar />
      </div>
      <div className="wrap pink-blue-gradient">
        <Switch />
      </div>
      <div className="wrap pink-blue-gradient">
        <ScaleChildFix />
      </div>
      <div className="wrap">
        <TabularCard />
      </div>
      <div className="wrap">
        <motion.div
          className="box"
          whileHover={{ scale: 1.1 }}
          whileTap={{ scale: 0.9 }}
          transition={{ type: "spring", stiffness: 400, damping: 14 }}
        />
      </div>
      <div className="wrap">
        <motion.div className="drag-area" ref={constraintsRef} />
        <motion.div
          className="draggable"
          drag
          dragConstraints={constraintsRef}
        />
      </div>
    </>
  );
};

export default App;
