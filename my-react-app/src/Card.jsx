import ProfilePicture from './assets/PF.webp'

function Card() {
  return (
    <>
    <div className='card'>
    <img src={ProfilePicture} alt="Picture" className='pic'></img>
    <h2>Moe </h2>
    <p>Computer Eng</p>
    </div>
   </>
  )
}

export default Card