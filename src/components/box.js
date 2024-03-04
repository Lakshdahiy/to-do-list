import React from "react";
import Item from "./item";


const Box=(props)=>{
    const items=props.data.map(
        (singleData,index)=>{
            return <Item removeHandle={props.removeHandle} id={index} items={singleData.items}/>
        }
    )
    return(
        <div className="p-3" >
            {items}

        </div>
    )
}
export default Box;