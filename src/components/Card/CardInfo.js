import React from 'react'
import Card from '@mui/material/Card';

import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';

import Typography from '@mui/material/Typography';
import Chip from '@mui/material/Chip';
import Stack from '@mui/material/Stack';

import ShieldIcon from '@mui/icons-material/Shield';
import FavoriteIcon from '@mui/icons-material/Favorite';

import FlashOnIcon from '@mui/icons-material/FlashOn';
const typeColors = {
  bug: '#729f3f',
  dragon: '#53a4cf',
  fairy: '#fdb9e9',
  fire: '#fd7d24',
  ghost: '#7b62a3',
  ground: '#f7de3f',
  normal: '#a4acaf',
  pyschic: '#f366b9',
  steel: '#9eb7b',
  dark: '#707070',
  electric: '#eed535',
  fighting: '#d56723',
  flying: '#3dc7ef',
  grass: '#9bcc50',
  ice: '#51c4e7',
  poison: '#b97fc9',
  rock: '#a38c21',
  water: '#4592c4'
}



export default function CardInfo(props) {
 
  



    return (
        <Card style={{width:350,height:480,marginBottom:'10px',marginLeft:'10px',borderRadius:10}}>
          <CardContent style={{height:'40px',padding:8}}>
          <Typography  variant="h5" component="div"  style={{display:'flex'}}>
    
          
     <div style={{width:'50%',display:'flex',flexDirection:'column',alignItems:'flex-start',marginLeft:10}} >
   
   <ShieldIcon style={{color:'lightgrey'}}  fontSize='large'/>  <b style={{color:'grey',marginLeft:4}}> {props?.pokeinfo?.stats[2]?.base_stat}</b></div>
   <div style={{width:'50%',display:'flex',flexDirection:'column',alignItems:'flex-end',marginRight:10}}>  <FavoriteIcon style={{color:'red'}} fontSize='large' />  <b style={{color:'red',marginRight:4}}> {props?.pokeinfo?.stats[0]?.base_stat}</b></div>
   </Typography>
          </CardContent>
        <CardMedia
          component="img"
          style={{height: 200,width:200,marginLeft:'20%'}}
          
          image={props?.pokeinfo?.sprites.front_default}
          alt=""
        />
        <CardContent>
        <Stack direction="row" spacing={1}>
                {props?.pokeinfo?.types.map((type,i) => (
                <Chip key={i} label={type.type.name} style={{ backgroundColor: typeColors[type.type.name] }}/>
                            
                    ))
                }
                </Stack>
          <Typography gutterBottom variant="h5" component="div">
        <b>    {props.pokemon}</b>
          </Typography>
          <Typography variant="body2" color="text.secondary">
         <b> Abilties:</b> {props?.pokeinfo?.abilities[0].ability.name}-
          {props?.pokeinfo?.abilities[1]?.ability.name} <br/>
          <b>  Height:</b> {props.pokeinfo.height}<br/>
          <b> Weight:</b> {props.pokeinfo.weight}</Typography>
          <Typography  variant="h5" component="div"  >  <div style={{display:'flex',flexDirection:'column',alignItems:'flex-end'}}> <  FlashOnIcon  style={{color:'gold'}} fontSize='large' /><b style={{color:'gold',marginRight:4}}>{props?.pokeinfo?.stats[1]?.base_stat}</b> </div>
          </Typography>
        </CardContent>
      
      </Card>
    )
}

