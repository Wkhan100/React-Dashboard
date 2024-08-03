/////////////////////////GET, put, post and Delete with show and hide form also POST and PUt handling separately in table with 2 button and 2 functions

import React, { useState, useEffect } from 'react';
function FormA() {
   const [users, setUsers] = useState([]); //to set user value in table with users variable
   // const [isVisible, setIsVisible] = useState(false); //to show and hide form on add user click
   // const [isEdit, setIsEdit] = useState(false); //show update and create button also calling 2 function for put and post api
   const [formData, setFormData] = useState({ // to set form value data
      first_name: '',
      email: ''
   });
   const [currentUserId, setCurrentUserId] = useState(null);  //to get current userId from table on click of edit or delete
   // handling fetch api to get existing users data
   useEffect(() => {
      const fetchUsers = async () => {
         try {
            const response = await fetch('https://reqres.in/api/users');
            const res = await response.json();
            setUsers(res.data);
         } catch (error) {
            console.error('Error fetching users:', error);
         }
      };
      fetchUsers();
   }, []);
   
   // to track every change in form field
   const handleChange = (e) => {
      const { name, value } = e.target;
      setFormData({
         ...formData,
         [name]: value
      });
   };
   //handling only post request to create new user
   const handleSubmit = async (e) => {
      e.preventDefault();
      try {
         let url = 'https://reqres.in/api/users';
         const response = await fetch(url, {
            method: 'POST',
            headers: {
               'Content-Type': 'application/json',
            },
            body: JSON.stringify(formData),
         });
         setFormData({
            first_name: '',
            email: ''
         });
         const data = await response.json();
         console.log('Success:', data);
         setUsers([...users, data]);
      } catch (error) {
         console.error('Error:', error);
      }
   };
     //handling edit property and setform data on click of edit button
     const handleEdit = (user) => {
      setFormData({
         first_name: user.first_name,
         email: user.email
      });
      setCurrentUserId(user.id);
   };
   //to handle edit/update user only with PUt request
   const handleUpdate = async () => {
      try {
         const response = await fetch(`https://reqres.in/api/users/${currentUserId}`, {
            method: 'PUT',
            headers: { 'Content-Type': 'application/json' },
            body: JSON.stringify(formData)
         });
         const data = await response.json();
         console.log('Success update', data);
         setUsers(users.map(user => (user.id === currentUserId ? data : user))); //this will check user.id equal current userid if found replace with data else user
         setFormData({
            first_name: '',
            email: ''
         });
      } catch (error) {
         console.log(error);
      }
   };
   //handle delet api to delete records form table
   const handleDelete = async (userId) => {
      try {
         await fetch(`https://reqres.in/api/users/${userId}`, {
            method: 'DELETE',
         });
         setUsers(users.filter(user => user.id !== userId));
      } catch (error) {
         console.error('Error deleting user:', error);
      }
   };
   return (
      <div>
         <div className='col-12 mt-5 mb-5' style={{ marginTop: '20px', padding: '10px', border: '1px solid black' }}>
            <h1> Add User with Form!</h1>           
               <form onSubmit={handleSubmit}>
                  <div className='row'>
                     <div className="col-3 mb-3">
                        <label htmlFor="firstname" className="form-label">First Name</label>
                        <input type="text" className="form-control" name="first_name" id="first_name" placeholder="firstname" value={formData.first_name}
                           onChange={handleChange} />
                     </div>
                     <div className="col-3 mb-3">
                        <label htmlFor="email" className="form-label">Email</label>
                        <input type="text" className="form-control" name="email" id="email" placeholder="email" value={formData.email}
                           onChange={handleChange} />
                     </div>
                  </div>
                     <button type="button" className="btn btn-primary" onClick={handleUpdate}>Update</button>
                     <button type="submit" className="btn btn-primary">Create</button>
               </form>
         </div>
         <div className='col-12' style={{ marginTop: '20px', padding: '10px', border: '1px solid black' }}>
            <table className='border w-100'>
               <thead className='border'>
                  <tr className='border'>
                     <th className='border'>Name</th>
                     <th className='border'>Email</th>
                     <th className='border'>Action</th>
                  </tr>
               </thead>
               <tbody className='border'>
                  {users.map((user, i) => (
                     <tr className='border' key={i}>
                        <td className='border'>{user.first_name}</td>
                        <td className='border'>{user.email}</td>
                        <td className='border'>
                           <button onClick={() => handleEdit(user)}>Edit</button>
                           <button onClick={() => handleDelete(user.id)}>Delete</button>
                        </td>
                     </tr>
                  ))}
               </tbody>
            </table>
         </div>
      </div>
   );
}
export default FormA;
