import React from "react";
import { motion } from "framer-motion";
import { Landing } from "../components";

const Home = () => {
  return (
    <>
      <motion.div
        initial={{ width: 0 }}
        animate={{ width: "100%" }}
        exit={{ x: window.innerWidth, transition: { duration: 0.1 } }}
      >
        <Landing />
      </motion.div>
    </>
  );
};

export default Home;
