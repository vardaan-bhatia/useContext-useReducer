import React from "react";
import { useTodo } from "./TodoContext";

const ListItem = () => {
  const { state, dispatch } = useTodo();

  const handleAdd = () => {
    if (state.input.trim()) {
      const newTodo = {
        id: Date.now(),
        msg: state.input,
        tick: false,
      };
      dispatch({ type: "ADD_TODO", payload: newTodo });
    }
  };

  const handleEditClick = (id, msg) => {
    dispatch({ type: "SET_EDIT_ID", payload: id });
    dispatch({ type: "SET_EDIT_INPUT", payload: msg });
  };

  const handleUpdate = (id) => {
    if (state.editInput.trim()) {
      dispatch({ type: "UPDATE_TODO", payload: { id, msg: state.editInput } });
    } else {
      dispatch({ type: "DELETE_TODO", payload: id });
    }
  };

  return (
    <div className="w-full max-w-2xl h-[calc(100vh-6rem)] mx-auto flex flex-col">
      <div className="flex items-center mb-4">
        <textarea
          value={state.input}
          placeholder="Add item here..."
          onChange={(e) =>
            dispatch({ type: "SET_INPUT", payload: e.target.value })
          }
          onKeyDown={(e) => {
            if (e.key === "Enter") {
              handleAdd();
            }
          }}
          className="flex-grow p-2 border border-gray-300 rounded mr-2 resize-none overflow-auto"
          rows="1"
          style={{ overflow: "hidden", resize: "none" }}
        />
        <button
          onClick={handleAdd}
          className="bg-blue-500 text-white p-2 rounded hover:bg-blue-600"
        >
          Add
        </button>
      </div>

      {state.todos.length === 0 ? (
        <p className="text-center text-gray-500">Add todo...</p>
      ) : (
        <ul className="flex flex-col space-y-2 overflow-y-auto flex-grow">
          {state.todos.map((e) => (
            <li
              key={e.id}
              className="flex items-center p-2 border-b border-gray-300"
            >
              <input
                type="checkbox"
                checked={e.tick}
                onChange={() =>
                  dispatch({ type: "TOGGLE_TODO", payload: e.id })
                }
                className="mr-2"
              />
              {state.editId === e.id ? (
                <input
                  type="text"
                  value={state.editInput}
                  onChange={(e) =>
                    dispatch({
                      type: "SET_EDIT_INPUT",
                      payload: e.target.value,
                    })
                  }
                  onBlur={() => handleUpdate(e.id)}
                  onKeyDown={(c) => {
                    if (c.key === "Enter") {
                      handleUpdate(e.id);
                    }
                  }}
                  autoFocus
                  className="flex-grow p-2 border border-gray-300 rounded"
                />
              ) : (
                <span
                  className={`flex-grow overflow-hidden ${
                    e.tick ? "line-through text-gray-500" : ""
                  }`}
                  style={{ wordBreak: "break-all" }}
                >
                  {e.msg}
                </span>
              )}
              <div className="ml-80">
                <button
                  onClick={() => handleEditClick(e.id, e.msg)}
                  className="ml-2 mr-2 text-blue-500 hover:text-blue-600"
                >
                  <i className="fa fa-pencil" aria-hidden="true"></i>
                </button>
                <button
                  onClick={() =>
                    dispatch({ type: "DELETE_TODO", payload: e.id })
                  }
                  className="ml-2 text-red-500 hover:text-red-600"
                >
                  <i className="fa fa-trash" aria-hidden="true"></i>
                </button>
              </div>
            </li>
          ))}
        </ul>
      )}
    </div>
  );
};

export default ListItem;
