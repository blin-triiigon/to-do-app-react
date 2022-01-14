import Form from "./Form";
import style from "../style.module.css";
const Todo = (todo, setTodo, todoList, setTodoList) => {
  return (
    <div className={style.container}>
    <div className={style.todoItem}>
     
      <h3 className={style.todoname}>1. Wash the dishes</h3>
      <button className={style.deletebutton}>Delete</button>
    </div>
    </div>
  );
};

export default Todo;
