import './App.css';
import { Rows, Columns } from 'UIKit'
import NavLinkItem from './components/navLinkItem';
import { Outlet } from 'react-router-dom';
import Header from 'components/header';
// import { fetchUser } from 'Store/actions/users';
// import {useEffect} from 'react'
function App() {
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
