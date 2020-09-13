import React, {Component} from 'react';
import { connect } from 'react-redux';
import CardList from '../components/CardList';
import SearchBox from '../components/SearchBox';
import Scroller from '../components/Scroller';
import ErrorBoundary from '../components/ErrorBoundary';
import {setSearchField, requestRobots} from '../actions';

const mapStateToProps= state =>{
    return{
        searchField: state.searchRobots.searchField,
        robots:state.requestRobots.robots,
        isPending:state.requestRobots.isPending,
        error:state.requestRobots.error
    }
}

const mapDispatchToProps= dispatch =>{
    return {
        onSearchChange:  e => dispatch(setSearchField(e.target.value)),
        onRequestRobot: ()=> requestRobots(dispatch)
    }
} 

class App extends Component {
    
    componentDidMount(){
       this.props.onRequestRobot(); 
    }
      
    render(){
        const {searchField, onSearchChange, robots , isPending}= this.props;
        const filteredRobots = robots.filter((robot)=>{
            return robot.name.toLowerCase().includes(searchField.toLowerCase())
        })
        return isPending?
        <h1>loading..</h1>:
        (    <div className="tc">
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