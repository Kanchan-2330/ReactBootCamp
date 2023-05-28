import React from "react";
const Hello1 = (props) => {
    // console.log(props);
    const styling = {
      backgroundColor: props.color,
      padding: props.padding,
      fontSize:props.font,
      cursor: "pointer",
    };
    return (
      <div>
        <h1>This is another component</h1>
        <button style={styling}>Button1</button>
        <button style={styling}>Button2</button>
        <button style={styling}>Button3</button>
      </div>
    );
  };
  
  export default Hello1;