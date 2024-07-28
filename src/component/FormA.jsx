// form with get and post for User info two field
import React, { useState, useEffect } from 'react';

function FormA() {
    //post request A data
    // Empty dependency array means this effect runs once after the initial render
    const [formData, setFormData] = useState({
        name: '',
        job: ''
    });

    const handleChange = (e) => {
        const { name, value } = e.target;
        setFormData({
            ...formData,
            [name]: value
        });
    };

    const handleSubmit = async (e) => {
        //check form data in console
        // const response = formData;
        // console.log('response', response);
       e.preventDefault();
       try {
            const response = await fetch('https://reqres.in/api/users', {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json',
                },
                body: JSON.stringify(formData),
            });
            setFormData({
                name: '',
                job: ''
            });
            const data = await response.json();
            console.log('Success:', data);
        } catch (error) {
            console.error('Error:', error);
             }
    };

    //get data 
    const [users, setUsers] = useState([]);

    useEffect(() => {
        const fetchUsers = async () => {
            try {
                const response = await fetch('https://reqres.in/api/users');
                const res = await response.json();
                console.log('res', res);  //check res how data is coming
                setUsers(res.data);
            } catch (error) {
                console.error('Error fetching users:', error);
            }
        };
        fetchUsers();
    }, []);

    return (
        <div>
            <h2>User Form!</h2>
            <form onSubmit={handleSubmit}>
            <div className="col-6 mb-3">
                <label htmlFor="exampleFormControlInput1" className="form-label">Name</label>
                <input
                    type="text"
                    className="form-control"
                    name="name"
                    id="exampleFormControlInput1"
                    placeholder="name"
                    value={formData.name}
                    onChange={handleChange}
                />
            </div>
            <div className="col-6 mb-3">
                <label htmlFor="exampleFormControlTextarea1" className="form-label">Job</label>
                <input
                    type="text"
                    className="form-control"
                    name="job"
                    id="exampleFormControlInput1"
                    placeholder="job name"
                    value={formData.job}
                    onChange={handleChange}
                />
            </div>
            <button type="submit" className="btn btn-primary">Submit</button>
            <button type="button" className="btn btn-secondary">Cancel</button>
        </form>

            <h1>Users</h1>
            <table className='border w-100'>
                <thead className='border'>
                    <tr className='border'>
                        <th className='border'>ID</th>
                        <th className='border'>Name</th>
                        <th className='border'>Email</th>
                        <th className='border'>Action</th>
                    </tr>
                </thead>
                <tbody className='border'>
                    {users.map((user) => (
                        <tr className='border' key={user.id}>
                            <td className='border'>{user.id}</td>
                            <td className='border'>{user.first_name}</td>
                            <td className='border'>{user.email}</td>
                            <td className='border'><button>Edit</button> <button>Delete</button></td>
                        </tr>
                    ))}
                </tbody>
            </table>
        </div>
    );
}

export default FormA;
 
