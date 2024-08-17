import { Grid, GridItem, HStack, Show } from "@chakra-ui/react";
import NavBar from "./components/NavBar";
import GameGrid from "./components/GameGrid";
import GenreList from "./components/GenreList";
import { useState } from "react";
import { Genre } from "./hook/useGenre";
import PlatformSelector from "./components/PlatformSelector";
import { Platform } from "./hook/useData";
import SortSelector from "./components/SortSelector";
import GameHeading from "./components/GameHeading";

export interface GameQuery {
  genre: Genre | null;
  platform: Platform | null;
  sortOrder: string; // Correct this spelling to match the actual use
  TextInput: string;
}

function App() {
  const [gameQuery, setGameQuery] = useState<GameQuery>({} as GameQuery);

  return (
    <Grid
      templateAreas={{
        base: `"nav" "main"`,
        lg: `"nav nav" "aside main"`,
      }}
      templateColumns={{
        base: "1fr",
        lg: "200px 1fr",
      }}
    >
      <GridItem area="nav">
        <NavBar
          onSearch={(TextInput) =>
            setGameQuery({
              ...gameQuery,
              TextInput,
            })
          }
        />
      </GridItem>
      <Show above="lg">
        <GridItem area="aside" marginX={"10px"}>
          <GenreList
            onSelectGenre={(genre) => setGameQuery({ ...gameQuery, genre })}
            SelectGenre={gameQuery.genre}
          />
        </GridItem>
      </Show>
      <GridItem area="main">
        <GameHeading   gameQuery={gameQuery}/>
        <HStack spacing={5} margin={"10px 0px 10px 7px"} marginBottom={10}>
          <SortSelector
            sortOrders={gameQuery.sortOrder}
            onSelectSortOrder={(sortOrder) =>
              setGameQuery({ ...gameQuery, sortOrder })
            }
          />
          <PlatformSelector
            selectedPlatform={gameQuery.platform}
            onSelectPlatform={(platform) =>
              setGameQuery({ ...gameQuery, platform })
            }
          />
        </HStack>
        <GameGrid
          gameQuery={gameQuery}
          selectGenre={null}
          selectedPlatform={null}
        />
      </GridItem>
    </Grid>
  );
}

export default App;
