import React,{Component} from 'react';
import CardList from '../components/CardList';
import SearchBox from '../components/searchBox';
import Scroll from '../components/Scroll';
import ErrorBoundry from '../components/errorBoundry';

import './App.css';

// Redux magic
import {setSearchField} from '../action';
import {connect} from 'react-redux';

class App extends Component{
    constructor(props) {
        super(props)
        this.state = {
            robots: [],
     
        }

    }

    componentDidMount(){
        console.log(this.props.store);
        console.log(this.props)

        fetch('https://jsonplaceholder.typicode.com/users')
            .then(res => res.json())
            .then(user => this.setState({robots: user}));
    }


    render(){
        // redux variables
        const {searchField, onSearchChange} = this.props;
        
        const filterRobots = this.state.robots.filter(robot => {
            return robot.name.toLowerCase().includes(searchField.toLowerCase());
        });
        
        if(this.state.robots.length === 0){
            return <h1 className="tc">Loading </h1>;
        }

        return(
            <div className="tc">
                <h1 className="f2">Rboto</h1>
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
        searchField: state.searchField,
    }
}

const mapDispatchToProps = (dispatch) => {
    return {
        onSearchChange: (event) => dispatch(setSearchField(event.target.value))
    }
}


export default connect(mapStateToProps, mapDispatchToProps)(App);
