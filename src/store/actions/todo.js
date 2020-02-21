export const Types = {
    TOGGLE_TODO : 'TOGGLE_TODO',
    ADD_TODO: 'ADD_TODO',
    REMOVE_TODO: 'REMOVE_TODO'
}


export function toggleTodo(index) {
    return {
        type: Types.TOGGLE_TODO,
        index
    };
};

export function addTodo(title) {            

    return {
        type: Types.ADD_TODO,
        title
    };
}

export function removeTodo(index) {
    return {
        type: Types.REMOVE_TODO,
        index
    };
}