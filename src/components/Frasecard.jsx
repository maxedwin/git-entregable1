import './styles/Frasecard.css'
const Frasecard = ({phraseRandom}) => {
    console.log(phraseRandom)
    const {phrase} = phraseRandom
  return (
    <p className='card__frase'>{phrase}</p>
  )
}

export default Frasecard