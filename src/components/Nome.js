import React from "react";
import "../index.css"

const Nome = (props) => {
    if (props.name === "") {
        return ""
    } else {
        return <h3>Seu nome é <span className="italic">{props.name}</span>?</h3>
    }
}

export default Nome