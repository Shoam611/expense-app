import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import { applyMiddleware, combineReducers } from 'redux';
import './index.css';
import ReduxThunk from 'redux-thunk';
import Navigator from './navigator'
import expenses from './Store/reducers/expenses'
import { createStore } from 'redux';
import users from './Store/reducers/users';

const rootReducer = combineReducers({
  expenses: expenses,
  users:users
});

const Store = createStore(rootReducer,applyMiddleware(ReduxThunk))
ReactDOM.render(
  <React.StrictMode>
    <Provider store={Store}>
      <Navigator />
    </Provider>
  </React.StrictMode>,
  document.getElementById('root')
);
