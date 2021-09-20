import React, { useEffect, useState } from 'react';
import Country from '../Country/Country';
import './Countries.css'

const Countries = () => {
    const [countries, setCoutries] = useState([])
    
    useEffect( ()=>{
        fetch("https://restcountries.eu/rest/v2/all")
        .then(res => res.json())
        .then(data => setCoutries(data))
    },[])

    return (
        <div>
            <h2>Hello from Country: {countries.length}</h2>
           <div  className="countries-container">  
            {
                countries.map(country => <Country
                    key={country.capital}
                    country={country}
                     ></Country>)
            }
           </div>

        </div>
    );
};

export default Countries;