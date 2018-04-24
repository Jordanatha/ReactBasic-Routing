import React, { Component } from 'react';
import CounterInfo from './ConterInfo';

class App extends Component {

	constructor(props){
		super();
		this.state = {
			name: 'Jordan',
			names:[
				'Jordan',
				'Dylan',
				'Hantze'
			],
			inputName:'', 
			counter:10,
		}
	}

	changeHandler(event){
		this.setState({
			inputName: event.target.value
		})
	}

	addNameHandler(event){
		let newName = this.state.names;
		let input = this.state.inputName;
		newName.push(input);
		this.setState({
			names: newName,
			inputName:''
		})
	}
  render() {
    return (
    	<div>
    		<h1>Home</h1>
    		<p>{this.state.name}</p>
    		<ul>
    			{this.state.names.map((name, index)=> (<li key = {index}>{name}</li>))}
    		</ul>

    		<input type="text" value={this.state.inputName} onChange={(event) => this.changeHandler(event)} />
    		<button onClick = {()=>this.addNameHandler()}>Add Name</button>

    		<CounterInfo counter = {this.state.counter}/>
    	</div>
    );
  }
}

export default App;