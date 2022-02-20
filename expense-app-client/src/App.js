import './App.css';
import { Rows, Columns } from 'UIKit'
import NavLinkItem from './components/navLinkItem';
import { Outlet } from 'react-router-dom';
import Header from 'components/header';
import { fetchUser } from 'Store/actions/users';
import { useDispatch } from 'react-redux';
import { useEffect } from 'react';
import { fetchExpenses, fetchCurrentExpenses } from 'Store/actions/expenses'
function App() {
  const dispatch = useDispatch();
  useEffect(()=>{
    (async ()=>{
      await dispatch(fetchUser());
      await dispatch(fetchCurrentExpenses());
      await dispatch(fetchExpenses());
    })()
  },[])
  return (
    <div className="App">
      <Rows>
        <Header>
        </Header>
        <Columns>
          <ul>
            <NavLinkItem to="/home">Home</NavLinkItem>
            <NavLinkItem to="/addExpanse">Add Expense</NavLinkItem>
            <NavLinkItem to="/settings">Settings</NavLinkItem>
          </ul>
          <Outlet />
        </Columns>
      </Rows>
    </div>
  );
}

export default App;
