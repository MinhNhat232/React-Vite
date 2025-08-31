import './todo.css';
import TodoNew from './TodoNew';
import TodoData from './TodoData';
import reactLogo from '../../assets/react.svg';
import { useState } from 'react';

const TodoApp = () => {
    const [todoList, setTodoList] = useState([]);




    const addNewTodo = (name) => {
        const newToDo = {
            id: Math.floor(Math.random() * 10000) + 1,
            name: name
        }
        setTodoList([...todoList, newToDo]);
    }

    const deleteTodo = (id) => {
        setTodoList(todoList.filter(item => item.id !== id));
        console.log("ID: ", id);
    }

    return (
        <div className="todo-container">

            <div className="todo-title">My Todo List</div>
            <TodoNew
                addNewTodo={addNewTodo}
            />

            {todoList.length > 0 ?
                <TodoData
                    todoList={todoList}
                    deleteTodo={deleteTodo} //props
                />
                :

                <div className='todo-image'>
                    <img src={reactLogo} className='logo' />
                </div>
            }

        </div>
    )

}
export default TodoApp;