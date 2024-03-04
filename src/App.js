import React, { useState } from "react";
import Header from "./components/header";
import Form from "./components/form";
import "./index.css"
import Box from "./components/box";
import Item from "./components/item";

function App() {
  const[todo,setTodo]=useState([]);

  const addtodohandler=(items)=>{
    setTodo(
      [
        todo,
        {items}      ]
    )

  }
  return (
    <div className="bg-black h-screen p-3">
      <div className="rounded mx-auto max-w-[750px] min-h-[650px] shadow-2xl bg-white ">
        <Form handler={addtodohandler} />
        {/* <Box data={todo} removeHandle={removetodo}/> */}
        <Item/>
      </div>
    </div>

  );
}

export default App;
