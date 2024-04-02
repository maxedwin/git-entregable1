import getRandomFromArray from "../utils/getRandomFromArray"
import phrases from "../utils/phrases.json"
import images from "../utils/arregloimg.json"
import './styles/BtnPhrase.css'
const BtnPhrase = ({setPhraseRandom, setImageSelected}) => {
    const handleClick = () => {
       
        const phrase = getRandomFromArray(phrases)
        const img = getRandomFromArray(images)
        setPhraseRandom(phrase)
        setImageSelected(img)
    }
  return (
    <button className='card__btn' onClick={handleClick}>Abrir Galleta</button>
  )
}

export default BtnPhrase