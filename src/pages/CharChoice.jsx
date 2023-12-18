import MysteryChar from "../components/MysteryChar";

function CharChoice() {
    return (
    <div className="CharChoice">
        <h2>Sélectionne ton personnage</h2>
        <MysteryChar />
        <div className="charChoice-container">
            <p className="char-description">je suis MysteryCharDescr</p>
            <p className="char-description">je suis perso2</p>
            <p className="char-description">je suis perso3</p>
        </div>
    </div>
    )
  }
  export default CharChoice;