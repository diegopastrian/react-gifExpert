import { useState, useSyncExternalStore } from "react"

const AddCategory = ({onNewCategory}) => { //en {} porque se desestructura props

    const [inputValue, setinputValue] = useState('');
    
    const onInputChange = ({target}) => {
        setinputValue(target.value)
    }

    const onSubmit = (event) => {
        event.preventDefault();
        
        if( inputValue.trim().length <=1) return; //evitar adicionar caracteres vacios

        onNewCategory( inputValue.trim() );
        setinputValue('');
    }

  return (
    <form onSubmit= { onSubmit } >
        <input
            type="text"
            placeholder="buscar gifs"
            value={inputValue}
            onChange={onInputChange}
        />
    </form>    
  )
}

export default AddCategory 
