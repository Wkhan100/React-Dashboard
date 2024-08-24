// import React, { useState } from 'react';
// import axios from 'axios';

// const UserForm = () => {
//   const [firstName, setFirstName] = useState('');
//   const [lastName, setLastName] = useState('');

//   const handleSubmit = (e) => {
//     e.preventDefault();
//     axios.post('https://reqres.in/api/users', {
//       first_name: firstName,
//       last_name: lastName
//     })
//     .then(response => {
//       console.log('User created:', response.data);
//       // Optionally, update the user list or perform other actions
//     })
//     .catch(error => {
//       console.error('Error creating user: ', error);
//     });
//   };

//   return (
//     <form onSubmit={handleSubmit}>
//       <input type="text" placeholder="First Name" value={firstName} onChange={(e) => setFirstName(e.target.value)} />
//       <input type="text" placeholder="Last Name" value={lastName} onChange={(e) => setLastName(e.target.value)} />
//       <button type="submit">Create User</button>
//     </form>
//   );
// };

// export default UserForm;


//asyncAwati
import React, { useState } from 'react';

const UserForm = () => {
    const [firstName, setFirstName] = useState('');
    const [lastName, setLastName] = useState('');

    const handleSubmit = async (e) => {
        e.preventDefault(); //prevent page load
        try {
            const response = await fetch('https://reqres.in/api/users', {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json',
                },
                body: JSON.stringify({
                    first_name: firstName,
                    last_name: lastName
                }),
            });

            if (!response.ok) {
                throw new Error('Failed to create user');
            }

            const data = await response.json();
            console.log('User created:', data);
            // Optionally, update the user list or perform other actions
        } catch (error) {
            console.error('Error creating user: ', error);
        }
    };

    return (
        <div className='App mt-10'>
                <form className='row col-6 mt-5' onSubmit={handleSubmit}>
                    <input className='mb-2' type="text" placeholder="First Name" value={firstName} onChange={(e) => setFirstName(e.target.value)} />
                    <input className='mb-2'type="text" placeholder="Last Name" value={lastName} onChange={(e) => setLastName(e.target.value)} />
                    <button className='mb-2' type="submit">Create User</button>
                </form>

                <br></br>
              
        </div>
    );
};

export default UserForm;
