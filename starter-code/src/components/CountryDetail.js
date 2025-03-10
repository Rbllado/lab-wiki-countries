import React, { Component } from "react";
import countries from "../countries.json";
import { Route, Switch, Link } from "react-router-dom";

export default class CountryDetail extends Component {
  constructor(props) {
    super(props);
    this.state = {
      countries: countries
    };
  }

  // Find country by cca3 --> is like id
  // I send to the function findcoutry a cca3 code, and I try to find it into the coutries array that i have
  findCountry = cca3 => {
    const result = this.state.countries.find(country => cca3 === country.cca3);
    return result;
  };

  render() {
    //find cca3 from URL
    const { cca3 } = this.props.match.params;

    //send to function to find country from all countries with the cca3
    const foundCountry = this.findCountry(cca3);
    return (
      <div className="list-group">
        <h2>{foundCountry.name.official}</h2>
        <h2>Capital: {foundCountry.capital}</h2>
        <h2>Area: {foundCountry.area} KM2</h2>

        {// It is taking from all the cca3 border, one cca3 for each iteration. ['vdv', 'sdf']
        foundCountry.borders.map((cca3, index) => {
          const oneBorder = this.findCountry(cca3);
          return (
            <ul>
              <li className="list-group-item">
                <Link to={`/countrydetail/${cca3}`}>
                  {oneBorder.name.official}
                </Link>
              </li>{" "}
            </ul>
          );
        })}
      </div>
    );
  }
}
