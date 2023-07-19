import { FC } from "react";
import { Link } from "react-router-dom";


const Navbar:FC = () => {
        return (
                <nav className="text-white space-x-3 flex justify-center pt-10">
                        <Link className=" underline" to="/home">Home</Link>
                        <Link className=" underline" to="/intro">Intro Page</Link>
                        <Link className=" underline" to="/bgcircle">BG Anime</Link>
                </nav>
        );
}

export default Navbar;