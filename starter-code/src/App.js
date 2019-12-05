import React, { Component } from "react";
import logo from "./logo.svg";
import "./App.css";
import CountryDetail from "./components/CountryDetail";
import { Route, Switch, Link } from "react-router-dom";
import countries from "./countries.json";

class App extends Component {
  constructor() {
    super();
    this.state = {
      countries: countries
    };
  }
  render() {
    return (
      <div>
   
          {this.state.countries.map(country => {
            return (
              <div >

              <Link to={`/countrydetail/${country.cca3}`}>{country.name.official}</Link>
              <p> {country.flag} </p>
              <hr/>
              </div>
            )
          })}
          <switch>
          <Route path="/countrydetail/:cca3" component={CountryDetail}/>
        </switch>
      </div>
    );
  }
}

export default App;
