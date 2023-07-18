import { FC, useEffect, useRef } from "react";
import { gsap } from "gsap";
import Navbar from "../components/Navbar";


const Home:FC = () => {
        const text = "Hello, Yashwanth";
        const app = useRef<HTMLDivElement>(null);

        useEffect(() => {
                gsap.context(() => {
                        gsap.fromTo(".char", {
                                y: 100,
                        }, {
                                y: 0,
                                stagger: 2,
                                ease: "easeIn"
                        });
                }, app);
        });

        return (
                <>     
                        <Navbar />
                        <main className="flex justify-center items-center w-full h-screen text-white" ref={app}>
                                <h1 className="head font-bold text-8xl" style={{clipPath: "polygon(0 0, 100% 0, 100% 100%, 0% 100%)", lineHeight: 1}}>
                                        {
                                                text.split("").map((char, index) => (
                                                        <span className="char inline-block" key={index}>{char}</span>
                                                ))
                                        }
                                </h1>
                </main>
                </>
        );
}

export default Home;