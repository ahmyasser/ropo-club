import React, {Component} from 'react';
import { connect } from 'react-redux';
import CardList from '../components/CardList';
import SearchBox from '../components/SearchBox';
import Scroller from '../components/Scroller';
import ErrorBoundary from '../components/ErrorBoundary';
import {setSearchField} from '../actions';

const mapStateToProps= state =>{
    return{
        searchField: state.searchField
    }
}

const mapDispatchToProps= dispatch =>{
    return {
        onSearchChange:  e => dispatch(setSearchField(e.target.value))
    }
} 

class App extends Component {
    constructor(){
        super();
        this.state={
            robots:[]
                }
    }
    
    componentDidMount(){
        fetch('https://jsonplaceholder.typicode.com/users')
      .then(response => response.json())
      .then(json => this.setState({robots:json}));
        
    }
      
    render(){
        const { robots} = this.state;
        const {searchField, onSearchChange}= this.props;
        const filteredRobots = robots.filter((robot)=>{
            return robot.name.toLowerCase().includes(searchField.toLowerCase())
        })
        return (
        
            <div className="tc">
            <SearchBox searchChange={onSearchChange}/>
             <Scroller>
            <ErrorBoundary>
             <CardList robots={filteredRobots}/>
             </ErrorBoundary>
             </Scroller>
            </div>
        )        
    }
    
}

export default connect(mapStateToProps,mapDispatchToProps)(App);