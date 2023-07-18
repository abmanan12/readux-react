const initialState = {
    todos: JSON.parse(localStorage.getItem('reduxTodos')) || []
}

const TodoReducer = (state = initialState, action) => {

    switch (action.type) {

        case 'ADD_TODO':

            let id = new Date().getTime().toString()

            let addTodo = JSON.parse(localStorage.getItem('reduxTodos')) || []

            action.payload.id = id

            addTodo.push(action.payload)

            localStorage.setItem("reduxTodos", JSON.stringify(addTodo))

            return {
                ...state,
                todos: addTodo
            }

        case 'EDIT_TODO':

            let total_todos = JSON.parse(localStorage.getItem('reduxTodos'))

            let todoAfterUpdate = total_todos.map(curElem => {
                if (curElem.id === action.payload.id) {
                    return action.payload
                }
                else {
                    return curElem
                }
            })

            localStorage.setItem('reduxTodos', JSON.stringify(todoAfterUpdate))

            return {
                ...state,
                todos: todoAfterUpdate
            }

        case 'DELETE_TODO':

            let todoAfterDelete = state.todos.filter(curElem => {
                return curElem.id !== action.payload
            })

            localStorage.setItem("reduxTodos", JSON.stringify(todoAfterDelete))

            return {
                ...state,
                todos: todoAfterDelete
            }

        default:
            return state;

    }

}

export default TodoReducer;