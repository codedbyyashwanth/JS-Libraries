import { FC, useState } from "react";
import { motion } from "framer-motion";

const Text:FC = () => {
        const [words, setWords] = useState<string>("Hello World!, This is yashwanth");

        const sentence = {
                hidden: {
                        opacity: 0,
                        y: -100
                },
                visible: {
                        opacity: 1,
                        y:0,
                        transition: {
                                staggerChildren: 0.05
                        }
                }
        }

        const letter = {
                hidden: {
                        y:20,
                        opacity: 0,
                },
                visible: {
                        y:0,
                        opacity: 1,
                }
        }
        return (
                <div className=" w-full h-screen bg-gray-800 flex justify-center items-center">
                        <motion.h3 variants={sentence} initial="hidden" animate="visible" className=" text-white">
                                {
                                        words.split('').map((char, index) => (
                                                char !== " " ? <motion.span className=" inline-block text-xl" key={index} variants={letter} >
                                                {char}
                                        </motion.span> : <motion.span className=" collapse text-sm" key={index} variants={letter}>
                                                       -
                                                </motion.span>
                                        ))
                                }
                        </motion.h3>
                </div>
        );
}

export default Text;