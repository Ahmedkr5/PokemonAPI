import React from 'react'
import Card from '@mui/material/Card';
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';
// import typeColors from '../typecolors';
import Chip from '@mui/material/Chip';
import Stack from '@mui/material/Stack';

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
        <Card style={{width:350,height:500,marginBottom:'10px',marginLeft:'10px',borderRadius:10}}>
        <CardMedia
          component="img"
          height="300"
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
            {props.pokemon}
          </Typography>
          <Typography variant="body2" color="text.secondary">
          <b> Abilties:</b> {props?.pokeinfo?.abilities[0].ability.name}
          </Typography>
        </CardContent>
        <CardActions>
          
          <Button size="small">Learn More</Button>
        </CardActions>
      </Card>
    )
}

