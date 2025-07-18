import { Box, Flex, Text } from "@chakra-ui/react"
import { getFarewellText } from "@/utils"
import { languages } from "@/data/languages" 
import type { JSX } from "react"

type GameStatusProps = {
  isGameWon: boolean,
  isGameLost: boolean,
  isWrongGuess: boolean,
  wrongGuessCount: number,
}

export default function GameStatus(props: GameStatusProps): JSX.Element {
  const getStatusBgColor = (): string => {
    if (props.isGameWon) return "#10A95B"
    if (props.isGameLost) return "#BA2A2A"
    if (props.isWrongGuess) return "#7A5EA7"
    return "transparent"
  }
  
  const statusBoxProps = {
    w: "100%",
    p: "2",
    textAlign: "center",
    whiteSpace: "pre-line",
    fontWeight: "semibold",
    bg: getStatusBgColor(),
    color: "#F9F4DA",
    borderRadius: "sm",
  }

  const getLanguageLostText = (): string => {
    const lostLanguageIndex = props.wrongGuessCount - 1
    const lostLanguageName = languages[lostLanguageIndex].name
    return `"${getFarewellText(lostLanguageName)}" 🫡`
  }
  
  const statusContent: JSX.Element = 
    props.isGameWon 
    ? <>
        <Text>You win!</Text>
        <Text fontSize={{ base: "xs", md: "sm" }}>Well done! 🎉</Text>
      </>        
    : props.isGameLost 
    ? <>
        <Text>Game over!</Text>
        <Text fontSize={{ base: "xs", md: "sm" }}>You lose! Better start learning Assembly 😭</Text>
        </>
    : props.isWrongGuess
    ? <>
        <Text fontSize={{ base: "xs", md: "sm" }} fontStyle="italic">
          {getLanguageLostText()}
        </Text>
      </>
    : <></>  

  return (
    <Flex 
      flex="2"
      w={{ base: "90%", md: "100%" }}
      align="center"
      justify="center"
      px={{ base: "auto", md: "8" }}
      mb="2"
    > 
      <Box {...statusBoxProps}>
        {statusContent}
      </Box>
    </Flex>
  )
}