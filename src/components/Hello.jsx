// import React from 'react'

// function Hello(props) {
//    console.log(props.response);
//   // const styling={
//   // backgroundColor:props.color,
//   // padding:props.padding,
//   // fontSize:'20px',
//   // cursor:'pointer'
//   // };
//   return (
//     <div> 
//      {/* {props.value1}
//       {console.log(props.value3)} */}
//       {props.response}
      
// <h1>Hello!! welcome to react bootcamp! Day {props.value}</h1>
// {/* <button style={styling}>Button1</button>
// <button style={styling}>Button2</button>
// <button style={styling}>Button3</button>
// <button style={styling}>Learn More</button> */}

//     </div>
//   )
// }

// export default Hello

import React from "react";

function Hello(props) {
  console.log(props.response.title);
  return (
    <div>
      {props.response.title}
      {props.response.description}
      <h1>this is day {props.value} of bootcamp</h1>
    </div>
  );
}

export default Hello;