import React,{Component} from 'react';
import CardList from '../components/CardList';
import SearchBox from '../components/searchBox';
import Scroll from '../components/Scroll';
import ErrorBoundry from '../components/errorBoundry';

import Header from '../components/Header';


import './App.css';

// Redux magic
import {setSearchField, requestRobots} from '../action';
import {connect} from 'react-redux';

class App extends Component{
    constructor(props) {
        super(props)
        this.state = {
           
        }

    }

    componentDidMount(){
        console.log(this.props.store);
        console.log(this.props)

        this.props.onFetchRobot();
    }


    render(){
        // redux variables
        const {searchField, onSearchChange, robots, ispedning} = this.props;
        
        const filterRobots = robots.filter(robot => {
            return robot.name.toLowerCase().includes(searchField.toLowerCase());
        });
        
        if(robots.length === 0 || ispedning){
            return <h1 className="tc">Loading </h1>;
        }
        console.log('app')
        return(
            <div className="tc">
                <Header />
                <SearchBox searchChange={onSearchChange} />
                <Scroll>
                    <ErrorBoundry>
                        <CardList robots={filterRobots} />
                    </ErrorBoundry>
                </Scroll>
            </div>
        );
    }
}


const mapStateToProps = (state) => {
    return {
        searchField: state.searchRobots.searchField,
        robots: state.requestRobots.robots,
        ispedning: state.requestRobots.ispedning,
        error: state.requestRobots.error

    }
}

const mapDispatchToProps = (dispatch) => {
    return {
        onSearchChange: (event) => dispatch(setSearchField(event.target.value)),
        onFetchRobot: () => dispatch(requestRobots())
    }
}


export default connect(mapStateToProps, mapDispatchToProps)(App);
