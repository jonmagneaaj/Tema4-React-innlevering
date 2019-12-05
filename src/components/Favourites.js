import React from 'react'
import { FaHeart} from 'react-icons/fa'
import './css/Favourites.css'

const Favourites = (props) =>{
    console.log(props.fav.length > 0 ? props.fav[0].url : '')
    return(
        <div id='fav-wrap'>
        {
            props.fav.map( (f, key ) => 
            
            <div className='fav-box' key={key}>
                <div className='fav-fact-img'>
                    <img src={f.url} alt={'This is image of' + f.name} />
                </div>
                <div className='fav-fact-text-wrap'>
                    <h2>{f.property}</h2>
                    <h3 onClick={props.removeFav}> <FaHeart /> </h3>  
                </div>
            </div>
            )
        }
        </div>
    )
}



export default Favourites