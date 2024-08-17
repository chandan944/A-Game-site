import { Button, Heading, HStack, Image, List, Spinner } from "@chakra-ui/react";
import useGenre, { Genre } from "../hook/useGenre";
import getIma from "../hook/image-url";

interface Props {
  onSelectGenre: (genre: Genre) => void;
  SelectGenre:Genre|null;
}

const GenreList = ({ onSelectGenre ,SelectGenre }: Props) => {
  const { data ,isLoading } = useGenre();
   if (isLoading) return <Spinner/>
  return (<>
    <Heading fontSize='3xl' marginBottom={5}>Genres 🤩</Heading>
    <List>
      {data.map((genre) => (
        <li key={genre.id}>
          {
            <HStack>
              <Image
              objectFit='cover'
                boxSize={"50px"}
                borderRadius={"3px"}
                marginY={"5px"}
                src={getIma(genre.image_background)}
              />
              <Button
              whiteSpace='normal'
              textAlign='left'
              fontWeight={SelectGenre?.id==genre.id? 'bold':'normal'}
                onClick={() => onSelectGenre(genre)}
                fontSize="lg"
                variant="link"
              >
                {genre.name}
              </Button>
            </HStack>
          }
        </li>
      ))}
    </List>
    </>
  );
};

export default GenreList;
