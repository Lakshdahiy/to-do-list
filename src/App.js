import React, { useState } from "react";
import Header from "./components/header";
import Form from "./components/form";
import "./index.css";
import Box from "./components/box";
import Item from "./components/item";
import TodoList from "./components/TodoList";

function App() {
  let [todo, setTodo] = useState([]);

  let addtodohandler = (item) => {

    setTodo([...todo, item ]);
  };
  return (
    <div className="bg-black h-screen p-3">
      <div className="rounded mx-auto max-w-[750px] min-h-[650px] shadow-2xl bg-white ">
        <Form handler={addtodohandler}>addtodohandler</Form>
        <TodoList props={todo} ></TodoList>

      </div>
    </div>
  );
}

export default App;
