// import { useState, useEffect } from "react";

// function Product() {
//     const [photos, setPhotos] = useState([]);

//     useEffect(() => {
//         fetch('https://jsonplaceholder.typicode.com/photos')
//             .then((res) => {
//                 return res.json();
//             })
//             .then((data) => {
//                 console.log(data);
//                 setPhotos(data);
//             });
//     }, []);

//     return (
//         <div>
//             {photos.map((photo) => (
//                 <img key={photo.id} src={photo.url} alt={photo.title} width={100} />
//             ))}
//         </div>

//     );
// }

// export default Product;


import React, { useState, useEffect } from "react";

function Product() {
    const [photos, setPhotos] = useState([]);

    useEffect(() => {
        fetch('https://jsonplaceholder.typicode.com/photos')
            .then((res) => res.json())
            .then((data) => {
                console.log(data);
                setPhotos(data.slice(0, 10)); // Restricting to first 10 entries for example
            });
    }, []);

    return (
        <div className="mt-5 mb-5">
            <h2>Photos</h2>
            <table className="border w-100 mt-5 mb-5">
                <thead>
                    <tr>
                        <th>ID</th>
                        <th>Title</th>
                        <th>Thumbnail</th>
                    </tr>
                </thead>
                <tbody>
                    {photos.map((photo) => (
                        <tr key={photo.id}>
                            <td>{photo.id}</td>
                            <td>{photo.title}</td>
                            <td>
                                <img src={photo.thumbnailUrl} alt={photo.title} style={{ width: '100px', height: 'auto' }} />
                            </td>
                        </tr>
                    ))}
                </tbody>
            </table>
        </div>
    );
}

export default Product;
