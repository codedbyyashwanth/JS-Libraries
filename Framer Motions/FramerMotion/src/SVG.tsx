import { FC } from "react";
import { motion } from "framer-motion";


export const SVG:FC = () => {

        const svgVariant = {
                initial: {
                },
                animate: {
                        transition: {
                                duration: 1
                        }
                }
        }

        const pathVariant = {
                initial: {
                        opacity: 0,
                        pathLength: 0,
                },
                animate: {
                        opacity: 1,
                        pathLength: 1,
                        transition: {
                                duration: 2,
                                ease: "easeInOut"
                        }
                }
        }

        return (
                <div className=" w-full text-center flex justify-center">
                        <motion.svg variants={svgVariant} initial="initial" animate="animate" width="200px" height="200px" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                                <motion.path variants={pathVariant} d="M20.5 7V13C20.5 16.7712 20.5 18.6569 19.3284 19.8284C18.1569 21 16.2712 21 12.5 21H11.5C7.72876 21 5.84315 21 4.67157 19.8284C3.5 18.6569 3.5 16.7712 3.5 13V7" stroke="#1C274C" stroke-width="1.5" stroke-linecap="round"/>
                                <motion.path variants={pathVariant} d="M2 5C2 4.05719 2 3.58579 2.29289 3.29289C2.58579 3 3.05719 3 4 3H20C20.9428 3 21.4142 3 21.7071 3.29289C22 3.58579 22 4.05719 22 5C22 5.94281 22 6.41421 21.7071 6.70711C21.4142 7 20.9428 7 20 7H4C3.05719 7 2.58579 7 2.29289 6.70711C2 6.41421 2 5.94281 2 5Z" stroke="#1C274C" stroke-width="1.5"/>
                                <motion.path variants={pathVariant} d="M9.5 13.4L10.9286 15L14.5 11" stroke="#1C274C" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/>
                        </motion.svg>

                        <motion.svg variants={svgVariant} initial="initial" animate="animate" width="200px" height="200px" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/motion.svg">
                                <motion.path  variants={pathVariant} d="M22 22L2 22" stroke="#1C274C" stroke-width="1.5" stroke-linecap="round"/>
                                <motion.path  variants={pathVariant} d="M17 22V6C17 4.11438 17 3.17157 16.4142 2.58579C15.8284 2 14.8856 2 13 2H11C9.11438 2 8.17157 2 7.58579 2.58579C7 3.17157 7 4.11438 7 6V22" stroke="#1C274C" stroke-width="1.5"/>
                                <motion.path  variants={pathVariant} d="M21 22V11.5C21 10.0955 21 9.39331 20.6629 8.88886C20.517 8.67048 20.3295 8.48298 20.1111 8.33706C19.6067 8 18.9045 8 17.5 8" stroke="#1C274C" stroke-width="1.5"/>
                                <motion.path  variants={pathVariant} d="M3 22V11.5C3 10.0955 3 9.39331 3.33706 8.88886C3.48298 8.67048 3.67048 8.48298 3.88886 8.33706C4.39331 8 5.09554 8 6.5 8" stroke="#1C274C" stroke-width="1.5"/>
                                <motion.path  variants={pathVariant} d="M12 22V19" stroke="#1C274C" stroke-width="1.5" stroke-linecap="round"/>
                                <motion.path  variants={pathVariant} d="M10 5H14" stroke="#1C274C" stroke-width="1.5" stroke-linecap="round"/>
                                <motion.path  variants={pathVariant} d="M10 8H14" stroke="#1C274C" stroke-width="1.5" stroke-linecap="round"/>
                                <motion.path  variants={pathVariant} d="M10 11H14" stroke="#1C274C" stroke-width="1.5" stroke-linecap="round"/>
                                <motion.path  variants={pathVariant} d="M10 14H14" stroke="#1C274C" stroke-width="1.5" stroke-linecap="round"/>
                        </motion.svg>
                </div>
        );
}