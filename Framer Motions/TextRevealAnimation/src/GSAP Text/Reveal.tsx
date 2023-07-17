import { FC, useEffect, useRef } from "react";
import { gsap } from "gsap";
import {CustomEase} from "gsap/CustomEase";
// eslint-disable-next-line @typescript-eslint/no-unsafe-argument
gsap.registerPlugin(CustomEase);

interface Props {
        children: JSX.Element
}

const Reveal:FC<Props> = ({children}) => {
        const app = useRef<HTMLDivElement | null>(null);
        // eslint-disable-next-line @typescript-eslint/no-unsafe-member-access, @typescript-eslint/no-unsafe-call
        CustomEase.create('customEase', '1, 0, 0, 1');

        useEffect(() => {
                gsap.context(() => {
                        gsap.fromTo(".reveal", {
                                opacity: 0
                        }, {
                                opacity: 1,
                                duration: 1,
                                ease: "easeIn"
                        });

                        gsap.to(".label", {
                                left: "100%",
                                duration: 0.6,
                                ease: "customEase"
                        })
                }, app);
        });

        return (
                <div ref={app} className=" ">
                       <div className="reveal inline-block relative">
                                {children}
                                <div className="absolute top-0 left-0 right-0 bottom-0 bg-green-500 z-30 overflow-hidden label"></div>
                       </div>
                </div>
        );
}

export default Reveal;