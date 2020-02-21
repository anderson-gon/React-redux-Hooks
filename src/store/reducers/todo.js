import { Types } from '../actions/todo';

const INITIAL_STATE = {
    index: -1,
    list: [
        {id: 1, done: true, title: "Study Redux with React Hooks"},
        {id: 2, done: false, title: "Study Python.js"},
        {id: 3, done: false, title: "Study gRPC"},
        {id: 4, done: false, title: "Study Tensorflow"},
    ]
}

export default function todo(state = INITIAL_STATE, action) {
    
    if (action.type === Types.TOGGLE_TODO) {
        const list = [...state.list];    
        const todo = list[action.index];
        todo.done = !todo.done;        

        return {            
            list 
        }
    }

    if (action.type === Types.ADD_TODO) {
        if (action.title === '') return state;

        const list = [
            ...state.list, 
            { id : state.list.length + 1, done : false, title: action.title}
        ];
        
        return {            
            list
        }
    }

    if (action.type === Types.REMOVE_TODO) {
        const list = [...state.list];
        list.splice(action.index, 1);

        return {
            list
        }
    }

    return state;
}