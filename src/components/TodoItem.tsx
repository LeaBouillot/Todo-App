import React from "react";

function TodoItem(props, onDelete) {
  return (
    <div>
      <span>{props.item}</span>
      <button onClick={onDelete}>Delete</button>
    </div>
  );
}

export default TodoItem;
