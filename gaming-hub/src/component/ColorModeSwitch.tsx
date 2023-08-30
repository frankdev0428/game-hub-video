import {HStack, Switch, Text, useColorMode } from '@chakra-ui/react'


const ColorModeSwitch = () => {
    const {toggleColorMode,colorMode} = useColorMode();
  return (
    <div>
        <HStack>
            <Switch colorScheme='green' isChecked={colorMode === 'dark'} onChange={toggleColorMode}/>
            <Text>Dark Mode</Text>
        </HStack>
    </div>
  )
}

export default ColorModeSwitch