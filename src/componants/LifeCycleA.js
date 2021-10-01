import React, { Component } from 'react'
import LifeCycleB from './LifeCycleB'

class LifeCycleA extends Component {
    constructor(props) {
        super(props)
    
        this.state = {
            Name: 'Gajanan'
        }
        console.log('LifeCycleA Constructor')
    }
    static getDerivedStateFromProps(props, state){
        console.log('LifeCycleA Static GetDerivedStateFromProps')
        return false

    }
    componentDidMount(){
        console.log('LifeCycleA Componant Did Mount')
    }
    render() {
        console.log('LifeCycleA Render')
        return (
            <div>
                <div>LifeCycleA</div>
                <LifeCycleB />
                
            </div>
        )
    }
}

export default LifeCycleA
