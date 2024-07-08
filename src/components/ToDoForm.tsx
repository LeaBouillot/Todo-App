import React from "react";
import TodoItem from "./TodoItem";

// Delete task
const deleteTask = (index: number) => {
  setTasks(tasks.filter((_, i) => i !== index));
};

// Start todit task
const startEditTask = (index: number) => {
  setEditIndex(index);
  setEditText(tasks[index]);
};

function ToDoForm(props) {
  return (
    <div>
      <h1>To do List</h1>
      {props.todoList.map((item) => (
        <TodoItem
          item={item}
          onDelete={() => deleteTask(index)}
          onEdit={() => startEditTask(index)}
        />
      ))}
    </div>
  );
}

export default ToDoForm;
