import './components/todo/todo.css';
import TodoNew from './components/todo/TodoNew';
import TodoData from './components/todo/TodoData';
import reactLogo from './assets/react.svg';
import { useState } from 'react';

const App = () => {

  const [todoList, setTodoList] = useState([

  ]);




  const addNewTodo = (name) => {
    const newToDo = {
      id: Math.floor(Math.random() * 10000) + 1,
      name: name
    }
    setTodoList([...todoList, newToDo]);
  }



  return (
    <>
      <div className="todo-container">

        <div className="todo-title">My Todo List</div>
        <TodoNew
          addNewTodo={addNewTodo}
        />

        {todoList.length > 0 ?
          <TodoData
            todoList={todoList} //props
          />
          :

          <div className='todo-image'>
            <img src={reactLogo} className='logo' />
          </div>
        }



        {/* {todoList.length > 0 &&
          <TodoData
            todoList={todoList} //props
          />
        }
        {todoList.length === 0 &&
          <div className='todo-image'>
            <img src={reactLogo} className='logo' />
          </div>
        } */}

      </div>
    </>
  )
}

export default App
