import UserInfoCard from "./UserInfoCard";
import { useEffect, useCallback, useState } from 'react';
import debounce from 'lodash.debounce';

const UserList = () => {
  const [userData, setUserData] = useState([]);
  const [inputValue, setInputValue] = useState('');
  const [filteredData, setFilteredData] = useState([]);

  useEffect(() => {
    async function getUserData() {
      const data = await fetch("https://jsonplaceholder.typicode.com/users");
      const json = await data.json();
      setUserData(json);
      setFilteredData(json);
    }
    getUserData();
  }, []);

  const filterUsersData = useCallback(
    debounce(() => {
      const filteredUserData = userData.filter(user => user.name.toLowerCase().includes(inputValue.toLowerCase()));
      setFilteredData(filteredUserData);
    }, 500),
    [inputValue, userData]
  );

  useEffect(() => {
    filterUsersData();
    // Cleanup the debounce function
    return () => {
      filterUsersData.cancel();
    };
  }, [inputValue, filterUsersData]);

  const handleInputChange = (e) => {
    setInputValue(e.target.value);
  };

  return (
    <>
      <div className="p-5">
        <input type="text" className="border border-black p-1 rounded-md" value={inputValue} onChange={handleInputChange} />
      </div>
      <div className="p-5 flex flex-wrap">
        {filteredData.length ? filteredData.map(data => <UserInfoCard key={data.id} userInfo={data} />) : "No users found"}
      </div>
    </>
  );
};

export default UserList;
