import '../App.css'
import './final_result.css'
import charList from '../data';


function FinalResultSuccess ({end}) {

  return (
    <>
    {end ? (<main>
      <section id='final_result'>
        <h2 id='final_result_h2' className='final_result_h2'>Lovely !</h2>
        <p id='final_result_paragraph'>Vous avez réussi, GG WP</p>
        <img className='final_result_img' src={charList[3].imageSRC/*Image partner*/}></img>
      </section>
    </main>) : (<main>
      <section id='final_result'>
        <h2 id='final_result_h2' className='final_result_h2'>Fail</h2>
        <p id='final_result_paragraph'>Vous avez perdu</p>
        <img className='final_result_img' src={charList[3].imageSRC/*Image partner*/}></img>
      </section>
    </main>)}
    </>
  )
}

export default FinalResultSuccess;