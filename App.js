
import React from "react"
//import ReactDOM from "react-dom"
import ProfHead from "./Components/Head"
import ProfBody from "./Components/Body"
import ProfFoot from "./Components/Footer"

export default function App() {
    return (
        <div className="container">
            <ProfHead />
            <ProfBody />
            <ProfFoot />
        </div>
    )
}