import React from 'react'
import { FaHeart} from 'react-icons/fa'
import './css/Favourites.css'

const Favourites = (props) =>{
    console.log(props.fav.length > 0 ? props.fav[0].url : 'waitin')
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
                    <h3> <FaHeart /> </h3>
                    <h3>#{f.nbr}</h3>   
                </div>
            </div>
            )
        }
        </div>
    )
}



export default Favourites