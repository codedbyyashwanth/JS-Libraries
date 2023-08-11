import { FC, useEffect, useRef } from "react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";


const Split:FC = () => {
        gsap.registerPlugin(ScrollTrigger);
        const app = useRef(null);

        useEffect(() => {
                gsap.context(() => {
                        gsap.to(".top", {
                                scrollTrigger: {
                                        trigger: ".top",
                                        scrub: true,
                                        start: "top 80%"
                                },
                                top: -100
                        });
                },app);
        },[]);


        return (
                <>
                        <section ref={app} className=" relative h-screen">
                                <div className="top w-full absolute min-h-[50vh] max-h-[50vh] bg-amber-700 top-0 left-0 overflow-hidden z-10">
                                        <div className="relative min-h-[50vh] max-h-[50vh]">
                                                <h1 className=" absolute top-[92%] left-10 inline text-5xl font-extrabold">Hello World</h1>
                                        </div>
                                </div>
                                <div className="center absolute w-full h-screen bg-black z-5">
                                        <h1 className="text-white">Center</h1>
                                </div>
                                <div className="bottom w-full absolute min-h-[50vh] max-h-[50vh] bg-amber-900 top-[50vh] left-0  overflow-hidden z-10">
                                        <div className="relative min-h-[50vh] max-h-[50vh]">
                                                <h1 className=" absolute top-[-8%] left-10 inline text-5xl font-extrabold">Hello World</h1>
                                        </div>
                                </div>
                        </section>
                        <section className="w-full min-h-screen">
                                kkw
                        </section>
                </>
        );
}

export default Split;