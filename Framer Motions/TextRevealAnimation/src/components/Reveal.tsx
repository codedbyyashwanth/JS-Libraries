import { FC, useEffect, useRef } from "react";
import { motion, useInView, useAnimation } from "framer-motion";

interface Props {
        children: JSX.Element
}

const Reveal:FC<Props> = ({children}) => {
        const ref = useRef(null);
        const useView = useInView(ref, {once: false});



        const mainControls = useAnimation();

        const textVariant = {
                hidden : {
                        y: 20,
                        opacity: 0
                },
                visible: {
                        y: 0,
                        opacity: 1,

                        transition: {
                                ease: [1,0,1,1],
                                duration: 0.6,
                        }
                }
        }

        const labelVariant = {
                hidden : {
                        left: 0,
                },
                visible: {
                        left: "100%",

                        transition: {
                                ease: [1,0,1,1],
                                duration: 0.4,
                        }
                }
        }

        useEffect(() => {
                if (useView) {
                        void mainControls.start("visible");
                } else {
                       void mainControls.start("hidden");
                }
        }, [mainControls, useView]);
        
        return (
                <div ref={ref}
                        className="relative">
                        <motion.div 
                                variants={textVariant} initial="hidden" animate={mainControls}>
                                {children}
                        </motion.div>
                        <motion.div className="absolute top-1 left-0 right-0 bottom-1 bg-green-500 z-30 overflow-hidden" variants={labelVariant}  initial="hidden" animate={mainControls}>

                        </motion.div>
                </div>
        );
}

export default Reveal;