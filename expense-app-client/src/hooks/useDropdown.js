import {  useState }  from "react";

const useDropdown = (sourceList) =>{
    const [list,setList]=useState(sourceList);
    const [selected,setValueId]=useState();
    const [value,setValue] = useState();
    const onChange = (newValueId)=>{
        setValueId(newValueId);
        const getValue = list.find(item=>item.id===newValueId);
        setValue(getValue ? getValue.value : null );
        
    }
    let Changed
    return {selected,onChange,value,list}
 }
 export default useDropdown;