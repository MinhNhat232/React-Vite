import { useState } from "react";

const TodoNew = (props) => {

    //useState hook
    // const valueInput = "mn7";
    const [inputValue, setInputValue] = useState("");

    const handleClick = () => {
        alert("Click me!");
    }

    const handleOnChange = (name) => {

        setInputValue(name);
    }


    return (
        <div className='todo-new'>
            <input type="text" onChange={(event) => handleOnChange(event.target.value)} />
            <button style={{ cursor: "pointer" }} onClick={() => props.addNewTodo(inputValue)}>Add</button>
            {/* <p>My name is  {inputValue}</p> */}
        </div>
    )
}

export default TodoNew; 
