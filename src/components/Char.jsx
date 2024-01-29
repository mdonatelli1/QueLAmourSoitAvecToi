import '../App.css';
import './Char.css';

function Char ({char, img}) {
    return (
        <div className="profile container">
            <img src={img} alt={char.name} />
            <p>{char.name}</p>
        </div>
    )
}

export default Char;
