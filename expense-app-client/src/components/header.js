// import { useSelector } from "react-redux"
import { Link } from "react-router-dom"
import { Box, Line, } from "UIKit"
import './header.css'
const Header = (props) => {

  // const user = useSelector(state=>state.users.user);
  return (
    <Line justify="between">
      <Line>
        <Link to="home" className="header-title">
          Expense-App
        </Link>
      </Line>
      <Line>
        <div className="header-item">
          <Box>
            <a href='/home'>GitHub</a>
          </Box>
        </div>
      </Line>
    </Line>
  )
}
export default Header