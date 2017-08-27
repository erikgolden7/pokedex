import React, { Component } from 'react';
import logo from '../images/logo.png';
import { Link } from 'react-router-dom';
import Nav from "./nav.js"
import '../style/App.css';

import PokemonList from "../containers/pokemon_list";
import SearchBar from "../containers/search_bar";

class App extends Component {
  render() {
    return (
      <div>
        <Nav />
	      {this.props.children}
      </div>
    );
  }
}

export default App;

