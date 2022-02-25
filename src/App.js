import React from "react";
import './App.css';
import Welcome from "./components/Welcome";
import imgWelcome from "./first.svg"

class App extends React.Component {
    constructor() {
        super();
        this.state = {}
    }

    changeName = () => {
        let campo = document.getElementById('nome');
        this.setState({
            name: campo.value,
        });
    }

    render() {
        if (!this.state.hasOwnProperty('name')) {
            return (
                <main className="main">
                    <div>
                        <label for="nome">Insira seu nome:</label>
                        <input id="nome"></input>
                    </div>
                    <div>
                        <button onClick={this.changeName} className="btn btn-sucess">Ok</button>
                    </div>
                </main>
            );
        } else {
            if(this.state.name === "") {
                return (
                    <main className="main">
                        <Welcome name="estranho" />
                        <img src={imgWelcome}></img>
                    </main>
                )
            } else {
                return (
                    <main className="main">
                        <Welcome name={this.state.name} />
                        <img src={imgWelcome}></img>
                    </main>
                )
            }
        }
    }
}

export default App