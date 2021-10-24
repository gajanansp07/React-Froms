import React from 'react'
import ReactDom from 'react-dom';

function Rendering_a_Component(props){
    return <h1> Hello, {props.name}</h1>
}
const element = <Rendering_a_Component name="Ganesh" />

ReactDom.render(element, document.getElementById('root'));


export default Rendering_a_Component
