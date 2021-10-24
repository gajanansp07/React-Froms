import React from 'react'

function MemoComponant({ name}) {
    console.log('Memo Componant...',name);
    return (
        <div>
            <h2> Memo Componants.... {name}</h2>
        </div>
    )
}

export default React.memo(MemoComponant)
