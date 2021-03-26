import "./App.css";
import { useState } from "react";
import { useSelector, useDispatch } from "react-redux";
import {
  increment,
  decrement,
  login,
  userData,
  editName,
  editTodo,
  deleteTodo,
} from "./Action/index";

function App() {
  const counter = useSelector((state) => state.counterReducer);
  const isLogin = useSelector((state) => state.loginReducer);
  const data = useSelector((state) => state.userDataReducer);

  const dispatch = useDispatch();

  const [firstName, setFirstName] = useState("");

  const changeInFirstName = (e) => {
    setFirstName(e.target.value);
  };

  const submitForm = (e) => {
    e.preventDefault();
    dispatch(userData(firstName));
    setFirstName("");
  };

  const editNameComponent = (index, dat) => {
    const obj = {
      change: {
        userName: "changed name",
        lastName: "changed name",
        todo: "changed name",
      },
      ind: index,
    };
    dispatch(editName(obj));
  };

  const editTodoComponent = (index, dat) => {
    const obj = {
      change: {
        userName: "changed name",
        lastName: "changed name",
        todo: "changed name",
      },
      ind: index,
    };
    dispatch(editTodo(obj));
  };
  const dispatchTodoDelete = (index, dat) => {
    dispatch(deleteTodo(index));
  };

  return (
    <div className="App">
      <h1>hello redux</h1>
      <p>redux counter = {counter}</p>
      <button onClick={() => dispatch(increment())}>add</button>
      <button onClick={() => dispatch(decrement())}>minus</button>
      <hr />
      <h1>see login </h1>
      <button onClick={() => dispatch(login())}>
        click to see login is true or not
      </button>
      {isLogin ? <h3>login is true</h3> : ""}
      {isLogin ? <h1>true</h1> : <h1>false</h1>}
      <hr />

      <form onSubmit={(e) => submitForm(e)}>
        <label>
          Name:
          <input
            type="text"
            name="name"
            value={firstName}
            onChange={changeInFirstName}
          />
        </label>
        <button type="submit">submit</button>
      </form>
      <p>{firstName}</p>
      {data.map((dat, index) => {
        return (
          <div className="border" key={index}>
            <p>
              {dat.userName} {dat.lastName}
            </p>
            <button onClick={(e) => editNameComponent(index, dat)}>
              edit name
            </button>
            <p>todo: {dat.todo}</p>
            <button onClick={(e) => editTodoComponent(index, dat)}>
              edit todo
            </button>
            <button onClick={(e) => dispatchTodoDelete(index, dat)}>
              delete todo
            </button>
          </div>
        );
      })}
    </div>
  );
}

export default App;
