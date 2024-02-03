import { useEffect, useState } from 'react';

import Char from '../components/Char.jsx';
import charList from '../data.js';
import PartnerChoice from "./PartnerChoice.jsx";

import '../App.css';
import './CharResult.css';

function CharResult ( {selectedChar}) {

    const [active, setActive] = useState(false);

    const handleClick = () => {
        setActive(true);
    }

    return (
        <>
        {active ? (
            <PartnerChoice char={charList[selectedChar]} />
        )
        :
        (<section id="char-result">
            <Char char={charList[selectedChar]} />
            <button className="btn" onClick={handleClick}>Suivant</button>
        </section>)
        }
        </>
    )
}

export default CharResult;
