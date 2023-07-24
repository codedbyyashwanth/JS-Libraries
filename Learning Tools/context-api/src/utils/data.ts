import { createContext, useState } from "react"

interface data {
        data: string
}

const dataContext = createContext<data | null>(null)

export default dataContext;