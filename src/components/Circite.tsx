import { Badge } from "@chakra-ui/react";

interface Props{
   score:number;
}

const Circite = ({score}:Props) => {
    const color = score>90? "green":score >80? "yellow":'red'
  return (
    <>
    <Badge colorScheme={color} color={`${color}.300`} fontSize={"15px"} borderRadius={"5px"} >{score}</Badge>
    </>
  )
}

export default Circite