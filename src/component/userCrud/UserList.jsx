//asynAwait userlist with json server data
import React, { useState, useEffect } from 'react';

const UserList = () => {
  const [users, setUsers] = useState([]);

  useEffect(() => {
    const fetchUsers = async () => {
      try {
        // const response = await fetch('https://reqres.in/api/users');
        const response = await fetch('http://localhost:8000/user');
        if (!response.ok) {
          throw new Error('Failed to fetch users');
        }
        const value = await response.json();
        console.log(value);
        // setUsers(value.data); // Assuming API response has a 'data' field containing users
        setUsers(value); // Assuming API response 
      } catch (error) {
        console.error('Error fetching data: ', error);
      }
    };

    fetchUsers();
  }, []);

  return (
    <div className='App mt-10'>
      <h2>User List</h2>
      <ul>
        {users.map(user => (
          <li key={user.id}>
            {/* {user.first_name} {user.last_name} */}
            {user.full_name} {user.email}
            </li>
        ))}
      </ul>
    </div>
  );
};

export default UserList;
