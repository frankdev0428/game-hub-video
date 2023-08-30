import { HStack,Image, Text } from '@chakra-ui/react'
import logo from '../Resources/Logo/logo.webp';

const Navbar = () => {
    return (
        <HStack>
            <Image src={logo} boxSize='60px'/>
            <Text>Navbar</Text>
        </HStack>
    )
}

export default Navbar