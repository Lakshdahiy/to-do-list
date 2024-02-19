import React from "react";

const Form=()=>{
    return(
        <form>
            <input type="text" placeholder="enter your task" className="task-input"/>
            <button className="button-add" type="submit" >Add</button>
        </form>
    )
}
export default Form;