import React, {Component} from 'react';
import CardList from '../components/CardList';
import SearchBox from '../components/SearchBox';
import Scroller from '../components/Scroller';

class App extends Component {
    constructor(){
        super();
        this.state={
            robots:[],
            searchField:'',
        }
    }
    onSearchChange = (e)=>{
        this.setState({searchField: e.target.value});
    }
    componentDidMount(){
        fetch('https://jsonplaceholder.typicode.com/users')
      .then(response => response.json())
      .then(json => this.setState({robots:json}));
    }
    
        
    render(){
        const {searchField, robots} = this.state;
        const filteredRobots = robots.filter((robot)=>{
            return robot.name.toLowerCase().includes(searchField.toLowerCase())
        })
        return (filteredRobots.length!==0)?
    (
            <div className="tc">
            <SearchBox searchChange={this.onSearchChange}/>
             <Scroller>
            <CardList robots={filteredRobots}/>
            </Scroller>
            </div>
        ):  <h1>Loading...</h1>
    }
    
}

export default App;