import { Card, CardBody, Heading, HStack, Image } from "@chakra-ui/react";
import { Game } from "../hook/useGame";
import IconList from "./IconList";
import Circite from "./Circite";
import getIma from "../hook/image-url";

export interface Props {
  game: Game;
}

const GameCard = ({ game }: Props) => {
  // console.log("Game object:", game);
  return (
    <Card >
      <Image src={getIma(game.background_image)} />
      <CardBody>
        <Heading fontSize={"20"}>{game.name}</Heading>
        <HStack justifyContent={"space-between"}>
          <div>
            
            <IconList
              platforms={game.parent_platforms.map((p) => p.platform)}
            />
          </div>
          <Circite score={game.metacritic} />
        </HStack>
      </CardBody>
    </Card>
  );
};

export default GameCard;
