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
  
  
  useEffect(() => {
    let cancel
        axios.get(currentpageUrl,{cancelToken : new axios.CancelToken(c=> cancel =c)}).then((res) => {
      setNextpageUrl(res.data.next)
      setPrevpageUrl(res.data.previous)
      setPokemon(res.data.results.map((p) => p.name))
   
    });
    return () => cancel()
  }, [currentpageUrl]);



  function gotoNextPage(){
    setCurrentpageUrl(nextpageUrl);
  }    
  function gotoPrevPage(){
    setCurrentpageUrl(prevpageUrl);
  }




  return (<>
  <Navbar></Navbar>
  <PokemonList pokemon={pokemon}></PokemonList>
          <Pagination gotoNextPage={nextpageUrl ? gotoNextPage :null } gotoPrevPage={prevpageUrl ? gotoPrevPage :null }></Pagination>
          </>
    );

}

export default App;
