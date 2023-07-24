import { FC } from "react"
import { useContext } from "react"
import dataContext from "../utils/data"

const Home:FC = () => {
        const data = useContext(dataContext)

        return (
                <div className="flex justify-center p-4 text-2xl">
                        <h1>{data?.data}</h1>
                </div>
        )
}

export default Home