import React, { createContext, useReducer, useContext } from "react";

// Create Context
const TodoContext = createContext();

// Initial State
const initialState = {
  todos: [],
  input: "",
  editId: null,
  editInput: "",
};

// Reducer Function
const reducer = (state, action) => {
  switch (action.type) {
    case "ADD_TODO":
      return { ...state, todos: [action.payload, ...state.todos], input: "" };
    case "DELETE_TODO":
      return {
        ...state,
        todos: state.todos.filter((todo) => todo.id !== action.payload),
      };
    case "UPDATE_TODO":
      return {
        ...state,
        todos: state.todos.map((todo) =>
          todo.id === action.payload.id
            ? { ...todo, msg: action.payload.msg }
            : todo
        ),
        editId: null,
        editInput: "",
      };
    case "TOGGLE_TODO":
      return {
        ...state,
        todos: state.todos.map((todo) =>
          todo.id === action.payload ? { ...todo, tick: !todo.tick } : todo
        ),
      };
    case "SET_INPUT":
      return { ...state, input: action.payload };
    case "SET_EDIT_ID":
      return { ...state, editId: action.payload };
    case "SET_EDIT_INPUT":
      return { ...state, editInput: action.payload };
    default:
      return state;
  }
};

// TodoProvider Component
const TodoProvider = ({ children }) => {
  const [state, dispatch] = useReducer(reducer, initialState);

  return (
    <TodoContext.Provider value={{ state, dispatch }}>
      {children}
    </TodoContext.Provider>
  );
};

// Custom Hook to Use Context
const useTodo = () => useContext(TodoContext);

export { useTodo, TodoProvider };
