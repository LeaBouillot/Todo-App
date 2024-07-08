import { useState, useEffect } from "react";
import ToDoForm from "./components/ToDoForm";

function App() {
  const [todo, setTodo] = useState("");
  const [todoList, setTodoList] = useState([]);
  const addItem = () => {
    setTodoList([...todoList, todo]); // continue à ajouter todo sur le todoList precedent (...todoList)
    setTodo("");
  };

  //local storage setItem
  useEffect(() => {
    const storedList = JSON.parse(localStorage.getItem("todoList")) || [];
    setTodoList(storedList);
  }, []);

  useEffect(() => {
    localStorage.setItem("todoList", JSON.stringify(todoList));
  }, [todoList]);

  return (
    <>
      <main>
        <input
          value={todo}
          type="text"
          onChange={(e) => setTodo(e.target.value)}
        />
        <button onClick={addItem}>Add</button>
        <ToDoForm todoList={todoList} />
      </main>
    </>
  );
}

export default App;

//utiliser props  <ToDoForm todoList={todoList} />: transferer les dtodoList de <App> vers <ToDoForm>
