import { Card, CardBody, Heading, HStack, Image } from "@chakra-ui/react";
import { Game } from "../hook/useGame";
import IconList from "./IconList";
import Circite from "./Circite";
import getIma from "../hook/image-url";
import Emoji from "./Emoji";


export interface Props {
  game: Game;
}

const GameCard = ({ game }: Props) => {
  // console.log("Game object:", game);
  return (
    <Card >
      <Image src={getIma(game.background_image)} />
      <CardBody>
      <HStack justifyContent={"space-between"} marginBottom={"5px"}>
          <div>
            
            <IconList 
              platforms={game.parent_platforms.map((p) => p.platform)}
            />
          </div>
          <Circite score={game.metacritic} />
        </HStack>
        <Heading fontSize={"20"}>{game.name}</Heading>
        <Emoji rating={game.rating_top}/>
      </CardBody>
    </Card>
  );
};

export default GameCard;
