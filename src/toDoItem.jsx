import React from "react";
import {useState} from "react";

function ToDoItem(props)
{
    const [state, setstate ] = useState(false);

    function changes(){
        setstate((prevValue) => {
            return !prevValue;
        });
    }

    return (
    <div onClick={changes}>
        <li style= {{textDecoration: state ? "line-through" : null}}>{props.text}</li>
    </div>
        
    )
}

export default ToDoItem;
