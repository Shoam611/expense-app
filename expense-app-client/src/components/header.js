import { useSelector } from "react-redux";
import { Link } from "react-router-dom"
import { Btn, Line, } from "UIKit"
import './header.css'
const Header = (props) => {
  const user = useSelector(state=>state.users.user);
  return (
    <Line justify="between">
      <Line>
            <Link to="home" className="header-title">
                Expense-App
            </Link>
            <Btn onClick={()=>{console.log(user);}}/>
      </Line>
      <Line>
        <div  className="header-item">
            <a href='/'>GitHub</a>
        </div>
      </Line>
    </Line>
  )
}
export default Header