import charList from '../data.js'
import Char from '../components/Char.jsx';
import '../App.css'
import './CharResult.css'

function CharResult () {
    return (
        <section id="char-result">
            <Char char={charList[1]}/>
            <button>Suivant</button>
        </section>
    )
}

export default CharResult;