import { useState } from "react";

export const AddCategory = ({onNewCategoria}) => {
    const [InputValue, setInputValue] = useState("");
    const onChange =(Event)=>{
          setInputValue(Event.target.value)
    }
    const onSubmit =(Event)=>{
        Event.preventDefault()
        if (InputValue.trim().length <= 1)return
        onNewCategoria(InputValue.trim())
        setInputValue('')
         
    }
    return (

     <form onSubmit={onSubmit}>
       <input
         type="text"
         placeholder="Buscar Gits"
         value={InputValue}
         onChange={onChange}
       />
     </form>
    )
};
