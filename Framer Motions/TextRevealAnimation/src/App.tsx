import { FC } from "react";
import HeroComponent, { Props } from "./GSAP Text/HeroComponent";


const App:FC = () => {
      const data:Array<Props> = [
            {
                  heading: "This is the heading 1",
                  body: "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries",
                  bgColor: "#0f0f0f",
                  color: "#fafafa"
            },
            {
                  heading: "This is the heading 2",
                  body: "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries",
                  bgColor: "#ff3838",
                  color: "#fafafa"
            },
            {
                  heading: "This is the heading 3",
                  body: "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries",
                  bgColor: "#003f87",
                  color: "#fafafa"
            }
      ]
      return (
            <div className="section">
                  {
                        data.map((card, index) => (
                              <HeroComponent heading={card.heading} body={card.body} bgColor={card.bgColor} color={card.color} key={index} />
                        ))
                  }
            </div>
      );
}

export default App;