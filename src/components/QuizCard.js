import { Link } from "react-router-dom"

const QuizCard = ({ card }) => {
  return (
    <div className="bg-blue-700 w-[300px]  mb-10 shadow-lg">
      <div className="flex flex-col justify-between p-8">
        <div className="flex flex-col">
          <h5 className="text-xl font-bold text-white">{card.question}</h5>
        </div>
        <div className=" pb-8">
        <p className="text-md font-bold">Answer: <span className="block font-normal text-white">{card.answer}</span></p>
      </div>
        <div className="mt-2">
        <Link className="text-md font-normal border-2 border-blue-700 rounded-2xl px-4 py-2 hover:bg-white bg-orange-400 hover:text-blue-700" to={`/card/${card.id}`}>Edit</Link>
        </div>
      </div>

    </div>
  )
}

export default QuizCard