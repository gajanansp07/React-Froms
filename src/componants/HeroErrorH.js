import React from 'react'

function HeroErrorH({heroName}) {
    if(heroName==='Joker'){
        throw new Error('Not A Hero')
    }
    return (
        <div>
            <h1>The {heroName}</h1>
        </div>
    )
}

export default HeroErrorH
