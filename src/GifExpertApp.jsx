import { useState } from "react"
import AddCategory from "./components/AddCategory"
import GifGrid from "./components/GifGrid"
//import { AddCategory, GifGrid} from './components';

const GifExpertApp = () => {

    const [categories, setCategories] = useState(['Rupaul Drag Race'])

    const onAddCategory = (newCategory) => {

      if( categories.includes(newCategory) ) return;

      setCategories( [ ...categories, newCategory] )
    }

  return (
    <>
    {/*titulo*/}

    <h1> GifExpertApp</h1>

    {/*input*/}

    <AddCategory 
      onNewCategory = { (event) => onAddCategory(event)}
     />

    {/*Listado de Gif*/}

    { 
      categories.map( (category) => (
        <GifGrid key={ category } 
        category={ category }/>
      ))
    }
    </>
  )
}

export default GifExpertApp
