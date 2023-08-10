import React from "react"

export default function Display(props){
    return (
        <div className="display">
            <h3>{props.expression}</h3>
            <h3>{props.display}</h3>
        </div>
    )
}