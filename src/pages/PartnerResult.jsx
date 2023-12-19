import '../App.css'
import './PartnerResult.css'
import Char from '../components/Char.jsx'
import charList from '../data';

function PartnerResult () {
    return (
        <section id="partner-result">
            <h1>Match !</h1>
            <div id='match'>
                <Char char={charList[1]}/>
                <img id='heart' src="src\assets/heart.png" alt="" />
                <Char char={charList[5]}/>
            </div>
        </section>
    )
}

export default PartnerResult;