import React, {Component} from 'react';
import CardList from './CardList';
import SearchBox from './SearchBox'
import {robots} from './robots';


class App extends Component {
    constructor(){
        super();
        this.state={
            robots:robots,
            searchField:'',
            filteredRobots:[]
        }
    }
    onSearchChange = (e)=>{
        this.setState({searchField: e.target.value});
        const filteredRobots = this.state.robots.filter((robot)=>{
            return robot.name.toLowerCase().includes(this.state.searchField.toLowerCase())
        })
        this.setState({filteredRobots:filteredRobots})
            
    }
    render(){
        return(
            <div className="tc">
            <SearchBox searchChange={this.onSearchChange}/>
            <CardList robots={this.state.filteredRobots}/>
            </div>
        );
    }
    
}

export default App;