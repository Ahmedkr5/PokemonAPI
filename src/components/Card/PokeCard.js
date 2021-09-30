import * as React from 'react';
import Card from '@mui/material/Card';
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';
import { useState,useEffect } from 'react';
import axios from 'axios';
import CardInfo from './CardInfo';
export default function PokeCard(props) {

  const [currentpoki, setCurrentpoki] = useState(props.pokemon.url);
  const [pokemondetail, setPokemondetail] = useState([]);
  const [pokemondetail2, setPokemondetail2] = useState([]);
  const [loading, setLoading] = useState(true);

useEffect(() => {

  setLoading(true)
  let cancel
    axios.get(currentpoki,{cancelToken : new axios.CancelToken(c=> cancel =c)})
 
  .then((res)=>{
  
   
  
    setPokemondetail(res.data);
    setLoading(false)
 


 
})

  .catch(function (error) {
    console.log(error);
 });
 return () => cancel()
}, [currentpoki])



if(loading) return "Loading..."
  return (
    
<CardInfo pokemon={props.pokemon.name} pokeinfo={pokemondetail}></CardInfo>
  );
}