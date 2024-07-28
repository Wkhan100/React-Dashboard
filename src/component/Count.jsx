import { useState } from "react";




export default function Count() {
  let [islike, setIsLike] = useState(false)
  let [Count, setCount] = useState(0)

  let clickMe = () => {
    setCount(Count + 1);
    setIsLike(!islike);
  }
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
      </div>

    </>
  )
}
