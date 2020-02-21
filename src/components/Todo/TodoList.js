/*

With connect HoC 

import React from 'react';

import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';

import * as TodoActions from '../../store/actions/todo';

import './TodoList.css';

const TodoList = ({list, toggleTodo }) => {
        
    return (
        <>
            <ul>
                {list.map((todo, index) => (
                    <li key={todo.id}> 
                        <input type="checkbox" checked={todo.done} onChange={() => toggleTodo(index)}/>                   
                        {todo.title}                    
                    </li>
                ))}
            </ul>
        </>
    )
}

const mapStateToProps = state => ({
    list : state.todo.list
});

const mapDispatchToProps = dispatch => bindActionCreators(TodoActions, dispatch);

export default connect(mapStateToProps, mapDispatchToProps)(TodoList);
*/



import React from 'react';

import { useSelector, useDispatch } from 'react-redux';

import * as TodoActions from '../../store/actions/todo';

import './TodoList.css';

export default function TodoList() {

    const list = useSelector(state => state.todo.list);
    const dispatch = useDispatch();    

    return (
        <section class="list">
            <ul>
                {list.map((todo, index) => (                    
                    <li key={todo.id}>
                        <input type="checkbox" checked={todo.done} onChange={() => dispatch(TodoActions.toggleTodo(index))}/>
                        <label className={todo.done ? 'task-done' : '' }>
                            {todo.title}
                        </label>                        
                        <button onClick={() => dispatch(TodoActions.removeTodo(index))}>Remove</button> 
                    </li>
                ))}
            </ul>
        </section>
    )
}
