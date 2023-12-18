import './Date.css'
import '../App.css'
import Char from '../components/Char.jsx'
import CharList from '../data.js'

function Date () {
    return (
        <section id="date">
            <div id='question'>
                <Char char={CharList[5]} />
                <p className='container'>Quelle est ton arme préférée ?</p>
            </div>
            <div id='reponse'>
                <button>Answer 1</button>
                <button>Answer 2</button>
                <button>Answer 3</button>
            </div>
        </section>
    )
}

export default Date;