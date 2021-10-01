import React, { Component } from 'react'

class LifeCycleB extends Component {
    constructor(props) {
        super(props)
    
        this.state = {
        name: 'Gajanan'     
        }
        console.log('LifeCycleB Constructor.')
    }
    static getDerivedStateFromProps(props, stste){
        console.log('LifeCycleB Static getDerivedStateFromProps')
        return false
    }
    componentDidMount(){
        console.log('LifeCycleB Compnant did Mount')
    }
    render() {
        return (
            <div>
                LifeCycle B
            </div>
        )
    }
}

export default LifeCycleB
