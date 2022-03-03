import React from "react";
import './SeuNome.css';
import { Link } from "react-router-dom";

const SeuNome = ({ name }) => {
    return (
        <div className="card card-nome">
            <h3>Seu nome é <span className="nome">{name}</span>?</h3>
            <div className="buttons">
                <button className="btn btn-sucess"><Link to="/welcome">Sim!</Link></button>
                <button className="btn btn-danger">Não :(</button>
            </div>
        </div>
    )
}

export default SeuNome