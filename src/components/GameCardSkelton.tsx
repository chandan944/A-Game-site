import { Card, CardBody, Skeleton, SkeletonText } from '@chakra-ui/react'


const GameCardSkelton = () => {
  return (
   <Card >
    <Skeleton height='200px' borderRadius={10} />
    <CardBody>
        <SkeletonText/>
    </CardBody>
   </Card> 
  )
}

export default GameCardSkelton