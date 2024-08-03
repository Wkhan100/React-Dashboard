import { useState } from "react";



export default function Count() {
  let [islike, setIsLike] = useState(false)
  let [Count, setCount] = useState(0)

  let clickMe = () => {
    setCount(Count + 1);
    setIsLike(!islike);
  }

  //to show and hide form also to set edit property true or false to create and update
  const [isVisible, setIsVisible] = useState(true);

  const toggleVisibility = () => {
    setIsVisible(!isVisible);
  };
  return (
    <>
      <div className="col-12">
        <h3 onClick={clickMe}>
          {
            islike ? (<i className="fa-regular fa-heart"></i>)
              : (<i className="fa-solid fa-heart"></i>)
          }
        </h3>
        <p>{Count}</p>

        <h1>Show and hide div on click of button below</h1>
        {/* Button to toggle the visibility */}
        <button onClick={toggleVisibility}>
          {isVisible ? 'Hide' : 'Show'} Div
        </button>
        {/* Conditionally render the div based on isVisible */}
        {isVisible && (
          <div>
            This is a toggled div!
          </div>
        )}
      </div>

    </>
  )
}
