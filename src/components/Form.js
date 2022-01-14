import styles from "../style.module.css";

const Form = ({ todo, setTodo, todoList, setTodoList }) => {
  const handleChange = (event) => {
    setTodo(event.target.value);
    console.log(todo);
  };
  const handleSubmit = (event) => {
    event.preventDefault();
    setTodoList([...todoList, todo]);
    console.log(todoList);
  };
  return (
    <div className={styles.todoform}>
      <form action="" onSubmit={handleSubmit}>
        <div className={styles.container1}>
          <input
            className={styles.todoinput}
            placeholder="Add Here..."
            type="text"
            value={todo}
            onChange={handleChange}
          />
        </div>
        <div className={styles.row}>
        <button className={styles.todobutton} type="submit">
          Submit
        </button>
        </div>
      </form>
      <h2 className={styles.todotitle}>Your To Do List</h2>
    </div>
  );
};

export default Form;
