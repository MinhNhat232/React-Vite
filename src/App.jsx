import './components/todo/todo.css';
import TodoNew from './components/todo/TodoNew';
import TodoData from './components/todo/TodoData';
import reactLogo from './assets/react.svg';
import { useState } from 'react';

const App = () => {

  const [todoList, setTodoList] = useState([
    { id: 1, name: "Todo 1" },
    { id: 2, name: "Todo 2" },
    { id: 3, name: "Todo 3" }
  ]);

  const name = "Minh Nhat Vu";
  const age = 25;
  const data = {
    address: "123 Le Loi",
    country: "Vietnam"
  }

  const addNewTodo = (name) => {
    alert("Add new todo: " + name);
  }



  return (
    <>
      <div className="todo-container">

        <div className="todo-title">My Todo List</div>
        <TodoNew
          addNewTodo={addNewTodo}
        />
        <TodoData
          name={name} //props
          age={age} //props
          data={data} //props
          todoList={todoList} //props
        />
        <div className='todo-image'>
          <img src={reactLogo} className='logo' />
        </div>

      </div>
    </>
  )
}

export default App
