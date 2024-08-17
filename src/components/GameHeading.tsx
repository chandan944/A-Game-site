
import { GameQuery } from '../App'
import { Heading } from '@chakra-ui/react'

interface Props{
    gameQuery:GameQuery
}
const GameHeading = ({gameQuery}:Props) => {
    const heading = `${gameQuery.platform?.name || ''} ${gameQuery.genre?.name || ''} Game`
  return (
   <Heading margin={"10px 0px 10px 7px"} >{heading}</Heading>
  )
}

export default GameHeading