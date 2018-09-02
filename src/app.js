import './app.css';
import React from 'react';
import Navbar from './components/Navbar/Navbar';
import Container from './components/container/container';

export default class App extends React.Component{
	render(){
		return <div className="App">
			<Navbar/>
			<Container/>
		</div>
	}
}
