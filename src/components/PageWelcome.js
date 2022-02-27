import React from "react";
import Welcome from "./Welcome";
import imgWelcome from "../first.svg"

const PageWelcome = (props) => {
    if(props.name === "") {
        return (
            <main className="main">
                <Welcome name="estranho" />
                <img src={imgWelcome}></img>
            </main>
        )
    } else {
        return (
            <main className="main">
                <Welcome name={props.name} />
                <img src={imgWelcome}></img>
            </main>
        )
    }
}

export default PageWelcome