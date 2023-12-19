import '../App.css'
import './final_result.css'
import Char from '../components/Char.jsx'
import charList from '../data';

function FinalResultSuccess () {
  // Function a déclencher quand le date est raté (inutilisable ici, a déclencher sur un autre composant?):
  /*function finalResultFailed() {
    let failTitle = document.getElementById('final_result_h2')
    let failParagraph = document.getElementById('final_result_paragraph')
    failTitle.innerHTML = "L Bozo XD"
    failParagraph.innerHTML = "Maybe next time ..."
  }*/
  return (
    <main>
      <section id='final_result'>
        <h2 id='final_result_h2' className='final_result_h2'>Lovely !</h2>
        <p id='final_result_paragraph'>Vous avez réussi, GG WP</p>
        <img className='final_result_img' src={charList[3].imageSRC/*Image partner*/}></img>
      </section>
    </main>
  )
}

export default FinalResultSuccess;