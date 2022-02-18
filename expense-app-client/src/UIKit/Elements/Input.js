import "./Input.css";

const Input = (props) => {
    return (
        <div className="Input">
            <input  value={props.value} 
                    onChange={(e)=>{props.onChange(e)}}
                    
                    type={props.type || 'text'}
                    placeholder={props.placeholder}
                    min={props.min}
                    max={props.max}
                    maxLength={props.maxLength} />
        </div>
    )
}

export default Input;