import { useEffect } from 'react';
import { useState } from 'react';

import Char from '../components/Char.jsx';
import Date from './Date.jsx';

import '../App.css';
import './PartnerResult.css';

import heart from "./../assets/heart.png";

function PartnerResult ({char, charImg, partner, partnerImg}) {
    const [active, setActive] = useState(false);

    useEffect(() => {
        setTimeout(() => {
            setActive(true);
        }, 3000)
    }, [])

    return (
        <>
        {active ? (
            <Date partner={partner} partnerImg={partnerImg}/>
        ) : (
            <section id="partner-result">
                <h1>Match !</h1>
                <div id='match'>
                    <Char char={char} img={charImg} />
                    <img id='heart' src={heart} alt=""/>
                    <Char char={partner} img={partnerImg} />
                </div>
            </section>
        )
        }
        </>
    )
}

export default PartnerResult;
