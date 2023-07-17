import { FC, useRef, useEffect } from "react";
import { gsap } from "gsap";


export const GSAP:FC = () => {
        const app = useRef<HTMLDivElement | null>(null);

        useEffect(() => {
                gsap.context(() => {
                        gsap.fromTo(".square", {
                                x: -200,
                                rotate: 0,
                                backgroundColor: "blue",
                        }, {
                                x: 200,
                                rotate: 360,
                                backgroundColor: "green",
                                duration: 3
                        });

                        gsap.fromTo(".square-2", {
                                x: -300,
                                rotate: 0,
                                opacity: 0,
                        }, {
                                x: 300,
                                rotate: 360,
                                opacity: 1,
                                duration: 2,
                        });
                }, app);
        });

        return (
                <div ref={app} className="w-full h-screen flex justify-center items-center">
                        <div 
                                className="w-32 h-32 bg-gray-800 flex justify-center items-center square">
                                <h1 className="text-white">Hello, World!</h1>
                        </div>
                        <div className="square-2 w-32 h-32 rounded-md bg-teal-500"></div>
                </div>
        );
}
