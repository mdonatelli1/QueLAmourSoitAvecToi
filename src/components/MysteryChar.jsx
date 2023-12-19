import '../App.css'
import './MysteryChar.css';

import mysteryImage from "./mystere.png";
function MysteryChar() {
    return (
      <div className="mystery-char-container">
        <div className="mystery">
          <img className="mystery-char-image" src={mysteryImage} alt="Mystery Character" />
          <h1>Partner mystère</h1>
        </div>
      </div>
    );
  }
  
  export default MysteryChar;