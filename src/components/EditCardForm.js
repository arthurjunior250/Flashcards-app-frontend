import { useState } from 'react';
import { useMutation } from '@apollo/client';
import { GET_CARD } from '../queries/cardQuery';
import { UPDATE_CARD } from '../mutations/cardMutations';

const EditCardForm = ({ card }) => {
  const [question, setQuestion] = useState(card.question)
  const [description, setDescription] = useState(card.description)
  const [answer, setAnswer] = useState(card.answer)

  const [updateCard] = useMutation(UPDATE_CARD, {
    variables: { id: card.id, question, description, answer },
    refetchQueries: [{ query: GET_CARD, variables: { id: card.id }}]
  })

  const handleSubmit = (e) => {
    e.preventDefault()
    if( !question || !description || !answer ) {
      return alert('Please fill out all fields')
    }
    updateCard(question, description, answer)
  }
  return (
    <div className='mt-5'>
      <h3 className='my-6 text-2xl font-bold'>Update Form</h3>
      <form onSubmit={handleSubmit}>
      <div className='mb-3'>
        <label className="font-semibold">Question</label>
        <textarea className='block border border-gray-400 w-full p-2 rounded mb-4 outline-[#efd6d1] mt-2' id="question" value={question} onChange={(e) => setQuestion(e.target.value)}></textarea>
        <label className="font-semibold">Description</label>
        <textarea className='block border border-gray-400 w-full p-2 rounded mb-4 outline-[#efd6d1] mt-2' id="description" value={description} onChange={(e) => setDescription(e.target.value)}></textarea>
        <label className="font-semibold">Answer</label>
        <textarea className='block border border-gray-400 w-full p-2 rounded mb-4 outline-[#efd6d1] mt-2' id="answer" value={answer} onChange={(e) => setAnswer(e.target.value)}></textarea>
      </div>
      <button type='submit' className="text-md font-normal border-2 border-blue-700 rounded-2xl px-4 py-2 hover:bg-white bg-orange-400 hover:text-blue-700">Update</button>
      </form>
    </div>
  )
}

export default EditCardForm