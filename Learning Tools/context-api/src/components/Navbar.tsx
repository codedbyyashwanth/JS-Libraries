import { FC } from "react"
import {Link} from 'react-router-dom'
import dataContext from "../utils/data"
import { useContext } from "react"

const Navbar:FC = () => {
        const data = useContext(dataContext)
        return (
                <nav className="flex justify-center py-3 text-white space-x-4 underline font-medium text-xl">  
                        <Link to="/">Home</Link>
                        <Link to="/cart">Cart</Link>
                        <h3>{data?.data}</h3>
                </nav>
        )
}

export default Navbar