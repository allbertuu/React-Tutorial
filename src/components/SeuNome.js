import React from "react";
import './SeuNome.css';
import { Link } from "react-router-dom";

const SeuNome = ({ name, clearInput }) => {
    return (
        <div className="card card-nome">
            <h3>Seu nome é <span className="nome">{name}</span>?</h3>
            <div className="buttons">
                <Link to="/welcome" className="btn btn-sucess">Sim!</Link>
                <button className="btn btn-danger" onClick={clearInput}>Não :(</button>
            </div>
        </div>
    )
}

export default SeuNome