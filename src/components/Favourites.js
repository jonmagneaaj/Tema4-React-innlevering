import React from 'react'
import { FaHeart} from 'react-icons/fa'
import './css/Favourites.css'

const Favourites = (props) =>{

    return(
        <div id='fav-wrap'>
        {
            props.fav.map( (f, n ) => 
            
            <div className='fav-box' key={n}>
                <div className='fav-fact-img'>
                    <img src={f.url} alt={'This is image of' + f.name} />
                </div>
                <div className='fav-fact-text-wrap'>
                    <h2>{f.property}</h2>
                    <h3 onClick={() => props.removeFav(n)}> <FaHeart /> </h3>  
                </div>
            </div>
            )
        }
        </div>
    )
}



export default Favourites