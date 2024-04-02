import { useState } from 'react'
import './App.css'
import phrases from './utils/phrases.json'
import getRandomFromArray from './utils/getRandomFromArray'
import Frasecard from './components/Frasecard'
import BtnPhrase from './components/BtnPhrase'
import arregloimg from './utils/arregloimg.json'

function App() {
  const initialValue = getRandomFromArray(phrases)
  const [phraseRandom, setPhraseRandom] = useState('');
 

  const initialImage = getRandomFromArray(arregloimg)
  const [imageSelected, setImageSelected] = useState(initialImage)
        
  const objStyle = {
    backgroundImage: `url(/images/fondo${imageSelected}.jpg)`,
  }
  return (
    <>
      <div  className='app' style={objStyle}>
       <h1 className='app__title'>Galleta de la Fortuna</h1>
       <article className='app__card'>
       <Frasecard phraseRandom={phraseRandom} />
       <BtnPhrase  setPhraseRandom={setPhraseRandom} setImageSelected={setImageSelected}/>
       </article>
      </div>
  
    </>
  )
}

export default App
