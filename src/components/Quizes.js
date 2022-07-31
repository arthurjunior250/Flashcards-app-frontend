import { useQuery } from "@apollo/client";

import { GET_CARDS } from "../queries/cardQuery";
import QuizCard from "./QuizCard";
import Spinner from "./Spinner";



const Quizes = () => {
  const { loading, error, data } = useQuery(GET_CARDS);

  if (loading) return <Spinner />
  if (error) return <p className="flex items-center justify-center text-xl text-red-600 font-bold">Something Went Wrong</p>

  return (
    <>
    { data.allCards.length > 0 ? (
      <div className="flex flex-wrap gap-8">
        {data.allCards.map(card => (
          <QuizCard key={card.id} card={card} />
        ))}
      </div>
    ) : (<p>No Quizes available at the moment</p>) }
    </>
  )
}

export default Quizes