import { useState } from 'react'

import Answer from '../components/Answer.jsx'
import Char from '../components/Char.jsx'

import FinalResultSuccess from '../pages/FinalResultSuccess.jsx'

import CharList from '../data.js'

import './Date.css'
import '../App.css'

function Date () {
  const [lvl, setLvl] = useState(0);
  const [points, setPoints] = useState(0);

	return (
		<>
		{(lvl === 3) ? (
			<FinalResultSuccess end={points >= 2 ? true : false}/>
		) : (
			<section id="date">
				<div id='question'>
					<Char char={CharList[5]} />
					<p className='container'>{CharList[5].questions[lvl].question}</p>
				</div>
				<div id='reponse'>
					<Answer answer={CharList[5].questions[lvl].answerBad} points={points} setPoints={setPoints} lvl={lvl} setLvl={setLvl} />
					<Answer answer={CharList[5].questions[lvl].answerGood} points={points} setPoints={setPoints} lvl={lvl} setLvl={setLvl} />
				</div>
			</section>
		)
		}
		</>
	)
}

export default Date;