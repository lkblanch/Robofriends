import React from 'react';
import CardList from '../components/CardList.js'
import SearchBox from '../components/SearchBox.js'
import Scroll from '../components/Scroll.js'
import './App.css'

class App extends React.Component {
	constructor () {
		super()
		this.state = {
			robots: [],
			searchfield: '',
		}
	}

	componentDidMount() {
		fetch('https://jsonplaceholder.typicode.com/users')
		.then(response => response.json())
		.then(users => this.setState({ robots: users }))
		
	}

	searchFunction = (event) => {
	this.setState({ searchfield: event.target.value })		

	}

	render () {
	const filteredRobots = this.state.robots.filter(robot => {
		return robot.name.toLowerCase().includes(this.state.searchfield.toLowerCase());
	})
	if (this.state.robots.length === 0) {
		return <h1>Loading</h1>
	} else {
		return(
		<div className='tc'>
			<h1 className='f-headline lh-solid light-blue'>RoboFriends</h1>
			<SearchBox searchChange={this.searchFunction}/>
			<Scroll>
				<CardList  robots={filteredRobots}/>
			</Scroll>
		</div>
		);
		}
	}	
}


export default App