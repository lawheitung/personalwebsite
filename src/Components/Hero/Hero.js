import React from 'react'
import './hero.scss'

export default function Hero ({children,hero}) {
        return (
            <header className={hero}>
            
            {children}</header>
        
            
        );
    
}

Hero.defaultProps = {
    hero: "defaultHero"
}
