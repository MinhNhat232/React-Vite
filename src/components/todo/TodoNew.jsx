import { useState } from "react";

const TodoNew = (props) => {
    const { addNewTodo } = props;

    //useState hook
    // const valueInput = "mn7";
    const [inputValue, setInputValue] = useState("");

    const handleClick = () => {
        addNewTodo(inputValue);
        setInputValue("");
    }

    const handleOnChange = (name) => {

        setInputValue(name);
    }


    return (
        <div className='todo-new'>
            <input type="text" onChange={(event) => handleOnChange(event.target.value)} value={inputValue} />
            <button style={{ cursor: "pointer" }} onClick={handleClick}>Add</button>

        </div>
    )
}

export default TodoNew; 
