import { useState, useEffect } from 'react';

function Home() {
  const [value, setData] = useState([]);

  useEffect(() => {
    fetch('https://reqres.in/api/users')
      .then((res) => res.json())
      .then((response) => {
        console.log(response.data); // Assuming the data is in response.data array
        setData(response.data);
      })
      .catch((error) => {
        console.error('Error fetching data:', error);
      });
  }, []);

  return (
    <>
      <div>
        <h1> user data from Home component!</h1>
        {/* {value.map((user) => (
          <h1 key={user.email}>{user.email} <br/><span>{user.first_name}</span> </h1>
          
        ) )} */}
        <table className='border w-100'>
            <thead>
              <tr>
                <th>First name</th>
                <th>Last name</th>
                <th>email</th>
                <th>Picture</th>
              </tr>
            </thead>
            <tbody className='border'>
            {value.map((user) => (
              <tr className='border' key={user.id}>
              <td>{user.first_name}</td>
              <td>{user.last_name}</td>
              <td>{user.email}</td>
              <td>                                
                <img src={user.avatar} alt={user.title} style={{ width: '100px', height: 'auto' }} />
              </td>
            </tr>
            ))}
            </tbody>
          </table>
      </div>







      {/* <div >
    <h2>User List</h2>
    <table className='border w-100'>
      <thead className='border'>
        <tr>
          <th>ID</th>
          <th>First Name</th>
          <th>Last Name</th>
          <th>Email</th>
          <th>Avatar</th>
        </tr>
      </thead>
      <tbody>
        {value.map((user) => (
          <tr key={user.id}>
            <td>{user.id}</td>
            <td>{user.first_name}</td>
            <td>{user.last_name}</td>
            <td>{user.email}</td>
            <td>
              <img src={user.avatar} alt={`${user.first_name} ${user.last_name}`} style={{ width: '50px', height: '50px', borderRadius: '50%' }} />
            </td>
          </tr>
        ))}
      </tbody>
    </table>
  </div> */}



    </>
  );


}
export default Home;