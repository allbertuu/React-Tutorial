import SeuNome from '../components/SeuNome';

const Home = ({ setName, name }) => {

    let handleInput = (e) => {
        setName(e.target.value)
    }

    return (
        <main className="main">
            <div>
                <label htmlFor="nome">Insira seu nome:</label>
                <input id="nome" className={name === '' ? 'invalido' : 'valido'} onChange={handleInput}></input>
            </div>
            {name !== '' &&
                <SeuNome name={name} />
            }
        </main>
    )
}

export default Home