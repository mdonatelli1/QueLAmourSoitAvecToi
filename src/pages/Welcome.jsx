import { useState } from 'react';

import CharChoice from './CharChoice.jsx';

import '../App.css'
import './Welcome.css'

function Welcome () {
    const [active, setActive] = useState(false);

    const handleClick = () => {
        setActive(true);
    }

    return (
        <>
        {active ? (
            <CharChoice />
        ) : (
            <section id='welcome'>
                <h1>Que l'amour soit avec toi</h1>
                <button className="btn" onClick={handleClick}>Start</button>
            </section>
        )
        }
        </>
    )
}

export default Welcome;