import logo from './logo.svg';
import './App.css';
import { useEffect, useState } from "react";
import Hello from './components/Hello';
import Hello1 from './components/Hello1';

 function App() {
  const [count, setcount] = useState(0);
  //useEffectKeyword
  useEffect(()=>{
    (async()=>{//IIfe async function
      //Use -effect Logic
      const pr = await fetch("https://fakestoreapi.com/products/1");
     const response = await pr.json();
     setcount(response);
    })();
  },[]//dependency array
  );
  
  // async function fn (){
  //   const pr = await fetch("https://fakestoreapi.com/products/1");
  //   const response = await pr.json()
  //   setcount(response)
  // }
  // fn()
  const arr = [1, 2, 4, 5, 6, 7, 3, 5, 6, 7, 8, 8];
  const obj = {
    key1: "value1",
    key2: "value2",
  };
  // const inc = () => {
  //   setcount(count + 1);
  // };
  // const dec = () => {
  //   setcount(count - 1);
  // };
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
      
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a>
        <Hello value="10" value1={arr} value3={obj} response={count} />
        <Hello1 value="100" color="yellow" padding="2px" font="35px" />
        {/* <button onClick={inc}>Increment</button>
        <button onClick={dec}>Decrement</button>
        Count - {count} */}
      </header>
    </div>
  );
}

export default App;
