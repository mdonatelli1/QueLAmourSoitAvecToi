import '../App.css';
import MysteryChar from '../components/MysteryChar.jsx';
import { useState, useEffect } from 'react';
import './PartnerChoice.css';
import PartnerResult from './PartnerResult.jsx';
import charList from '../data.js'

  function PartnerChoice ({char}) {
    const[partner, setPartner] = useState(undefined);
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
        question: 'As-tu une préférence pour sa couleur des yeux ?',
        options: [
          { class: 'option1', text: 'Blue' },
          { class: 'option2', text: 'Brown' },
          { class: 'option3', text: 'Red' },
        ],
      },
      {
        question: 'Et pour sa taille ?',
        options: [
          { class: 'option1', text: '2.03' },
          { class: 'option2', text: '1.5' },
          { class: 'option3', text: '1.09' },
        ],
      },
      {
        question: 'De quelle monde tu veux que il vienne ?',
        options: [
          { class: 'option1', text: 'Tatooine' },
          { class: 'option2', text: 'Alderaan' },
          { class: 'option3', text: 'Naboo' },
        ],
      },
    ];

    const handleOptionSelect = (option) => {
      setSelectedOption(option);
    };

    const handleNext = () => {
      setCurrentQuestion(currentQuestion + 1);
      if (currentQuestion === questionsData.length - 1){
        if (pointsOption1 > pointsOption2 && pointsOption1 > pointsOption3) {
          setPartner(charList[3]);
        } else if (pointsOption2 > pointsOption1 && pointsOption2 > pointsOption3) {
          setPartner(charList[5]);
        } else if (pointsOption3 > pointsOption1 && pointsOption3 > pointsOption2) {
          setPartner(charList[4]);
        } else {
          setPartner(charList[6]);
        }
      }
      else{
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
        setSelectedOption(null);
      }
      
    };

    const handlePrevious = () => {
      setCurrentQuestion(currentQuestion - 1);
      setSelectedOption(null);
    };
    

    return (
      <>
      {currentQuestion <= questionsData.length - 1 ? (
      <section id='partner-choice'>
        <MysteryChar />
        <div>
          <div>
            <h2 className="quests">{questionsData[currentQuestion].question}</h2>
            <ul className="answer">
              {questionsData[currentQuestion].options.map((option, index) => (
                <li key={option.class} className="answer-next">
                  <label>
                    <input
                      type="radio"
                      value={option.class}
                      checked={selectedOption === option.class}
                      onChange={() => handleOptionSelect(option.class)}
                    />
                    {option.text}
                  </label>
                </li>
              ))}
            </ul>
              <div className="button-next">
                <button className="next" onClick={handlePrevious} disabled={currentQuestion === 0}>
                  Précédent
                </button>
                <button className="next" onClick={handleNext} disabled={selectedOption === null}>
                  Suivant
                </button>
              </div>
          </div>
        </div>
      </section>
        ) : (
          <PartnerResult partner={partner} char={char}/>
        )}
      </>
    );
}

export default PartnerChoice;
