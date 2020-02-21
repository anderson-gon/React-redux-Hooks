/*

With connect HoC 

import React, { useState } from 'react';

import { connect } from 'react-redux';

import * as TodoActions from '../../store/actions/todo';


const TodoForm = ({addTodo}) => {
    const [title, setTitle] = useState('');

    

    return (
        <div>
            <input 
                type="text" 
                value={title}
                onFocus={() => setTitle('') } 
                onChange={(e) => setTitle(e.target.value)}
            />
            <button onClick={() => addTodo(title)}>Add</button> 
        </div>
    );
}

const mapStateToProps = state => ({
});

const mapDispatchToProps = dispatch => ({
    addTodo: (title) => dispatch(TodoActions.addTodo(title))
});

export default connect(mapStateToProps, mapDispatchToProps)(TodoForm);
*/

import React, { useState } from 'react';

import {  useDispatch } from 'react-redux';

import * as TodoActions from '../../store/actions/todo';

export default function TodoForm () {
    const [title, setTitle] = useState('');
    const dispatch = useDispatch();

    return (        
        <section class="form">                
            <input 
                type="text" 
                maxLength="40"
                value={title} 
                onFocus={() => setTitle('') } 
                onChange={(e) => setTitle(e.target.value)}
            />
            <button onClick={() => dispatch(TodoActions.addTodo(title))}>Add</button>             
        </section>
    );
}
