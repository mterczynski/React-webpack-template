import './app.css';
import React from 'react';
import Navbar from './components/Navbar/Navbar';

export default class App extends React.Component{
	render(){
		return <div className="App">
			<Navbar/>
		</div>
	}
}
