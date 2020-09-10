import React, {Component} from 'react';
import CardList from './CardList';
import SearchBox from './SearchBox';
import Scroller from './Scroller';

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
        const filteredRobots = this.state.robots.filter((robot)=>{
            return robot.name.toLowerCase().includes(this.state.searchField.toLowerCase())
        })
if(filteredRobots.length!==0){
    return(
            <div className="tc">
            <SearchBox searchChange={this.onSearchChange}/>
             <Scroller>
            <CardList robots={filteredRobots}/>
            </Scroller>
            </div>
        );}
        else{
            return(
<h1>Loading...</h1>
            );
        }
    }
    
}

export default App;