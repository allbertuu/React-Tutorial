import React from "react";
import './App.css';
import PageWelcome from "./components/PageWelcome";
import Nome from "./components/Nome"

class App extends React.Component {
    constructor() {
        super();
        this.state = {
            name: "",
        }
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
        //if (!this.state.hasOwnProperty('name')) {
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
            );
        //} else {
        //    return <PageWelcome name={this.state.name}/>
        //}
    }
}

export default App