import React, { Component} from 'react';

class ErrorBoudary extends Component{

 
constructor(props){
    super(props);
    this.state={
        hasError:false
    }
}
componentDidCatch(error,info){
    this.setState({hasError:true});
}
render(){
    return this.state.hasError?
    <h1>Ooops, smth went on</h1>:
    this.props.children
}

}

export default ErrorBoudary;