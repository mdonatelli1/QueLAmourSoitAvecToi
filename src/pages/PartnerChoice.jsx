//import './Date.css';
import '../App.css';
// import Char from '../components/Char.jsx';
// import CharList from '../data.js';
import '../components/Char.css';
import MysteryChar from '../components/MysteryChar.jsx';
import { useState, useEffect } from 'react';

  function partnerChoix () {
    const[charactersInfos, setApiData] = useState([]);
    useEffect(() => {
    fetch("https://miadil.github.io/starwars-api/api/all.json")
      .then(res => res.json())
      .then(data => setApiData(data))
      }, []);
    
    const [currentQuestion, setCurrentQuestion] = useState(0);
    const [selectedOption, setSelectedOption] = useState(null);
    const [pointsOption1, setPointsOption1] = useState(0);
    const [pointsOption2, setPointsOption2] = useState(0);
    const [pointsOption3, setPointsOption3] = useState(0);

    const questionsData = [
      {
        question: 'Quel genre veux-tu que ton date soit ?',
        options: [
          { class: 'option1', text: 'Homme' },
          { class: 'option2', text: 'Femme' },
          { class: 'option3', text: 'Robot' },
        ],
      },
      {
        question: 'Couleur préféré ?',
        options: [
          { class: 'option1', text: 'Bleu' },
          { class: 'option2', text: 'Rouge' },
          { class: 'option3', text: 'bluesilver' },
        ],
      },
      {
        question: 'Taille ?',
        options: [
          { class: 'option1', text: '3' },
          { class: 'option2', text: '4' },
          { class: 'option3', text: '5' },
        ],
      },
      {
        question: '2 + 2 ?',
        options: [
          { class: 'option1', text: '3' },
          { class: 'option2', text: '4' },
          { class: 'option3', text: '5' },
        ],
      },
    ];

    const handleOptionSelect = (option) => {
      setSelectedOption(option);
    };

    const handleNext = () => {
      switch (selectedOption) {
        case 'option1':
          setPointsOption1(pointsOption1 + 1);
          break;
        case 'option2':
          setPointsOption2(pointsOption2 + 1);
          break;
        case 'option3':
          setPointsOption3(pointsOption3 + 1);
          break;
        default:
          break;
      }

      setCurrentQuestion(currentQuestion + 1);
      setSelectedOption(null);
    };

    const handlePrevious = () => {
      setCurrentQuestion(currentQuestion - 1);
      setSelectedOption(null);
    };

    const showResult = () => {
      let result;
      if (pointsOption1 > pointsOption2 && pointsOption1 > pointsOption3) {
        result = 'Option 1 wins!';
      } else if (pointsOption2 > pointsOption1 && pointsOption2 > pointsOption3) {
        result = 'Option 2 wins!';
      } else if (pointsOption3 > pointsOption1 && pointsOption3 > pointsOption2) {
        result = 'Option 3 wins!';
      } else {
        result = 'It\'s a tie!';
      }

      return result;
    };

    

    return (
      <div>
        <div id="date">
          <link href="https://fonts.googleapis.com/css2?family=Montserrat&family=Space+Grotesk:wght@300;500&display=swap" rel="stylesheet"></link>
          <div id='question'>
            <MysteryChar/>
          </div>
        </div>
        <div>
          <h1>Questionnaire</h1>
          {currentQuestion < questionsData.length ? (
            <div>
              <h2>{questionsData[currentQuestion].question}</h2>
              <ul>
                {questionsData[currentQuestion].options.map((option, index) => (
                  <li key={option.id}>
                    <label>
                      <input
                        type="radio"
                        value={option.id}
                        checked={selectedOption === option.id}
                        onChange={() => handleOptionSelect(option.id)}
                      />
                      {option.text}
                    </label>
                  </li>
                ))}
              </ul>
              <button onClick={handlePrevious} disabled={currentQuestion === 0}>
                Précédent
              </button>
              <button onClick={handleNext} disabled={selectedOption === null}>
                Suivant
              </button>
            </div>
          ) : (
            <div>
              <h2>Résultat</h2>
              <p>{showResult()}</p>
            </div>
          )}
        </div>
      </div>
    );
    
}

export default partnerChoix;
