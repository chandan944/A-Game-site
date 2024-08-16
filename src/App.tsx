import { Grid, GridItem, Show } from "@chakra-ui/react";
import NavBar from "./components/NavBar";
import GameGrid from "./components/GameGrid";
import GenreList from "./components/GenreList";
import {  useState } from "react";
import { Genre } from "./hook/useGenre";
import PlatformSelector from "./components/PlatformSelector";

function App() {
  const [selectGenre , setSelectGenre] = useState<Genre|null>(null)
  return (
    <Grid
      templateAreas={{
        base: `"nav" "main"`,
        lg: `"nav nav" "aside main"`,
      }}
      templateColumns={{
        base:'1fr',
        lg:'200px 1fr'
      }}
    >
      <GridItem area="nav">
        <NavBar />
      </GridItem>
      <Show above="lg">
        <GridItem area="aside" marginX={"10px"}><GenreList  onSelectGenre={(genre) => setSelectGenre(genre)} SelectGenre={selectGenre}/></GridItem>
      </Show>
      <GridItem area="main">
        <PlatformSelector/>
        <GameGrid selectGenre={selectGenre} />
      </GridItem>
    </Grid>
  );
}

export default App;

