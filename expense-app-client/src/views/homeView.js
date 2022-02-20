import { Line } from 'UIKit'
import './homeView.css';
import ExpenseTable from 'components/expenseTable';
import UserDataPresenter from 'components/userDataPresenter';
import { useEffect, useState } from 'react';
const View = (props) => {
    const [user,setUser]=useState()
     const getUser=()=>{
    }
    useEffect(()=>{
        const sessionUser =JSON.parse(window.sessionStorage.getItem("user"));
        if(sessionUser) setUser(sessionUser);
        else getUser();
    },[])
    const getNextMonth = (maxDate) =>{
        console.log('next');
    }
    const getPrevMonth = (minDate) => {
        const date = new Date(minDate.getFullYear(), minDate.getMonth() - 1, minDate.getDay())
        const today = new Date();
        date > today && date.setMonth(date.getMonth() - 1)
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