import { useEffect, useState } from "react";
// if else basis 
export default function NewCrud() {
    const [users, setUsers] = useState([]);
    const [formValue, setFormValue] = useState({
        name: '',
        username: '',
        email: ''
    });
    const [currentId, setCurrentId] = useState(null);

    useEffect(() => {
        fetch("https://jsonplaceholder.typicode.com/users")
            .then(response => response.json())
            .then(data => {
                console.log("Data", data);
                setUsers(data);
            });
    }, []);

    const handleSubmit = async (e) => {
        alert(currentId);
        e.preventDefault();
        if (currentId === null) {
            let res = await fetch("https://jsonplaceholder.typicode.com/users", {
                method: "POST",
                headers: { 'Content-Type': 'application/json' },
                body: JSON.stringify(formValue)
            });
            const data = await res.json();
            console.log('Success:', data);
            setUsers([...users, data]);
        } else {
            let res = await fetch(`https://jsonplaceholder.typicode.com/users/${currentId}`, {
                method: "PUT",
                headers: { 'Content-Type': 'application/json' },
                body: JSON.stringify(formValue)
            });
            const data = await res.json();
            console.log('Updated:', data);
            setUsers(users.map(user => (user.id === currentId ? data : user)));
            setCurrentId(null); // Reset currentId after update
        }
        setFormValue({ name: '', username: '', email: '' });
    };

    const handleChange = (e) => {
        const { name, value } = e.target;
        setFormValue({ ...formValue, [name]: value });
    };

    const handleDelete = async (userId) => {
        console.log(userId);
        try {
            await fetch(`https://jsonplaceholder.typicode.com/users/${userId}`, {
                method: 'DELETE'
            });
            setUsers(users.filter(user => user.id !== userId));
        } catch (e) {
            console.log("error", e);
        }
    };

    const handleEdit = (user) => {
        setFormValue({
            name: user.name,
            username: user.username,
            email: user.email
        });
        setCurrentId(user.id);
    };

    return (
        <>
            <form onSubmit={handleSubmit}>
                <div className="row">
                    <div className="col">
                        <label htmlFor="form-control">Name</label>
                        <input type="text" className="form-control" name="name" value={formValue.name} onChange={handleChange} />
                    </div>
                    <div className="col">
                        <label htmlFor="form-control">UserName</label>
                        <input type="text" className="form-control" name="username" value={formValue.username} onChange={handleChange} />
                    </div>
                    <div className="col">
                        <label htmlFor="form-control">Email</label>
                        <input type="email" className="form-control" name="email" value={formValue.email} onChange={handleChange} />
                    </div>
                </div>
                <button type="submit" className="btn btn-success">{currentId ? 'Update' : 'Create'}</button>
            </form>
            <table className="table">
                <thead>
                    <tr>
                        <th>Name</th>
                        <th>Username</th>
                        <th>Email</th>
                        <th>Action</th>
                    </tr>
                </thead>
                <tbody>
                    {users.map(user => (
                        <tr key={user.id}>
                            <td>{user.name}</td>
                            <td>{user.username}</td>
                            <td>{user.email}</td>
                            <td>
                                <button className="btn btn-success" onClick={() => handleEdit(user)}>Edit</button>
                                <button className="btn btn-danger" onClick={() => handleDelete(user.id)}>Delete</button>
                            </td>
                        </tr>
                    ))}
                </tbody>
            </table>
        </>
    );
}
