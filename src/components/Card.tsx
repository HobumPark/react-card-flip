import '../css/Card.css';
import back from '../images/back-card.png';
import front from '../images/front-card.png';

interface cardProps{
    isFlipped:boolean,
    setIsFlipped:Function
}

function Card(props:cardProps) {
  const {isFlipped,setIsFlipped}=props

  const flipCard=()=>{
    setIsFlipped(true)//카드 뒤집고

    setTimeout(()=>{
      let card = document.querySelector('.card') as HTMLElement;
      card.setAttribute('class','card')
      setIsFlipped(false)
    },2000)
    //2초뒤에 원래 상태로 돌림
  }

  return (
    <div className="flip" onClick={flipCard}>  
      <div className={`card ${isFlipped? 'flipped':''}`} >
        <div className="back">
            <img src={back}/>
        </div>
        <div className="front">
            <img src={front}/>
        </div>
      </div>
    </div>
  );
}

export default Card;
