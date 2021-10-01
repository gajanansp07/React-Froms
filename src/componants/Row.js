import React from "react";

function Row(props){
    console.log(props)
    return(
        <div>
            <h1>{props.Name}</h1>
        </div>
        
    )
    
}
export default Row