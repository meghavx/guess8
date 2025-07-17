import { Box, Flex, Text } from "@chakra-ui/react"
import { getFarewellText } from "@/utils"
import { languages } from "@/data/languages" 

export default function Header(props) {
  const gameStatusProps = {
    w: "100%",
    p: 2,
    textAlign: "center",
    whiteSpace: "pre-line",
    fontWeight: "semibold",
    bg: props.gameWon ? "#10A95B" : props.gameLost ? "#BA2A2A" : "#7A5EA7",
    color: "#F9F4DA",
    borderRadius: "sm",
  }
  
  const gameStatus = props.gameWon 
    ? <Box {...gameStatusProps}>
        <Text>You win!</Text>
        <Text fontSize="sm">Well done! 🎉</Text>
      </Box>
        
    : props.gameLost 
      ? <Box {...gameStatusProps}>
          <Text>Game over!</Text>
          <Text fontSize="sm">You lose! Better start learning Assembly 😭</Text>
        </Box>

      : props.isWrongGuess && 
        <Box {...gameStatusProps}>
          <Text fontSize="sm" fontStyle="italic">
            {`"${getFarewellText(languages[props.wrongGuessCount - 1].name)}" 🫡`}
          </Text>
        </Box>  

  return (
    <Flex 
      flex={2}
      w="100%"
      align="center"
      justify="center"
      px={8}
      mb={2}
    > 
      {gameStatus} 
    </Flex>
  )
}