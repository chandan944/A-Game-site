import { Button, Menu, MenuButton, MenuList } from '@chakra-ui/react'

import { BsChevronDown } from 'react-icons/bs'
import usePlatforms from '../hook/usePlatform'

const PlatformSelector = () => {
    const {data , errors} = usePlatforms();
    if (errors)  return null
  return (
    <div><Menu >
        <MenuButton as={Button} rightIcon={<BsChevronDown/>}>Platfom</MenuButton>
        <MenuList>
           { data.map(platfom => <MenuList key={platfom.id}>{platfom.name}</MenuList>)}
        </MenuList>
        </Menu></div>
  )
}

export default PlatformSelector