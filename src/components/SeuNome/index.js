import React from "react";
import './SeuNome.css';

export default ({ name }) => {
    return (
        <div className="card card-nome">
            <h3>Seu nome é <span className="nome">{name}</span>?</h3>
            <div className="buttons">
                <button className="btn btn-sucess">Sim!</button>
                <button className="btn btn-danger">Não :(</button>
            </div>
            {/*ao clicar, passar para uma rota com Welcome e imgWelcome*/}
        </div>
    )
}