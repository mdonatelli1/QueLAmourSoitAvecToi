import CharList from '../data.js'

function Answer ({answer, points, setPoints, lvl, setLvl}) {
    const handleClick = () => {
        answer === CharList[5].questions[lvl].answerGood && setPoints(points + 1);
        setLvl(lvl + 1);

        if(lvl === 2) points >= 2 ? alert("win") : alert("lose");
    }

    return (
        <button onClick={handleClick}>{answer}</button>
    )
}

export default Answer;