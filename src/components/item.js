import React, { useState } from "react";


const Item=(props)=>{
    const[done,setDone]=useState(false);
    return(
        <div onClick={()=>setDone(!done)} className={`${done===true? 'line-through':''} select-none cursor-pointer w-full border-b-2 flex justify-between`}>
            
            <div>
                <span>
                    {props.Item}</span>
                </div>
            {/* <div onClick={()=>props.removeHandle(props.id)}> */}
                <button className=" font-bold rounded border bg-red-500 hover:bg-red-100">Trash</button>
            </div>

            

        // </div>
    )
}
export default Item;