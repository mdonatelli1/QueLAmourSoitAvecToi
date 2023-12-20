import '../App.css'

function Answer ({answer, points, setPoints, lvl, setLvl, partner}) {
	const handleClick = () => {
		answer === partner.questions[lvl].answerGood && setPoints(points + 1);
		setLvl(lvl + 1);
	}

	return (
		<button className="btn" onClick={handleClick}>{answer}</button>
	)
}

export default Answer;