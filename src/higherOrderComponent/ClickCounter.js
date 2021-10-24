import React, { Component } from 'react'
import withCounter from './WithCounter'

class ClickCounter extends Component {
    // constructor(props) {
    //     super(props)
    
    //     this.state = {
    //          count:0
    //     }
    // }

    // incremantCount = () =>{
    //     this.setState(prevState =>{
    //         return{ count: prevState.count+1 }
    //     });
    // }
    
    render() {
        const {name, count, incrementCounter} = this.props;
        return (
            <div>
                <button onClick={incrementCounter}>{name} Click { count } times</button>
            </div>
        )
    }
}

export default withCounter(ClickCounter, 5)
