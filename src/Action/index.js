export const increment = () => {
  return {
    type: "INCREMENT",
  };
};

export const decrement = () => {
  return {
    type: "DECREMENT",
  };
};

export const login = () => {
  return {
    type: "LOGIN",
  };
};

export const userData = (firstName) => {
  return {
    type: "USERDATAUPDATE",
    payload: firstName,
  };
};

export const editName = (obj) => {
  return {
    type: "EDIT_NAME",
    payload: obj,
  };
};

export const editTodo = (obj) => {
  return {
    type: "EDIT_TODO",
    payload: obj,
  };
};

export const deleteTodo = (index) => {
  return {
    type: "DELETE_TODO",
    payload: index,
  };
};
