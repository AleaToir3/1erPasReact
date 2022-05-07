import React,{useEffect,useState} from 'react';
import axios from 'axios';
import Card from '../components/Card';


const Countries = () => {

    const [data,setData] = useState([]);
    const [rabgeValue,setRabgeValue] = useState(36);
    const radios = ["Africa","America","Asia","Europe","Oceanie"] 
    const [seletedRadio,setSeletedRadio] = useState('')
    useEffect(()=>{
        axios.get("https://restcountries.com/v3.1/all").then((res)=>setData(res.data))
    },[]);
    return (
        <div className='countries'>
            <ul className="radio-container">
                <input type="range" min="1" max='250' onChange={(e)=>setRabgeValue(e.target.value)}/>

                {radios.map((continent)=>(
                <li>
                    <input type="radio" name="continenetRadio" id={continent}
                    checked={continent=== seletedRadio}
                    onChange={(e)=>setSeletedRadio(e.target.id)} />
                    <label htmlFor={continent}>{continent}</label>
                </li>  
                ))}

            </ul>
            {seletedRadio && <button onClick={()=>setSeletedRadio("")}> Annuler la rechercher</button>}
            <ul>
                {
                    data
                    .filter((country)=>country.continents[0].includes(seletedRadio))
                    .sort((a,b)=> b.population - a.population)
                    .slice(0,rabgeValue).map((country,index)=>(
                    // <li key={index}> {index+1} - {country.translations.fra.common}</li> 
                    <Card key={index} country={country}/>
                    ))  
                }         
            </ul>
        </div>
    );
};

export default Countries;


