// import { useState } from "react";

// export default function SearchBox() {
//     let [city, setCity] = useState("");
//     const API_URL = "https://api.weatherapi.com/v1/current.json";
//     const apiKey = 'd6771bfc7e41414a99b124041242906';

//     let getWeatherInfo = async () => {
//         const response = await fetch(`${API_URL}?key=${apiKey}&q=${encodeURIComponent(city)}`);
//         let jsonresponse = await response.json();
//         console.log(jsonresponse);

//     };

//     let handleSubmit = (evt) => {
//         evt.preventDefault();
//         console.log(city);
//         setCity("");
//     };

//     return (
//         <div className="container">
//             <h3>search for Weather</h3>
//             <form onSubmit={handleSubmit}>
//                 <input type="text" />
//                 <button className="btn btn-primary" type="submit">search</button>
//             </form>

//         </div>
//     );
// }




import { useState } from 'react';

function SearchBox() {
    const API_URL = "https://api.weatherapi.com/v1/current.json";
    const apiKey = 'd6771bfc7e41414a99b124041242906';

    let getWeatherInfo = async () => {
        // let response = await fetch(`${API_URL}?q=${city}&appid=${apiKey}`);
        const response = await fetch(`${API_URL}?key=${apiKey}&q=${encodeURIComponent(city)}`);
        let jsonResponse = await response.json();
        console.log(jsonResponse);
    };
    let [city, setCity] = useState("");
    let handleChange = (evt) => {
        setCity(evt.target.value);
    };

    let handleSubmit = (evt) => {
        evt.preventDefault();
        console.log(city);
        setCity("");
        getWeatherInfo();
    };
    return (
        <div className='App mt-10'>
            <h1>Search for the weather through search box </h1>
            <form onSubmit={handleSubmit}>
                <input id="City" label="City Name" variant="outlined" required value={city} onChange={handleChange} />
                <br></br>
                <br></br>
                <button className="btn btn-primary">Search</button>
            </form>
        </div>

    );
}
export default SearchBox;