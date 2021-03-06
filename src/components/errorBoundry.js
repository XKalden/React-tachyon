import React, { Component } from 'react';

class ErrorBoundry extends Component {
    constructor(props){
        super(props);
        this.state = {
            hasError: false,
        }
    }

    componentDidCatch(error, info){
        this.setState({hasError: true})
    }


    render(){
        if(this.state.hasError){
            console.log('error found');
            return <div>Error Found </div>
        }

        return(
            this.props.children
        );
    }
}

export default ErrorBoundry;
