import { Line } from 'UIKit'
import './homeView.css';
import ExpenseTable from 'components/expenseTable';
import UserDataPresenter from 'components/userDataPresenter';

import { useEffect, useState } from 'react';
import { useDispatch } from 'react-redux';
import { fetchExpenses } from 'Store/actions/expenses';
const View = (props) => {
    const [user,setUser]=useState()
    const dispatch = useDispatch()     ;
    useEffect(()=>{
        const sessionUser =JSON.parse(window.sessionStorage.getItem("user"));
        if(sessionUser) setUser(sessionUser);
    },[])
    const getNextMonth = (maxDate) =>{
 
        const date = new Date(maxDate.getFullYear(), maxDate.getMonth()+1 , maxDate.getDay())      
        console.log("nex month",maxDate,date);
        dispatch(fetchExpenses(date))
    }
    const getPrevMonth = (minDate) => {
        const date = new Date(minDate.getFullYear(), minDate.getMonth() - 1, minDate.getDay())
        const today = new Date();
        date > today && date.setMonth(date.getMonth() - 1);
        console.log("prev month",date);
        dispatch(fetchExpenses(date))
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