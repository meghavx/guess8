import { Flex, Button } from "@chakra-ui/react"

export default function NewGameButton(props) {
  return (
    <Flex 
      flex={1}
      w="100%"
      align="center"
      justify="center"
    >
      {props.gameOver &&
        <Button 
          w={180}
          bg="#11B5E5"
          color="#1E1E1E"
          borderColor="#D7D7D7"
          onClick={props.handleClick} 
        >
          New Game 
        </Button>
      }
    </Flex>
  )
}