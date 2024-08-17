import { Button, Menu, MenuButton, MenuList } from '@chakra-ui/react'

import { BsChevronDown } from 'react-icons/bs'
import usePlatforms from '../hook/usePlatform'
import { Platform } from '../hook/useData'

interface Props {
    onSelectPlatform:(platform:Platform) =>void;
    selectedPlatform: Platform | null
}

const PlatformSelector = ({onSelectPlatform ,selectedPlatform}:Props) => {
    const {data , errors} = usePlatforms();
    if (errors)  return null
  return (
    <div><Menu >
        <MenuButton  as={Button} rightIcon={<BsChevronDown/>}>{selectedPlatform?.name || 'Platforms'}</MenuButton>
        <MenuList>
           { data.map(platfom => <MenuList onClick={()=> onSelectPlatform(platfom)} key={platfom.id} >{platfom.name}</MenuList>)}
        </MenuList>
        </Menu></div>
  )
}

export default PlatformSelector