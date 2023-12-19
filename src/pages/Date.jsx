import './Date.css'
import '../App.css'
import Char from '../components/Char.jsx'
import CharList from '../data.js'
import Answer from '../components/Answer.jsx'
import { useState } from 'react'

function Date () {
    const [lvl, setLvl] = useState(0);
    const [points, setPoints] = useState(0);

    return (
        <section id="date">
            <div id='question'>
                <Char char={CharList[5]} />
                <p className='container'>{CharList[5].questions[lvl].question}</p>
            </div>
            <div id='reponse'>
                <Answer answer={CharList[5].questions[lvl].answerBad} points={points} setPoints={setPoints} lvl={lvl} setLvl={setLvl}/>
                <Answer answer={CharList[5].questions[lvl].answerGood} points={points} setPoints={setPoints} lvl={lvl} setLvl={setLvl}/>
            </div>
        </section>
    )
}

export default Date;