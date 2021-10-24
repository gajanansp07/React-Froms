import React, { Component } from 'react'

class RegComp extends Component {
    render() {
        console.log('Reguler Componant')
        return (
            <div>
                Regular Componant {this.props.name}
            </div>
        )
    }
}

export default RegComp
