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
        </div>
      </section>
        ) : (
          <PartnerResult partner={partner} char={char}/>
        )}
      </>
    );
}

export default PartnerChoice;
