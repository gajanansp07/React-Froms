import React,{useState, useEffect} from "react";
import Row from "./Row";

function GreetingHook(){
    const [name,setName] = useState('Gitimoni');
    const [surName,setsurName] = useState('Paralkar');

    function HandleNameChange(e){
        setName(e.target.value);
    }
     function HandlesurNameChange(e){
        setsurName(e.target.value);
    }
    useEffect(()=>{
        document.title= name + ' ' + surName;
    })
    return( 
        <section>
            <Row Name='Name' />
            <input type='text' value={name} onChange={HandleNameChange} />
            <hr />
            <Row Name='Surname' />
            <input type='text' value={surName} onChange={HandlesurNameChange} />
            <hr />
        </section>
        )
   
}
export default GreetingHook