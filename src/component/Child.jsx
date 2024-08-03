import React from 'react'; //Passing Data from Parent to Child

const Child = ({ data }) => {
    return(
        <div>
      <p>{data}</p>
    </div>
    );
}

export default Child;

//Passing Data from Child to Parent
// import React from 'react';

// const Child = ({ onSendData }) => {
//   const sendData = () => {
//     onSendData('Hello from Child');
//   };

//   return (
//     <div>
//       <button onClick={sendData}>Send Data to Parent</button>
//     </div>
//   );
// };

// export default Child;