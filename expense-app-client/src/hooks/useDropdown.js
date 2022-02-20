import {  useState }  from "react";

const useDropdown = (sourceList) =>{
    const [list,setList]=useState(sourceList);
    const [selected,setValueId]=useState();
    const [value,setValue] = useState();
    const onChange = (newValueId)=>{
        setValueId(newValueId);
        setValue(list.find(item=>item.id===newValueId).value);
    }
    return {selected,onChange,value,list}
 }
 export default useDropdown;