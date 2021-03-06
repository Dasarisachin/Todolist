import react, { useState } from "react";
import TodoList from "./TodoList";

const App = () => {
  const [task, setTask] = useState("");
  const [todos, setTodos] = useState([]);

  const changeHandler = e => {
    setTask(e.target.value)
  }

  const submitHandler = e => {
    e.preventDefault();
    const newTodos = [...todos, task];
    setTodos(newTodos);
    setTask("");
  }
  const deleteHandler = (indexvalue) => {
    const newTodos = todos.filter((todo, index) => index !== indexvalue);
    setTodos(newTodos);
  }
  return (
    <div>
      <center>
        <div className="card">
          <div className="card-body">
            <h5 className="card-title">My ToDo List</h5>
            <form onSubmit={submitHandler}>
              <input type="text" name="task" value={task} onChange={changeHandler} /> <br />
              <input type="submit" value="Add" name="Add" />
            </form>
            <TodoList TodoList={todos} deleteHandler={deleteHandler} />
          </div>
        </div>
      </center>
    </div>
  )
}

export default App