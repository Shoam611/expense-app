import './Line.css';

const Line = (props) => {
    return (
        <div {...props} className={`Line ${props.className ? props.className:' '}`} justify={props.justify}>
            {props.children}
        </div>
    )
}

export default Line;