import { createContext } from "react"

const initialState = {
    firstName: "Ganesh",
    lastName: "Avabratha"
}

export type UserState = {
    firstName: string;
    lastName: string;
}

const context = createContext<UserState>(initialState);

export default context;