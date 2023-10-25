import { motion } from "framer-motion";
import Navbar from "./Navbar";

const App = () => {
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
    </>
  );
};

export default App;
