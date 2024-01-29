import { useEffect, useState } from 'react';

import Char from '../components/Char.jsx';
import charList from '../data.js';
import PartnerChoice from "./PartnerChoice.jsx";

import '../App.css';
import './CharResult.css';

import benderIMG from "./../assets/bender.png";
import laraCroftIMG from "./../assets/lara-croft.png";
import heisenbergIMG from "./../assets/heisenberg.png";
import mysteryIMG from "./../assets/mystere.png"

function CharResult ( {selectedChar}) {

    const [active, setActive] = useState(false);
    const [currentImg, setCurrentImg] = useState();

    const handleClick = () => {
        setActive(true);
    }

    useEffect(() => {
        switch (selectedChar) {
            case 0:
                setCurrentImg(benderIMG);
                break;
            case 1:
                setCurrentImg(laraCroftIMG);
                break;
            case 2:
                setCurrentImg(heisenbergIMG);
                break;
            default:
                setCurrentImg(mysteryIMG);
                break;
        }
    }, []);

    return (
        <>
        {active ? (
            <PartnerChoice char={charList[selectedChar]} charImg={currentImg} />
        )
        :
        (<section id="char-result">
            <Char char={charList[selectedChar]} img={currentImg} />
            <button className="btn" onClick={handleClick}>Suivant</button>
        </section>)
        }
        </>
    )
}

export default CharResult;
