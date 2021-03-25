const defaultState = [
  {
    userName: "Ravender",
    lastName: "Jadon",
    todo: "first todo",
  },
  {
    userName: "Anoop",
    lastName: "Poonia",
    todo: "second todo",
  },
  {
    userName: "Amit",
    lastName: "khatkar",
    todo: "third todo",
  },
  {
    userName: "chakshu",
    lastName: "kumar",
    todo: "fourth todo",
  },
  {
    userName: "joon",
    lastName: "nooj",
    todo: "fiveth todo",
  },
];
const userDataReducer = (state = defaultState, action) => {
  switch (action.type) {
    case "USERDATAUPDATE":
      const dataToPush = action.payload;
      const newEntery = {
        userName: dataToPush,
        lastName: "test",
        todo: "yet to add",
      };
      state.push(newEntery);
      return state;
    case "EDIT_NAME":
      return state;
    case "EDIT_TODO":
      return state;
    default:
      return state;
  }
};
export default userDataReducer;
