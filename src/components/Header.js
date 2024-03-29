import { Link } from "react-router-dom"

const Header = () => {
  return(
    <header className="bg-slate-800 text-white flex justify-between items-center px-5 py-2">
      <h1 className="m-0 text-xl">UserInfoApp</h1>
      <ul className="flex">
        <li className="p-2"><Link to="/"> Home</Link></li>
        <li className="p-2"><Link to={"about"}>About Us</Link></li>
      </ul>
    </header>
  )
}

export default Header
