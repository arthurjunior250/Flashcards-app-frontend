import { Link, useParams } from 'react-router-dom';
import { useQuery } from '@apollo/client';
import { GET_CARD } from '../queries/cardQuery';
import DeleteCardButton from '../components/DeleteCardButton';
import EditCardForm from '../components/EditCardForm';
import Spinner from '../components/Spinner';


const Card = () => {
  let { id } = useParams();
  id = parseInt(id)
  const { loading, error, data } = useQuery(GET_CARD, {
    variables: { id }
  });

  if (loading) return <Spinner />
  if (error) return <p className="flex items-center justify-center text-xl text-red-600 font-bold">Something Went Wrong</p>

  return (
    <div className='py-8 px-36'>
      {
        !loading && !error && (
          
          <div className='bg-[#ebedf0] flex flex-col w-full p-5'>
               <h3 className='my-6 text-2xl font-bold'>Updated data</h3>
                <div className='w-full bg-blue-700 flex gap-2 justify-center py-4'>
                <h1 className='text-lg font-bold mt-3'>Question :</h1>
                <p className='bg-white mt-2 py-2 px-6 w-fit rounded-lg'>{ data.oneCard.question }</p>
                <h1 className='font-bold mt-3'>Description :</h1>
                <p className='bg-white mt-2 py-2 px-6 w-fit rounded-lg'>{ data.oneCard.description }</p>
                <h1 className='font-bold mt-3'>Answer :</h1>
                <p className='bg-white mt-2 py-2 px-6 w-fit rounded-lg'>{ data.oneCard.answer }</p>
              </div>
            <div className='flex flex-col justify-center'>
            <div className='w-full'>
                <EditCardForm card={data.oneCard}/>
              </div> 
            </div>
            <div className='flex flex-col justify-between mt-2'>
              <DeleteCardButton cardId={data.oneCard.id} />
              <Link to="/dashboard" className='mt-2 w-[7%] text-md font-normal border-2 border-blue-700 rounded-2xl px-4 py-2 hover:bg-white bg-orange-400 hover:text-blue-700'>Back</Link>
            </div>
            
          </div>
        )
      }
    </div>
  )
}

export default Card