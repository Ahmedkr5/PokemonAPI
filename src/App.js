import React, { useState, useEffect } from "react";
import PokemonList from "./PokemonList";
import axios from "axios";
import Pagination from "./Pagination";
import Navbar from "./components/Navbar/Navbar";
function App() {
  const [pokemon, setPokemon] = useState([]);
  
  const [currentpageUrl, setCurrentpageUrl] = useState("https://pokeapi.co/api/v2/pokemon");
  const [nextpageUrl, setNextpageUrl] = useState();
  const [prevpageUrl, setPrevpageUrl] = useState();
  const [loading, setLoading] = useState(true);
  
  useEffect(() => {setLoading(true)
    let cancel
    
        axios.get(currentpageUrl,{cancelToken : new axios.CancelToken(c=> cancel =c)}).then((res) => {
          setLoading(false)
      setNextpageUrl(res.data.next)
      setPrevpageUrl(res.data.previous)
      setPokemon(res.data.results)
      
    });
    return () => cancel()
  }, [currentpageUrl]);



  function gotoNextPage(){
    setCurrentpageUrl(nextpageUrl);
  }    
  function gotoPrevPage(){
    setCurrentpageUrl(prevpageUrl);
  }

  if(loading) return "Loading..."


  return (<div style={{backgroundColor:'#f9f9f9'}}>
  <Navbar></Navbar>
  <Pagination  gotoNextPage={nextpageUrl ? gotoNextPage :null } gotoPrevPage={prevpageUrl ? gotoPrevPage :null }></Pagination>
  <PokemonList pokemon={pokemon}  ></PokemonList>
         
          </div>
    );

}

export default App;
