import React from 'react'
import PokeCard from './components/Card/PokeCard';
import Container from '@mui/material/Container';
export default function PokemonList({pokemon}) {
    return (
        <Container  style={{display:'flex',flexWrap:'wrap',justifyContent:'center '}}>

        
           {pokemon.map(p=>(
           <PokeCard key={p} pokemon={p}></PokeCard>
           ))} 
   
        </Container>
    )
}
