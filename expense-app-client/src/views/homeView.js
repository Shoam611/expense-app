// import { useDispatch } from 'react-redux'
import { Line } from 'UIKit'
import './homeView.css';
import ExpenseTable from 'components/expenseTable';
// import { fetchExpenses } from 'Store/actions/expenses';
import UserDataPresenter from 'components/userDataPresenter';
import { useEffect, useState } from 'react';
// import { fetchUser } from 'Store/actions/users';
const View = (props) => {
    // const dispatch = useDispatch();
    const [user,setUser]=useState()
     const getUser=()=>{
    // dispatch(fetchUser());
    }
    useEffect(()=>{
        const sessionUser =JSON.parse(window.sessionStorage.getItem("user"));
        if(sessionUser) setUser(sessionUser);
        else getUser();
    },[])
    const getNextMonth = (maxDate) =>{
        console.log('next');
        // dispatch(fetchExpenses(maxDate));
    }
    const getPrevMonth = (minDate) => {
        const date = new Date(minDate.getFullYear(), minDate.getMonth() - 1, minDate.getDay())
        const today = new Date();
        date > today && date.setMonth(date.getMonth() - 1)
        // dispatch(fetchExpenses(date))
    }
    return <div>
        <ul>
            <li>
                <UserDataPresenter user={user}/>
            </li>
            <li>
                <Line justify="around" >
                    <ExpenseTable next={getNextMonth} prev={getPrevMonth} />
                </Line>
            </li>
        </ul>
    </div >
}

export default View