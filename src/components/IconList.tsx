
import { Platform } from '../hook/useGame';
import { Icon } from '@chakra-ui/react';
import {
  FaWindows,
  FaPlaystation,
  FaXbox,
  FaApple,
  FaAndroid,
  FaLinux
} from 'react-icons/fa';
import { MdPhoneIphone } from 'react-icons/md';
import { SiNintendo } from 'react-icons/si';
import { BsGlobe } from 'react-icons/bs';
import { IconType } from 'react-icons';



interface Props{
    platforms: Platform[];
}

const IconList = ({platforms}:Props) => {
  const iconMap:{[key:string]:IconType} = {
    pc:FaWindows,
    playstation: FaPlaystation,
    xbox:FaXbox,
    nintendo : SiNintendo,
    mac:FaApple,
    linux:FaLinux,
    ios:MdPhoneIphone,
    android:FaAndroid,
    web:BsGlobe


  }
  return (
   <>
   {platforms.map((platform)=> (<Icon key={platform.id} as={iconMap[platform.slug]} marginX={"5px"} boxSize={"20px"} color={"blue.300"}/>))}
   </>
  )
}

export default IconList