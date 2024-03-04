
import React from 'react'

export default function TodoList(props) {
    let todoList = props.props 
    console.log(todoList)
  return (
    <div>
        {todoList.map((element,i) => {
            return(
                <div className='w-full h-8 flex justify-around'>
                    <div className='p-8 '>
                        {i+1}
                    </div>
                    <div className='p-8'>
                        {element}
                    </div>
                    <button className="button bg-red" onClick={(e)=>{
                        
                    }}>delete</button>
                </div>
            )
        })}
    </div>
  )
}
