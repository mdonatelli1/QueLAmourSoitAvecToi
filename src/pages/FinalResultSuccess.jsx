import '../App.css'
import './final_result.css'


function FinalResultSuccess ({end, partner}) {

  return (
    <>
    {end ? (<main>
      <section id='final_result'>
        <h2 id='final_result_h2' className='final_result_h2'>Lovely !</h2>
        <p id='final_result_paragraph'>Vous avez réussi, GG WP</p>
        <img className='final_result_img' src={partner.imageSRC}></img>
      </section>
    </main>) : (<main>
      <section id='final_result'>
        <h2 id='final_result_h2' className='final_result_h2'>Fail</h2>
        <p id='final_result_paragraph'>Vous avez perdu</p>
        <img className='final_result_img' src={partner.imageSRC}></img>
      </section>
    </main>)}
    </>
  )
}

export default FinalResultSuccess;