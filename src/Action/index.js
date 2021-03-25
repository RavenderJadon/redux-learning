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

export const editName = () => {
  return {
    type: "EDIT_NAME",
  };
};

export const editTodo = () => {
  return {
    type: "EDIT_TODO",
  };
};
