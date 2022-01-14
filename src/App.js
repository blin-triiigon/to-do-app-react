import Header from "./components/Header";
import Form from "./components/Form";
import Todo from "./components/Todo";
import { useState } from "react";
function App() {
  const [todo, setTodo] = useState("");
  const [todoList, setTodoList] = useState([]);

  return (
    <div className="App">
      <Header></Header>
      <Form
        todo={todo}
        setTodo={setTodo}
        todoList={todoList}
        setTodoList={setTodoList}
      ></Form>
      <Todo />
    </div>
  );
}

export default App;
