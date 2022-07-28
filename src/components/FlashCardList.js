import { useQuery } from "@apollo/client"
import FlashCard from "./FlashCard"
import { GET_CARDS } from "../queries/cardQuery";
import Spinner from "./Spinner";


const FlashCardList = () => {

  const { loading, error, data } = useQuery(GET_CARDS)
  
  if (loading) return <Spinner />
  if (error) return <p className="flex items-center justify-center text-xl text-red-600 font-bold">Something Went Wrong</p>

  return (
    <div className="card-grid">
      {!loading && !error && data.allCards.map(card => {
        return <FlashCard card={card} key={card.id} />
      })}  
    </div>
  )
}

export default FlashCardList