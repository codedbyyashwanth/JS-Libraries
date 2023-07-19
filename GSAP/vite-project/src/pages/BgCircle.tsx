import {FC, useState} from "react";
import Navbar from "../components/Navbar";

const BgCircle:FC = () => {
        const [left, setLeft] = useState<number>(0);
        const [top, setTop] = useState<number>(0);

        document.onpointermove =  (e) => {
                const {clientX, clientY} = e;

                setLeft(clientX);
                setTop(clientY);
        }

        return (
                <div className="relative">
                        <Navbar />
                        <main>
                                <div className="bgCircle fixed" style={{ left:`${left}px`, top: `${top}px`,  }}></div>
                                <div className="cover absolute top-0 left-0"></div>
                                <div>
                                        <h1 className=" text-white font-bold text-6xl">
                                                Lorem, ipsum dolor sit amet consectetur adipisicing elit. Eaque magnam architecto sunt laborum, sed sit vero earum dolorem dignissimos placeat neque, fugiat deserunt eum? Amet ipsum ab laborum tempora ea.
                                        </h1>
                                        <h1 className=" text-white font-bold text-6xl">
                                                Lorem, ipsum dolor sit amet consectetur adipisicing elit. Eaque magnam architecto sunt laborum, sed sit vero earum dolorem dignissimos placeat neque, fugiat deserunt eum? Amet ipsum ab laborum tempora ea.
                                        </h1>
                                        <h1 className=" text-white font-bold text-6xl">
                                                Lorem, ipsum dolor sit amet consectetur adipisicing elit. Eaque magnam architecto sunt laborum, sed sit vero earum dolorem dignissimos placeat neque, fugiat deserunt eum? Amet ipsum ab laborum tempora ea.
                                        </h1>
                                        <h1 className=" text-white font-bold text-6xl">
                                                Lorem, ipsum dolor sit amet consectetur adipisicing elit. Eaque magnam architecto sunt laborum, sed sit vero earum dolorem dignissimos placeat neque, fugiat deserunt eum? Amet ipsum ab laborum tempora ea.
                                        </h1>
                                        <h1 className=" text-white font-bold text-6xl">
                                                Lorem, ipsum dolor sit amet consectetur adipisicing elit. Eaque magnam architecto sunt laborum, sed sit vero earum dolorem dignissimos placeat neque, fugiat deserunt eum? Amet ipsum ab laborum tempora ea.
                                        </h1>
                                        <h1 className=" text-white font-bold text-6xl">
                                                Lorem, ipsum dolor sit amet consectetur adipisicing elit. Eaque magnam architecto sunt laborum, sed sit vero earum dolorem dignissimos placeat neque, fugiat deserunt eum? Amet ipsum ab laborum tempora ea.
                                        </h1>
                                        <h1 className=" text-white font-bold text-6xl">
                                                Lorem, ipsum dolor sit amet consectetur adipisicing elit. Eaque magnam architecto sunt laborum, sed sit vero earum dolorem dignissimos placeat neque, fugiat deserunt eum? Amet ipsum ab laborum tempora ea.
                                        </h1>
                                        <h1 className=" text-white font-bold text-6xl">
                                                Lorem, ipsum dolor sit amet consectetur adipisicing elit. Eaque magnam architecto sunt laborum, sed sit vero earum dolorem dignissimos placeat neque, fugiat deserunt eum? Amet ipsum ab laborum tempora ea.
                                        </h1>
                                        <h1 className=" text-white font-bold text-6xl">
                                                Lorem, ipsum dolor sit amet consectetur adipisicing elit. Eaque magnam architecto sunt laborum, sed sit vero earum dolorem dignissimos placeat neque, fugiat deserunt eum? Amet ipsum ab laborum tempora ea.
                                        </h1>
                                        <h1 className=" text-white font-bold text-6xl">
                                                Lorem, ipsum dolor sit amet consectetur adipisicing elit. Eaque magnam architecto sunt laborum, sed sit vero earum dolorem dignissimos placeat neque, fugiat deserunt eum? Amet ipsum ab laborum tempora ea.
                                        </h1> <h1 className=" text-white font-bold text-6xl">
                                                Lorem, ipsum dolor sit amet consectetur adipisicing elit. Eaque magnam architecto sunt laborum, sed sit vero earum dolorem dignissimos placeat neque, fugiat deserunt eum? Amet ipsum ab laborum tempora ea.
                                        </h1>
                                </div>
                        </main>
                </div>
        );
}

export default BgCircle;