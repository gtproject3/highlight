import React, { Component } from "react";
// import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import "./App.css";
import Hero from "./components/Hero";
import SearchPanel from "./components/SearchPanel";
import HomeNav from "./components/HomeNav";

class App extends Component {
	render() {
		return (
			<div>
				<HomeNav />
				<Hero />
				<SearchPanel />
			</div>
		);
	}
}

export default App;
