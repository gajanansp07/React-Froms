import React, { Component } from 'react';
import withCounter from './WithCounter'

class HoverCounter extends Component {
    // constructor(props) {
    //     super(props)
    
    //     this.state = {
    //          count: 0
    //     }
    // }

    // incrementCount =() =>{
    //     this.setState(prevCount =>{
    //        return {count: prevCount.count+1}
    //     });
    // }

    
    render() {
        const {name, count, incrementCounter} = this.props;
        return (
            <div>
                <h2 onMouseOver={incrementCounter}>{name} Hovered {count} time.</h2>
            </div>
        )
    }
}

export default withCounter(HoverCounter, 10)
