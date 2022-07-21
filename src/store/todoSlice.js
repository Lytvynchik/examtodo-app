import { createSlice } from "@reduxjs/toolkit";

const todoSlice = createSlice({
    name: 'todos',
    initialState: {
        todos: [
            { id: 1, text: 'Add task' },
            { id: 2, text: 'Add task' },
            { id: 3, text: 'Add task' },
            { id: 4, text: 'Add task' },
            { id: 5, text: 'Add task' },
            { id: 6, text: 'Add task' },
            { id: 7, text: 'Add task' },
            { id: 8, text: 'Add task' },
        ],
        date: '2022-07-14',
        title: '',
        // text: '',
    },
    reducers: {
        addTodo(state, action) {
            console.log(state);
            console.log(action);

            state.todos.push(
                {
                    id: new Date().toISOString(),
                    text: action.payload.newTodo,
                    // completed: false,
                }
            );
        },
        removeTodo(state, action) {
            console.log(action);
            state.todos = state.todos.filter( item => item.id !== action.payload.id)
        },
        handleTitle (state, action) {
    
            state.title = action.payload.taskTitle;
            state.date = action.payload.taskDate;

            // нужно создавать на каждый инпут свой handler? или можно написать подобную запись?
            // const { name, value } = e.target;
            // name === 'date' ? setTaskDate(value) : setTaskTitle(value);
        },
        // handleDate (state, action) {
        //     state.date = action.payload;
        // }
    },
});

export const { addTodo, removeTodo, handleTitle, handleDate } = todoSlice.actions;
export default todoSlice.reducer;

// export default (state = , action) => {
//     switch (action.type) {
//         case :
            
//         default:
//             return state;
//     }
// };