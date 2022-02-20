import './App.css';
import { Rows, Columns } from 'UIKit'
import NavLinkItem from './components/navLinkItem';
import { Outlet } from 'react-router-dom';
import Header from 'components/header';
// import { fetchUser } from './Store/actions/users';
import { useDispatch } from 'react-redux';
import axios from 'axios';
import { useCallback, useEffect, useState } from 'react';
import useSessionStorage from 'hooks/useSessionStorage';
import { fetchUser } from 'Store/actions/users';
import { fetchCurrentExpenses, fetchExpenses } from 'Store/actions/expenses';
function App() {
  const dispatch = useDispatch();
  const [isLoading, setIsLoading] = useState();
  const [error, setError] = useState();
  // const [user, setUser] = useSessionStorage("user");
  // const [currentExpesnses, setCurrentExpesnses] = useSessionStorage("currentExpesnses");
  const LoadUser = useCallback(async () => {
    setError(null);
    try{
      await dispatch(fetchUser());
    }
    catch(err){setError(err.message)}
  }, []);
  const loadCurrentExpenses = useCallback(async () => {
    setError(null);
    try{
      await dispatch(fetchExpenses(new Date()));
      await dispatch(fetchCurrentExpenses());
    }
    catch(err){setError(err.message)}
  }, []);
  useEffect(() => {
    setIsLoading(true);
    LoadUser().then(()=>{
      loadCurrentExpenses().then(()=>{
        setIsLoading(false);
      });
    });
  }, [useDispatch,setIsLoading,setError])
  return (
    isLoading ? (<div><h1>Loading data...</h1></div>) :
    !isLoading && error ?<p>{error}</p> :
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
