import { FC } from "react"
import {Routes, Route} from 'react-router-dom'
import Home from "./pages/Home";
import Cart from "./pages/Cart";

const App:FC = () => {
      return (
            <Routes>
                  <Route index path="/" element={<Home />} />
                  <Route index path="/cart" element={<Cart />} />
            </Routes>
      );
}

export default App