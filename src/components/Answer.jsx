function Answer ({answer, points, setPoints, lvl, setLvl, partner}) {
	const handleClick = () => {
		answer === partner.questions[lvl].answerGood && setPoints(points + 1);
		setLvl(lvl + 1);
	}

	return (
		<button onClick={handleClick}>{answer}</button>
	)
}

export default Answer;