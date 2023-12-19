import { useState } from 'react'

import Answer from '../components/Answer.jsx'
import Char from '../components/Char.jsx'

import FinalResultSuccess from '../pages/FinalResultSuccess.jsx'

import './Date.css'
import '../App.css'

function Date ({partner}) {
  const [lvl, setLvl] = useState(0);
  const [points, setPoints] = useState(0);

	return (
		<>
		{(lvl === 3) ? (
			<FinalResultSuccess end={points >= 2 ? true : false} partner={partner}/>
		) : (
			<section id="date">
				<div id='question'>
					<Char char={partner} />
					<p className='container'>{partner.questions[lvl].question}</p>
				</div>
				<div id='reponse'>
					<Answer answer={partner.questions[lvl].answerBad} points={points} setPoints={setPoints} lvl={lvl} setLvl={setLvl} partner={partner}/>
					<Answer answer={partner.questions[lvl].answerGood} points={points} setPoints={setPoints} lvl={lvl} setLvl={setLvl} partner={partner}/>
				</div>
			</section>
		)
		}
		</>
	)
}

export default Date;