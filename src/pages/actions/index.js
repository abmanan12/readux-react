export const addTodo = todoData => {
    return {
        type: 'ADD_TODO',
        payload: todoData
    }
}

export const editTodo = data => {
    return {
        type: 'EDIT_TODO',
        payload: data
    }
}

export const deleteTodo = id => {
    return {
        type: 'DELETE_TODO',
        payload: id
    }
}