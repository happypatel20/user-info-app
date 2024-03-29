import { Link } from "react-router-dom"

const UserInfoCard = ({userInfo}) => {
  const {name, username, email, id} = userInfo
  return(
    <div className="group w-[calc(100%/5-20px)] m-[10px] py-5 px-14 text-center shadow-md border border-slate-300 rounded-md hover:bg-slate-800 hover:text-white transition-all hover:transition-all">
      <div className="h-full">
        <div className="h-[100px] w-[100px] mx-auto rounded-full bg-slate-300 flex justify-center items-center text-2xl group-hover:text-black">{name.charAt(0)}</div>
        <h2 className="mt-2 text-lg">{name}</h2>
        <p className="mt-1 text-sm">@{username}</p>
        <p className="text-sm"><a href="mailto:happy@gmai.com" className="underline">{email}</a></p>
        <Link to={/users/+id}><button className="text-sm border border-black px-3 py-1 rounded-md bg-black text-white hover:bg-white hover:text-black mt-3 group-hover:bg-white group-hover:text-black">More Details</button></Link>
      </div>
    </div>
  )
}
export default UserInfoCard
