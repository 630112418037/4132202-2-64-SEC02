import React ,{useState} from "react";

const dom = (
    <>
  <h1>HELLO React !!!!!!!</h1>
  <p>MY name is AUM</p>
  </>
);

function Car() {
  const [color, setColor] = useState("red");
 
  const id = "630112418037";
    return (
      <> 
       {dom}
       <p>ID : {id}</p>
       <p>My color is {color}</p>
       <button
         onClick={() =>{
           setColor("Blue");
         }}
         >
           CHANGE
           </button>
    </>
    );
}


export default Car
 