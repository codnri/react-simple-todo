 //Reducer
export const todoReducer = (state = {todoList: []}, action) => {
  switch (action.type) {
    case 'ADD_TODO':{
      // Newly added ToDo
      const new_todo = action.payload.todo;
      return {
        todoList:[
          ...(state.todoList), new_todo 
        ]
      }
    }
    default:
      return state;
  }
};