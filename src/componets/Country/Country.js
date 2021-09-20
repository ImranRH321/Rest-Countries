import React from 'react';
import './Country.css'


const Country = (props) => {
    const {name, flag, capital, population, region} = props.country
    console.log(props.country.name);
    return (
        <div className="country bg-success">
            <h4 className="text-warning">This is : {name}</h4>
            <img src={flag} alt="" />
           <p> <small>Region: {region}</small></p>
            <p>Capital: {capital} population: {population}</p>

        </div>
    );
};

export default Country;