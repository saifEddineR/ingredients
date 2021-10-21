import './App.css';
import {useDispatch} from 'react-redux'
import {addIngredient} from './redux/ingredientSlice'
import { useState } from 'react';
function App() {
  const [ingredientOption, setIngredientOption] = useState({desc:'',value:0})
  const [list, setList] = useState([])
  const [name, setName] = useState('')
  const dispatch = useDispatch()
  const handleChange = (e) => {
    setIngredientOption({...ingredientOption,[e.target.name]:e.target.value})
  }
  const addNewIngredient = (e) => {
    e.preventDefault()
    setList([...list,ingredientOption])
    setIngredientOption({desc:'',value:0})
    
  }
  return (
    <div className="App">
      <header className="App-header">
      <form>
        <button onClick={()=>dispatch(addIngredient({name,options:list}))}>Add Ingredient</button><br/>
        <input type='text' onChange={(e)=>setName(e.target.value)} placeholder='add an ingredient name' />
        <br/>
        <select name='desc' onChange={handleChange}>
          <option value="how much carbs /100g">how much carbs /100g</option>
          <option value="how much sugar /100g">how much sugar /100g</option>
          <option value="how much idk /100g">how much idk /100g</option>
        </select>
        <input type='number' name='value' onChange={handleChange} value={ingredientOption.value} />
        <button type='submit' onClick={addNewIngredient}>ADD</button>
      </form>
      <div>
        {list.map((el,i)=><div key={i}><span>{el.desc}</span> -- <span>{el.value}</span> </div>)}
      </div>
      </header>
    </div>
  );
}

export default App;
