import React,{useState, useEffect} from 'react'
import { FaRegHeart, FaHeart } from 'react-icons/fa'


import '../css/fact.css'
import '../css/size/phone.css'



const Fact = (props) =>{

    const [checked, setChecked] = useState(false)

    const addMe = () => {
        console.log('add me')
        setChecked(true)
        props.addFav(props.cat[rand])
    }
    const deleteMe = () => {
        setChecked(false)
        //to be done
    }

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

    //---wrapper function ---
    
    const wrap = () =>{
        setChecked(false)
        updateRandom()
    }

    useEffect( () => {
        console.log('use effect')
        updateRandom()
    }, [] )


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
    <h3>#{rand} av {props.cat.length}</h3>
                    {
                        checked ? 
                        <FaHeart onClick={deleteMe} />
                        :
                        <FaRegHeart onClick={() => addMe() } />
                    }

                    <button onClick={wrap} >New Fact!</button>
                </div>
            </div>
        </div>
    </div>
    )
}

export default Fact