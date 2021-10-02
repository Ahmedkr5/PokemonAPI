import * as React from 'react';

import { useState,useEffect } from 'react';
import axios from 'axios';
import CardInfo from './CardInfo';
export default function PokeCard(props) {

  const [currentpoki, setCurrentpoki] = useState(props.pokemon.url);

  const [pokemondetail, setPokemondetail] = useState([]);

  const [loading, setLoading] = useState(true);

  useEffect( () => {

  setLoading(true)
  let cancel
    axios.get(currentpoki,{cancelToken : new axios.CancelToken(c=> cancel =c)})
 
  .then((res)=>{
  
   
  
    setPokemondetail(res.data);
    setCurrentpoki("https://pokeapi.co/api/v2/pokemon/"+props.pokemon.name);
    setLoading(false)
 


 
})

  .catch(function (error) {
    
 });
 return () => cancel()
}, [currentpoki,props.pokemon.name])




if(loading) return " "
  return (
    
<CardInfo pokemon={props.pokemon.name} pokeinfo={pokemondetail}></CardInfo>
  );
}