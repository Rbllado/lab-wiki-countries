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
      <div className="App row">
     <div className="col-5 all-list">
        <div className="list-group">
          {/* each country has cca3 and we will send this cca3 on the url */}
          {this.state.countries.map(country => {
            return (
              <div className="list-group-item list-group-item-action">
                <Link to={`/countrydetail/${country.cca3}`}>
                  {country.name.official}
                </Link>
                <p> {country.flag} </p>
                <hr />
              </div>
            );
          })}
        </div>
        </div>

          <div className="col-7 borders" >

            <Route path="/countrydetail/:cca3"  component={CountryDetail} />
          </div>

      </div>
    );
  }
}

export default App;
