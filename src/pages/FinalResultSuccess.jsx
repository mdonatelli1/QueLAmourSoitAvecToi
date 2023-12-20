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
        <main style={{backgroundImage: `url(${partner.datePlace})`}}>
          <section id='final_result'>
            {end ? (
              <div className="result">
                <h2 id='final_result_h2' className='final_result_h2'>Lovely !</h2>
                <img className='final_result_img' src="src\assets\win.png" alt='Success'/>
                <button className="btn" onClick={handleClick}>Restart</button>
              </div>
            ) : (
              <div className="result">
                <h2 id='final_result_h2' className='final_result_h2'>Fail</h2>
                <img className='final_result_img' src="src\assets\lose.png" alt='Failure'/>
                <button className="btn" onClick={handleClick}>Restart</button>
              </div>
            )}
          </section>
        </main>
      )}
    </>
  );
}

export default FinalResultSuccess;