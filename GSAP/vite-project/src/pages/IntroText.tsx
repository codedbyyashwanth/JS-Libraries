import { FC, useEffect, useRef } from "react";
import Navbar from "../components/Navbar";
import { gsap } from "gsap/gsap-core";


const IntroText:FC = () => {
        const app = useRef<HTMLDivElement>(null);

        useEffect(() => {
                gsap.context(() => {
                        gsap.to(".char", {
                                keyframes: {
                                        y: ["0","-100%", "-200%", "0%"],
                                },
                        })
                }, app);
        });

        return (
                <>
                        <Navbar />
                        <header className="flex justify-center items-center w-full h-screen text-white" ref={app}>
                                <h1 className="text-6xl">
                                        Hello, I am <p style={{clipPath: "polygon(0 0, 100% 0, 100% 33%, 0% 33%)"}}>
                                        <span className="char text-orange-500 block py-4">Software Developer</span>
                                        <span className="char text-orange-500 block py-4">App Developer</span>
                                        <span className="char text-orange-500 block py-4">Web Developer</span>
                                        </p>
                                </h1>
                </header>
                </>
        );
}

export default IntroText;