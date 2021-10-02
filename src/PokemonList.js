import React from 'react'
import PokeCard from './components/Card/PokeCard';

import Container from '@mui/material/Container';
export default function PokemonList(props) {

    return (
        <Container  style={{ display: 'flex',flexDirection:'row',flexWrap:'wrap'}}>

        
           {props.pokemon.map((p,index)=>(
           <PokeCard key={index} pokemon={p} style={{width:'30%',height:500}} ></PokeCard>
           ))} 
   
        </Container>
    )
}
