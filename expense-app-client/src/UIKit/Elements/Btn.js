import './Btn.css';
import { Line, Icon } from 'UIKit';

const Btn = (props) => {
    return (
        <div className="Btn" onClick={props.onClick}>
            <Line justify="between">
                {props.children}
                {props.i ? <Icon i={props.i} color="#fff"/> : null}
            </Line>
        </div>
    )
}
export default Btn;