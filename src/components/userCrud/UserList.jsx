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
        console.log("value", value);
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
      <h2>User List with json server api data!</h2>
        {/* {users.map(user => (
          <li key={user.id}>
            {user.full_name} {user.email}
            </li>
        ))} */}

<table className='border w-100'>
                <thead className='border'>
                    <tr className='border'>
                        <th className='border'>UserName</th>
                        <th className='border'>Country</th>
                        <th className='border'>Email</th>
                        <th className='border'>Action</th>
                    </tr>
                </thead>
                <tbody className='border'>
                    {users.map((user) => (
                        <tr className='border' key={user.id}>
                            <td className='border'>{user.username}</td>
                            <td className='border'>{user.country}</td>
                            <td className='border'>{user.email}</td>
                            <td className='border'>
                                <button >Edit</button>
                                <button >Delete</button>
                            </td>
                          </tr>
                      ))}
                </tbody>
        </table>                 
    </div>
  );
};

export default UserList;
