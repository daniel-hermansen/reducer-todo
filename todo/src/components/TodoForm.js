
import React, { useState} from "react";

const TodoForm = ({ dispatch }) => {
  const [item, setItem] = useState("");

  const handleChanges = e => {
    setItem(e.target.value);
  };

  const submitForm = e => {
    e.preventDefault();
    dispatch({
      type: "ADD_TODO",
      payload: item
    });
    setItem("");
  };

  const clearCompleted = e => {
    e.preventDefault();
    dispatch({
      type: "CLEAR_COMPLETED"
    });
  };

  return (
    <div className="form">
      <form onSubmit={submitForm}>
        <label htmlFor="todo" hidden>
          Todo
        </label>
        <input name="todo" onChange={handleChanges} value={item} />
        <button>Add Todo</button>
        <button onClick={clearCompleted}>Clear Completed</button>
      </form>
    </div>
  );
};

export default TodoForm;