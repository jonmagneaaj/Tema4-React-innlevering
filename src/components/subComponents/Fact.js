import React,{useState} from 'react'
import FactsArray from '../arrays/FactsArray'
import '../css/fact.css'


const Facts = () =>{
    const [facts, setFacts] = useState(FactsArray.Facts)
    const [rand, setRand] = useState(Math.floor(Math.random() * facts.length))

    const updateRandom = () => {
        setRand(Math.floor(Math.random() * facts.length))
    }

    return(
    <div className='fact'>
        <h1>Random {facts[rand].type} Fact!</h1>
        <div className='fact-wrap'>
            <div className='fact-img'>
                <img src={facts[rand].url} alt={'This is image of' + facts[rand].name} />
            </div>
            <div className='fact-text-wrap'>
                <div className="fact-text">
                    <h2>{facts[rand].property}</h2>
                </div>
                <div className='fact-nbr'>
                    <h3>#{rand+1}</h3>
                    <button onClick={updateRandom} >New Fact!</button>
                </div>
            </div>
        </div>
    </div>
    )      
}

export default Facts