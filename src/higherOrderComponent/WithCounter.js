import React from 'react'

const withCounter =(WrappedComponent, incrementNum)=> {
//Higher Order component which takes component as a argument and return it with some functionalitys
    class WithCounter extends React.Component {
        constructor(props){
            super(props)

            this.state = {
                count: 0
            }
        }

        incrementCounter = () =>{
            this.setState(pervState => {
               return {count: pervState.count + incrementNum} 
            })
        }

        render() {
            return <WrappedComponent
            count={this.state.count} 
            incrementCounter={this.incrementCounter} 
            {...this.props} />
        }
    }
    return WithCounter 
}

export default withCounter
