import React, { Component } from 'react'
import countries from "../countries.json";

export default class CountryDetail extends Component {
    constructor(props){
        super(props);
        this.state={
        countries: countries
        }
    }

    findCountry = (cca3) =>{
        const result = this.state.countries.find(country => cca3 === country.cca3)
        return result
    }

    render() {
        //find cca3 from URL
        const { cca3 } = this.props.match.params;
        //send to function to find countru from library with the cca3
        const foundCountry = this.findCountry(cca3);        
        return (
            <div>
                <h1>Country Detail</h1>
                <h2>{foundCountry.name.official}</h2>
                <h2>Capital: {foundCountry.capital}</h2>
                <h2>Area: {foundCountry.area} KM2</h2>

                {
                // It is taking from all the cca3 border, one cca3 for each iteration. ['vdv', 'sdf']
                foundCountry.borders.map((cca3, index)=>{
                    const oneBorder = this.findCountry(cca3)
                    return <ul><li>{oneBorder.name.official}</li> </ul>
                    
                })
                }

                {/* <h2>Borders: {foundCountry.borders[0]}</h2> */}
            </div>
        )
    }
}
