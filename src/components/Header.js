import { Link } from "react-router-dom"
const Header = () => {
  return (
    <div className="shadow-lg shadow-gray-300">
     <nav className="bg-[#f3f4f6] py-5 px-36">
       <div className="flex justify-between">
        <div className="flex gap-20 items-center">
          <Link to="/">
            <li className="list-none text-md hover:text-blue-700 lg:block sm:hidden text-[30px] font-extrabold">FLASHCARDS</li>
          </Link>
        </div>
        <div className="flex gap-20 items-center ">
          <Link to="/dashboard">
            <button className="text-md font-normal border-2 border-blue-700 rounded-2xl px-4 py-2 hover:bg-white bg-orange-400 hover:text-blue-700">Create New Card</button>
          </Link>
        </div>
       </div>
     </nav>
    </div>
  )
}

export default Header