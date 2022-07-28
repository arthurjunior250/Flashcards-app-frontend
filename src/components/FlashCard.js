import { useState } from "react";
import '../flashcard.css'

const FlashCard = ({card}) => {
  
  const [flip, setFlip] = useState(false);

  const handleClick = () => {
    setFlip(!flip)
  }
  return (
    <div 
    className={`card shadow-lg  bg-[#000000] ${flip ? 'flip' : ''}`} 
    onClick={handleClick}
    >
      <div className="front text-center">
        <h1 className="text-blue-700">Question</h1>
        <h1 className="text-lg font-bold">{card.question}</h1>
        <div className="flashcard-options">
        <h1 className="text-blue-700">Description</h1>
          {card.description}
        </div>
      </div>
      <div className="back text-center">
      <h1 className="text-blue-700">Answer</h1>
          {card.answer}
      </div>
    </div>
  )
} 

export default FlashCard