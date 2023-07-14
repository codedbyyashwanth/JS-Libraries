import { FC } from "react";
import Card from "./Card";

export interface Props {
        heading: string,
        body: string,
        bgColor: string,
        color: string
}


const HeroComponent:FC<Props> = ({heading, body, color, bgColor}) => {
        return (
                <div className={`w-full h-screen flex justify-center items-center`} style={{ backgroundColor: bgColor, color: color }}>
                        <Card heading={heading} body={body} color={color} bgColor={bgColor} />
                </div>
        );
}

export default HeroComponent;