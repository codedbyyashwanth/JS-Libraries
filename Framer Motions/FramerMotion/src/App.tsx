import { FC, useState } from "react";
import { motion } from "framer-motion";

const App:FC = () => {
      const [visible, setVisible] = useState<boolean>(false);

      const textVariant = {
            hidden: {
                  y: "-20px", 
                  opacity: 0
            },
            animate: {
                  y: 0, 
                  opacity: 1,
                  transition: {
                        type: "tween",
                        when: "beforeChildren"
                  }
            }
      }

      const buttonVariant = {
            animate: {
                  scale: 1.1,
                  transition: {
                        repeat: 10
                  }
            }
      }

      const childVariant = {
            hidden: {
                  opacity: 0
            },
            animate: {
                  opacity: 1,

                  transition: {
                        duration: 1
                  }
            }
      }

      return <div className=" bg-gray-500 w-full h-screen flex justify-center items-center flex-col gap-y-2">
            <motion.div 
                  className=" w-48 h-48 bg-white rounded-3xl shadow-xl">
            </motion.div>

            <motion.button className="px-5 py-2 bg-teal-400 rounded-md" onClick={() => setVisible(!visible)} variants={buttonVariant} whileHover="animate">Show Text</motion.button>
            {
                  visible && <motion.h2 variants={textVariant} initial="hidden"  animate="animate" className=" text-lg font-medium text-center">
                        Hello, There! <br />
                              <motion.span className=" text-center" variants={childVariant} >Thank You!</motion.span>
                        </motion.h2>
            }
      </div>;
}

export default App
