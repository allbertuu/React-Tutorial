import SeuNome from '../components/SeuNome';

const Home = ({ setName, name }) => {

    let handleInput = (e) => {
        setName(e.target.value)
    }

    let clearInput = () => {
        document.getElementById('nome').value = '';
        setName('');
    }

    return (
        <main className="main">
            <div>
                <label htmlFor="nome">Insira seu nome:</label>
                <input id="nome" className={name === '' ? 'invalido' : 'valido'} onChange={handleInput}></input>
            </div>
            {name !== '' &&
                <SeuNome name={name} clearInput={clearInput} />
            }
        </main>
    )
}

export default Home