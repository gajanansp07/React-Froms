import React, { Component } from 'react'
import MemoComponant from './MemoComponant'

class Parent_Componant extends Component {
    constructor(props) {
        super(props)
    
        this.state = {
             name : 'Ganesh'
        }
    }

    componentDidMount(){
        setInterval(()=>{
            this.setState({
                name: 'Ganesh'
            })
        },3000)
    }
    
    render() {
        console.log('**************Parent Componant*************');
        return (
            <div>
              <h1>**************Parent Componant*************</h1>  
              <MemoComponant name={this.state.name} />
            </div>
        )
    }
}

export default Parent_Componant
