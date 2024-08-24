import React, { useState } from "react";

function Blog() {
    const [blogData, setBlogData] = useState({ 
        bloggerName: '',
        email: '',
        message: ''
    });
    const handleChange = (e) => {
        const { name, value } = e.target;
        setBlogData({
           ...blogData,
           [name]: value
        });
     };
    const handleSubmit = async (e) => {
        e.preventDefault();
        console.log(blogData);
        try {
            let url = 'http://localhost:8000/posts';
            const response = await fetch(url, {
                method: 'POST',
                headers: {'Content-Type': 'application/json'},
                body: JSON.stringify(blogData),
            });
            const data = await response.json();
            setBlogData({
                bloggerName: '',
                email: '',
                message: ''
            });
            alert('created!')
        } catch (error) {
            console.error('Error:', error);
        }
    };

    return (
        <>
            <form className='row col-6 mt-5' onSubmit={handleSubmit}>
                <label className="form-label">Blogger Name</label>
                <input type="text" className="form-control" name="bloggerName" placeholder="" value={blogData.bloggerName} 
                onChange={handleChange} />
                <label className="form-label">Blogger Email</label>
                <input type="text" className="form-control" name="email" placeholder="" value={blogData.email} 
                onChange={handleChange} />
                <label className="form-label">Blogger Message</label>
                <input type="text" className="form-control" name="message" placeholder="" value={blogData.message} 
                onChange={handleChange}/>
                <button className='mt-5' type="submit">Create User</button>
            </form>
        </>
    );
}
export default Blog;