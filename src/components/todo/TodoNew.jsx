const TodoNew = (props) => {

    const handleClick = () => {
        alert("Click me!");
    }

    const handleOnChange = (name) => {
        console.log("On change input: " + name);
    }


    return (
        <div className='todo-new'>
            <input type="text" onChange={(event) => handleOnChange(event.target.value)} />
            <button style={{ cursor: "pointer" }} onClick={() => props.addNewTodo("New Todo")}>Add</button>
        </div>
    )
}

export default TodoNew;
