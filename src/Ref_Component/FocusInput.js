import React, { Component } from 'react'
import Input from './Input'

 class focusInput extends Component {
     constructor(props){
         super(props)
         this.componentRef = React.createRef()
     }
     clickHandler = () =>{
            this.componentRef.current.focusInput()
     }
    render() {
        return (
            <div>
                <Input ref={this.componentRef}/> <br />
                <button onClick={this.clickHandler} > Focus Input</button>
            </div>
        )
    }
}

export default focusInput
