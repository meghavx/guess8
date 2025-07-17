import { Flex, Button } from "@chakra-ui/react"
import type { JSX } from "react"

type NewGameButtonProps = {
  isGameOver: boolean,
  handleClick: () => void,
}

export default function NewGameButton(props: NewGameButtonProps): JSX.Element {
  return (
    <Flex 
      flex={1}
      w="100%"
      align="center"
      justify="center"
    >
      {props.isGameOver &&
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