import React from "react"
import Nav from "./Nav"
import Card from "./Card"
import data from "./data"

export default function App (){
    const card = data.map(item => {
        return(
            <Card {...item}/>
        )
    })
    return(
        <div>
            <Nav />
            {card}
        </div>
    )
}