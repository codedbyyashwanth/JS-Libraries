import { FC } from "react";
import {Routes, Route} from "react-router-dom"
import Home from "./pages/Home";
import IntroText from "./pages/IntroText";

const App:FC = () => {
      return (
           <Routes>
                  <Route path="/home" index element={<Home />} />
                  <Route path="/intro" index element={<IntroText />} />
           </Routes>
      );
}

export default App;