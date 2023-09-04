import { HStack,Image, VStack} from '@chakra-ui/react'
import logo from '../Resources/Logo/logo.webp';
import ColorModeSwitch from './ColorModeSwitch';

const Navbar = () => {
    return (
        <HStack justifyContent='space-between' padding='10px'>
            <Image src={logo} boxSize='60px'/>
            <ColorModeSwitch />
        </HStack>
    )
}

export default Navbar