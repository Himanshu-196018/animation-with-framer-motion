import { motion } from "framer-motion";
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
    </>
  );
};

export default App;
