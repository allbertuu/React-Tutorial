import React from "react";
import './App.css';
import Nome from "./components/Nome"
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

    handleInput = (e) => {
        const val = e.target.value
        this.setState({
            name: val,
        })
    }

    render() {
        return (
            <main className="main">
                <div>
                    <label for="nome">Insira seu nome:</label>
                    <input onChange={this.handleInput} id="nome"></input>
                </div>
                <div>
                    <Nome name={this.state.name} />
                </div>
                <div>
                    <button onClick={this.changeName} className="btn btn-sucess">Ok</button>
                </div>
            </main>
        )
    }
}

export default App