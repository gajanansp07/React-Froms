import React, { Component } from 'react'
import PureComp from './PureComp'
import RegComp from './RegComp'

class ParentCom extends Component {
    constructor(props) {
        super(props)
    
        this.state = {
             name: "Gajanan"
        }
    }
    componentDidMount(){
        setInterval(()=>{
            this.setState({
                name: "Ganesh"
            })
        },2000)
    }

    render() {
        console.log('**************Parent Componant**************')
        return (
            <div>
                Parent Componant
                <RegComp name={this.state.name} />
                <PureComp name={this.state.name} />
            </div>
        )
    }
}

export default ParentCom
