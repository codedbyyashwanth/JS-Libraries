import { FC } from "react";
import {Routes, Route} from "react-router-dom"
import Home from "./pages/Home";
import IntroText from "./pages/IntroText";
import BgCircle from "./pages/BgCircle";
import Split from "./pages/Split";

const App:FC = () => {
      return (
           <Routes>
                  <Route path="/" index element={<Home />} />
                  <Route path="/home" index element={<Home />} />
                  <Route path="/intro" index element={<IntroText />} />
                  <Route path="/bgcircle" index element={<BgCircle />} />
                  <Route path="/splittxt" element={<Split />} />
           </Routes>
      );
}

export default App;