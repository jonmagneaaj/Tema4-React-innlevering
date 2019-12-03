import React,{useState} from 'react'
import { FaRegHeart } from 'react-icons/fa'


import '../css/fact.css'
import '../css/size/phone.css'



const Fact = (props) =>{

    // --- Favourite ---
    
    // --- Favourite  END ---



    // --- RandomGEN ---
    const [rand, setRand] = useState(Math.floor(Math.random() * props.cat.length))

    const updateRandom = () => {
        let newRandom = Math.floor(Math.random() * props.cat.length) 
        if(newRandom !== rand){
            setRand(newRandom)
        }else{
            return updateRandom()
        }
    }
    // --- END ---
    return(
    <div className='fact'>
        <h1>Random {props.cat.length > 0 ? props.cat[rand].type : ''} Fact!</h1>
        <div className='fact-wrap'>
            <div className='fact-img'>
                <img src={props.cat.length > 0 ? props.cat[rand].url : ''} alt={'This is image of' + props.cat.length > 0 ? props.cat[rand].name : ''} />
            </div>
            <div className='fact-text-wrap'>
                <div className="fact-text">
                    <h2>{props.cat.length > 0 ? props.cat[rand].property : ''}</h2>
                </div>
                <div className='fact-nbr'>
                    <h3>#{props.cat.length > 0 ? props.cat[rand].nbr : ''}</h3>
                    <a onClick={() => props.addFav(props.cat[rand])}> <FaRegHeart /> </a>
                    <button onClick={updateRandom} >New Fact!</button>
                </div>
            </div>
        </div>
    </div>
    )
}

export default Fact