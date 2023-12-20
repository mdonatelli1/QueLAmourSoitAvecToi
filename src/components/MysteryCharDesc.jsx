import '../App.css'
import "./MysteryCharDesc.css"

function MysteryCharDesc({ charDesc, handleClick }) {
    return (
        <p className="char-desc container" onClick={handleClick}>{charDesc}</p>
    )
}

export default MysteryCharDesc;