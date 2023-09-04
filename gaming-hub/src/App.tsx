import { Grid, GridItem, Show } from "@chakra-ui/react"
import Navbar from "./component/Navbar"
import GameGrid from "./component/GameGrid"
import GenreList from "./component/GenreList"
import { Genre } from "./hooks/useGenres";
import { useState } from "react";


function App() {
const [selectedGenre , setSelectedGenre] = useState<Genre | null>(null);
  return (
    <>
      <Grid templateAreas={{
        base: `"nav" "main"`,
        lg: `"nav nav" "aside main"`
      }}
      templateColumns={{
        base: '1fr',
        lg: '200px 1fr'
      }}
      >
        <GridItem area='nav' >
          <Navbar />
        </GridItem>
        <Show above='lg'>
        <GridItem area='aside' paddingX={5}>
          <GenreList selectedGenre={selectedGenre} onSelectGenre={(genre) => setSelectedGenre(genre)}/>
        </GridItem>
        </Show>
        <GridItem area='main' >
         <GameGrid selectedGenre={selectedGenre}/>  
        </GridItem>  
      </Grid>
    </>
  )
}

export default App
