import { SimpleGrid, Text } from "@chakra-ui/react";
import useGame from "../hook/useGame";
import GameCard from "./GameCard";
import { Genre } from "../hook/useGenre";
import GameCardSkelton from "./GameCardSkelton";
import GameCardCoantainer from "./GameCardCoantainer";
import { Platform } from "../hook/useData";
import { GameQuery } from "../App";

interface Props {
  gameQuery:GameQuery
  selectGenre: Genre | null;
  selectedPlatform: Platform |null
}

const GameGrid = ({ gameQuery }: Props) => {
  const { data, errors, isLoading } = useGame(gameQuery);
  const skeleton = [1, 2, 3, 4, 5, 6,7,8,9,10,11,12,13,14,15];
  return (
    <>
      {errors && <Text>{errors}</Text>}
      <SimpleGrid
        columns={{ sm: 1, md: 2, lg: 3, xl: 5 }}
        margin={"10px"}
        spacing={5}
      >
        {isLoading &&
          skeleton.map((skeleton) => (
            <GameCardCoantainer key={skeleton}>
              <GameCardSkelton  />
            </GameCardCoantainer>
          ))}
        {data.map((game) => (
          <GameCardCoantainer key={game.id}>
            <GameCard game={game} />
          </GameCardCoantainer>
        ))}
      </SimpleGrid>
    </>
  );
};

export default GameGrid;
