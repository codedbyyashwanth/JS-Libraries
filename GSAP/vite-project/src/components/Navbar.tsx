import { FC } from "react";
import { Link } from "react-router-dom";


const Navbar:FC = () => {
        return (
                <nav className="text-white space-x-3 flex justify-center mt-10">
                        <Link to="/home">Home</Link>
                        <Link to="/intro">Intro Page</Link>
                </nav>
        );
}

export default Navbar;