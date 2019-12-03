import React from 'react'
import { FaHeart} from 'react-icons/fa'
import './css/Favourites.css'

const Favourites = (props) =>{
    console.log(props.fav)
    return(
        <div id='fav-wrap'>
        {
            props.fav.map( f => <div className='fav-box'>
                <div className='fav-fact-img'>
                    <img src={f.length > 0 ? f.url : ''} alt={'This is image of' + f.length > 0 ? f.name : ''} />
                </div>
                 <div className='fav-fact-text-wrap'>
                    <h2>{f.length > 0 ? f.property : ''}</h2>
                    <h3> <FaHeart /> </h3>
                    <h3>#{f.length > 0 ? f.nbr : ''}</h3>   
                </div>
            </div>
            )
        }
        </div>
    )
}



export default Favourites