import React from 'react';
import { Provider } from 'react-redux';

import TodoForm from './components/Todo/TodoForm';
import TodoList from './components/Todo/TodoList';

import store from './store';

function App() {
  return (    
    <Provider store={store}>
      <TodoForm />
      <TodoList />
    </Provider>    
  );
}

export default App;
