import React,{useState} from 'react'
import Fact from './subComponents/Fact'
import AnimalArray from './arrays/AnimalArray'
import FoodArray from './arrays/FoodArray'


const Showcase = (props) =>{

     //--- Array with all arrays ---
    const AllArray = [...AnimalArray,...FoodArray]
     //---  END ---

    // -- Change between categories --
    const [cat, setCat] = useState([...AnimalArray])
    
    const Animal = () =>{
        setCat(AnimalArray)
    }
    const Food = () =>{
        setCat(FoodArray)
    }
    const All = () =>{
       setCat(AllArray)
   }
    // --- END ---

    return(
        <div>
            <div className='categories'>
                <h2 id='cat-animal' onClick={Animal}>Animal facts</h2>
                <h2  id='cat-food' onClick={Food}>Food facts</h2>
                <h2  id='cat-random' onClick={All}>Random</h2>
            </div>
            <Fact removeFav={props.removeFav} updaterandom={props.updaterandom} addFav={props.addFav} cat={cat}/>
        </div>
    )
}



export default Showcase