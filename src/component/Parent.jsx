import React from 'react'; //Passing Data from Parent to Child
import Child from './Child'; 

const Parent = () => {
  const parentData = 'Hello from Parent';

  return (
    <>
    <div>
      <Child data={parentData} />
    </div>
  </>
  );
};

export default Parent;


//Passing Data from Child to Parent

// import React, { useState } from 'react';
// import Child from './Child';

// const Parent = () => {
//   const [childData, setChildData] = useState('');

//   const handleDataFromChild = (data) => {
//     setChildData(data);
//   };

//   return (
//     <div>
//       <Child onSendData={handleDataFromChild} />
//       <p>Data from child: {childData}</p>
//     </div>
//   );
// };

// export default Parent;