import React, { useState } from "react";
import './App.css';
import SeuNome from './components/SeuNome';
//import Welcome from "./components/Welcome";
//import imgWelcome from "./imgWelcome.svg"

const App = () => {

    const handleInput = (e) => {
        const val = e.target.value;
        setName(val);
    }

    const [name, setName] = useState('');

    return (
        <main className="main">
            <div>
                <label htmlFor="nome">Insira seu nome:</label>
                <input id="nome" className={name === '' ? 'invalido' : 'valido'} onChange={handleInput}></input>
            </div>
            {name !== '' &&
                <SeuNome name={name}/>
            }
        </main>
    )
}

export default App