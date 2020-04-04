import React from 'react'
import './hero.scss'
import styled from 'styled-components'
import BCG from '../../imglht5.jpeg'
import '../../index.scss';

export default function Hero ({img,max}) {
        return (

            <HeroWrapper max={max} img={img}>
                <div className="banner">
                    <p>
                        Hey! I'm
                    </p>
                    <h1>
                        Tiffany
                    </h1>
                </div>
            </HeroWrapper>
            
        );
    
}

const HeroWrapper = styled.div`
    text-align:center;
    font-family:$title;
    display:flex;
    align-items:center;
    justify-content:center;
    min-height: ${props =>props.max?'90vh':'60vh'}; 
    color: white;
    background: url(${props => props.img}) center/cover no-repeat;
    .banner{
        text-shadow: 6px 6px 4px rgba(0,0,0,0.3);
        text-transform: capitalize;
        letter-spacing: 0.1rem;
    }
`
Hero.defaultProps ={
    img:BCG
}
