import './components/todo/todo.css';
import TodoNew from './components/todo/TodoNew';
import TodoData from './components/todo/TodoData';
import reactLogo from './assets/react.svg';

const App = () => {

  const name = "Minh Nhat Vu";
  const age = 25;
  const data = {
    address: "123 Le Loi",
    country: "Vietnam"
  }

  return (
    <>
      <div className="todo-container">

        <div className="todo-title">My Todo List</div>
        <TodoNew />
        <TodoData
          name={name} //props
          age={age} //props
          data={data} //props
        />
        <div className='todo-image'>
          <img src={reactLogo} className='logo' />
        </div>

      </div>
    </>
  )
}

export default App
