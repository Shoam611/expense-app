import React from 'react';
import ReactDOM from 'react-dom';

import { Provider } from 'react-redux';
import { createStore ,applyMiddleware, combineReducers } from 'redux';
import ReduxThunk from 'redux-thunk';

import Navigator from './navigator'
import expenses from './Store/reducers/expenses'
import users from './Store/reducers/users';
import './index.css';

const rootReducer = combineReducers({
  users:users,
  expenses: expenses
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
