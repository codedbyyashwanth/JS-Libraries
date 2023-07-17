import { FC } from "react";
import { Props } from "./HeroComponent";
import Reveal from "./Reveal";

const Card:FC<Props> = ({heading, body}) => {
        return (
                <div className=" w-1/2 mx-auto space-y-3">
                        <Reveal>
                                <h1 className=" text-6xl font-extrabold inline">{heading}</h1>
                        </Reveal>
                        <Reveal>
                                <p className="text-lg">
                                        {body}
                                </p>
                        </Reveal>
                </div>
        );
}

export default Card;