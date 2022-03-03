import imgWelcome from '../imgWelcome.svg';
import './Welcome.css'

const Welcome = ({ name }) => {
    return (
        <div className='main'>
            <div className="card">
                <h1>Olá, <span className='nomeWelcome'>{name}</span>! <br /> <span className='italic'>Seja bem vindo!</span></h1>
            </div>
            <img src={imgWelcome} alt='Imagem de boas vindas'/>
        </div>
    );
}

export default Welcome