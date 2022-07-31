import { useNavigate } from 'react-router-dom';
import { useMutation } from '@apollo/client';
import { GET_CARDS } from '../queries/cardQuery';
import { DELETE_CARD } from '../mutations/cardMutations';


const DeleteCardButton = ({cardId}) => {
  const navigate = useNavigate();
  const [ deleteCard ] = useMutation(DELETE_CARD, {
    variables: { id: cardId },
    onCompleted: () => navigate('/'),
    refetchQueries: [{ query: GET_CARDS }]
  })
  return (
    <div>
      <button className='text-md font-normal border-2 border-blue-700 rounded-2xl px-4 py-2 hover:bg-white bg-orange-400 hover:text-blue-700' onClick={deleteCard}>
        Delete Card
      </button>
    </div>
  )
}

export default DeleteCardButton