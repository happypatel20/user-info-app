import { useEffect, useState } from 'react';
import {Link, useParams} from 'react-router-dom'
import Shimmer from './Shimmer';
const UserDetails = () => {

  const {userId} = useParams();
  const [singleUserDetails, setSingleUserDetails] = useState({})
  const [isLoading, setIsLoading] = useState(true)

  useEffect(() => {
    const getSingleUserDetails = async () => {
      const  userData = await fetch(`https://jsonplaceholder.typicode.com/users/${userId}`)
      const jsonData = await userData.json()
      setSingleUserDetails(jsonData);
      setIsLoading(false)
    }
    getSingleUserDetails()
  },[userId])
  const {name, username, email, phone, company, website, address} = singleUserDetails;
  if(isLoading) {
    return <Shimmer />
  }
  return(
    <div className="w-6/12 mx-auto mt-10">
      <table width="100%" className="border">
        <tbody>
        <tr>
          <th className="text-start p-3 border-b" width="20%">Name:</th>
          <td className="text-start border-b">{name}</td>
        </tr>
        <tr>
          <th className="text-start p-3 border-b" width="20%">Username:</th>
          <td className="text-start border-b">{username}</td>
        </tr>
        <tr>
          <th className="text-start p-3 border-b" width="20%">Email:</th>
          <td className="text-start border-b">{email}</td>
        </tr>
        <tr>
          <th className="text-start p-3 border-b" width="20%">Phone:</th>
          <td className="text-start border-b">{phone}</td>
        </tr>
        <tr>
          <th className="text-start p-3 border-b" width="20%">Company:</th>
          <td className="text-start border-b">{company.name}</td>
        </tr>
        <tr>
          <th className="text-start p-3 border-b" width="20%">Website:</th>
          <td className="text-start border-b">{website}</td>
        </tr>
        <tr>
          <th className="text-start p-3 border-b" width="20%">Address:</th>
          <td className="text-start border-b">{address.street}, {address.suite}, {address.zipcode}</td>
        </tr>
        </tbody>
      </table>
      <div className="text-center">
      <Link to="/"><button className="text-sm border mx-auto border-black px-3 py-2 mt-5 rounded-md bg-black text-white hover:bg-white hover:text-black">Back Home</button></Link>
      </div>
    </div>
  )
}

export default UserDetails
