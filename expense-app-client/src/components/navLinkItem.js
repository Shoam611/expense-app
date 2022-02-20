import { Box, Line } from 'UIKit';
import { NavLink } from 'react-router-dom';
import './NavLinkListItem.css'
const NavLinkItem = (props) => {
    return (
        <li>
            <NavLink to={props.to} className={({ isActive }) => { const name = isActive ? "active" : " "; return name }}>
                <Box>
                    <Line >
                    {props.children}
                    </Line>
                </Box>
            </NavLink>
        </li>
    )
}
export default NavLinkItem;