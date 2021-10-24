import React, { Component } from 'react'
import ComponentF from './ComponentF'
import UserContext from './UserContaxt'

class ComponentE extends Component {
    static contextType = UserContext  
    render() {
        return (
            <div>
                <h1>Component E Context {this.context} </h1> 
                <ComponentF />
            </div>
        )
    }
}

// ComponentE.contextType = UserContext

export default ComponentE
