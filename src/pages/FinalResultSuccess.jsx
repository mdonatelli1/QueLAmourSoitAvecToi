import { useState } from "react";

import Welcome from './Welcome.jsx';

import '../App.css'
import './final_result.css'

function FinalResultSuccess ({end, partner}) {
  const [restart, setRestart] = useState(false);

    const handleClick = () => {
        setRestart(true);
    }

  return (
    <>
      {restart ? (
        <Welcome />
      ) : (
        <main>
          <section id='final_result'>
            {end ? (
              <>
                <h2 id='final_result_h2' className='final_result_h2'>Lovely !</h2>
                <p id='final_result_paragraph'>Vous avez réussi, GG WP</p>
                <img className='final_result_img' src={partner.imageSRC} alt='Success'/>
                <button onClick={handleClick}>Restart</button>
              </>
            ) : (
              <>
                <h2 id='final_result_h2' className='final_result_h2'>Fail</h2>
                <p id='final_result_paragraph'>Vous avez perdu</p>
                <img className='final_result_img' src={partner.imageSRC} alt='Failure'/>
                <button onClick={handleClick}>Restart</button>
              </>
            )}
          </section>
        </main>
      )}
    </>
  );
}

export default FinalResultSuccess;