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
    case "EDIT_NAME": {
      const nameChange = action.payload;
      const ind = nameChange.ind;
      const newObj = nameChange.change;
      let newState = [...state];
      console.log("newState", newState);
      newState.splice(ind, 1, newObj);
      console.log("newState", newState);

      return newState;
    }
    case "EDIT_TODO": {
      const indChange = action.payload;
      const ind = indChange.ind;
      const newObj = indChange.change;
      let newState = [...state];
      console.log("newState", newState);
      newState.splice(ind, 1, newObj);
      console.log("newState", newState);

      return newState;
    }
    case "DELETE_TODO": {
      const ind = action.payload;
      const newState = [...state];
      newState.splice(ind, 1);
      return newState;
    }
    default:
      return state;
  }
};
export default userDataReducer;
