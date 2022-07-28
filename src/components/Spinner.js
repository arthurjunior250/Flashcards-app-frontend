import { RiLoader4Fill } from "react-icons/ri";

const Spinner = () => {
  return (
    <div className='h-screem bg-transparent pt-[30vh] w-10 m-auto'>
      <RiLoader4Fill className="spinner" size={60} color='blue' />
    </div>
  );
};

export default Spinner;
