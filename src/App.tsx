import { Box, Flex, Button, Heading, Text } from "@chakra-ui/react"
import { languages } from "./languages" 

export default function App() {
  const gameWon: bool = true
  const gameLost: bool = false
  
  const alphabet: string = "ABCDEFGHIJKLMNOPQRSTUVWXYZ"

  // Layout Props
  const containerProps = {
    w: "auto",
    h: "100vh",
    align: "center",
    justify: "center",
    overflow: "hidden",
    bg: "#282726",
  } 

  const box0 = {
    w: "500px",
    h: "100%",
    direction: "column",
    justify: "center",
    py: "12",
    border: 2,
    borderColor: "white",
  }

  const box1 = {
    flex: 3, 
    direction: "column",
    align: "center",
    justify: "space-between",
  }

  const box1a = {
    flex: 1,
    direction: "column",
    align: "center",
    justify: "space-around",
  }

  const headingProps = {
    color: "#F9F4DA",
  }

  const subHeadingProps = {
    whiteSpace: "pre-line",
    textAlign: "center",
    color: "#8E8E8E",
    fontSize: "sm",
    lineHeight: "shorter",
  }

  const box1b = {
    flex: 1,
    w: "65%",
    my: 5,
    align: "center",
    borderRadius: "sm",
    bg: gameWon ? "#10A95B" : gameLost ? "#BA2A2A" : "#7A5EA7",
    color: "#F9F4DA",
  }

   const gameStatusProps = {
    w: "100%",
    p: 1,
    whiteSpace: "pre-line",
    textAlign: "center",
    fontWeight: "semibold",
  }

  const box2 = {
    flex: 3,
    direction: "column",
    align: "center",
    justify: "space-around",
  }

  const box2a = {   
    align: "center",
    justify: "center",
    wrap: "wrap",
    gap: "2px",
    px: 24,
  }

  const languageChipProps = {
    w: "auto",
    h: 6,
    p: 1,
    rounded: "sm",
    fontSize: "xs",
    textAlign: "center",
    fontWeight: "semibold",
  }
  
  const box2b = {
    gap: 0.5,
  }  

  const letterInputProps = {
    w: 9,
    h: 9,
    bg: "#323232",
    borderBottom: "xs",
    borderColor: "#F9F4DA",
  }

  const box3 = {
    flex: 3,
    align: "center",
    justify: "center",
  }

  const keyboardContainerProps = {
    justify: "center",
    wrap: "wrap",
    gap: 1,
    px: 10,
  }

  const keyboardKeyProps = {
    w: 2,
    size: "sm",
    borderRadius: "md",
    bg: "#FCBA29",
    color: "#1E1E1E",
    borderColor: "#D7D7D7",
  }
  
  const box4 = {
    flex: 1,
    align: "flex-end",
    justify: "center",
  }

  const newGameBtnProps = {
    w: 200,
    bg: "#11B5E5",
    color: "#1E1E1E",
    borderColor: "#D7D7D7",
  }

  const headerAndDescription = <>
    <Heading {...headingProps}>
      Assembly: Endgame</Heading>
    <Text {...subHeadingProps}>
      {`Guess the word in under 8 attempts to keep the
      programming world safe from Assembly!`}
    </Text>
  </>

  const gameStatus = gameWon 
    ? <Box {...gameStatusProps}>
        <Text>You win!</Text>
        <Text fontSize="sm">Well done! 🎉</Text>
      </Box>
        
    : gameLost 
      ? <Box {...gameStatusProps}>
          <Text>Game over!</Text>
          <Text fontSize="sm">You lose! Better start learning Assembly 😭</Text>
        </Box>

      : <Box {...gameStatusProps}>
          <Text fontSize="sm" fontStyle="italic">"Farewell HTML & CSS" 🫡</Text>
        </Box>  

  const languageChipElements = languages.map(lang => 
    <Text 
      key={lang.name}
      {...languageChipProps}
      {...lang}
    >
      {lang.name}
     </Text>
  )

  const wordInput = Array(8)
    .fill('')
    .map(() => <Box {...letterInputProps}></Box>)

  const keyboard = alphabet.split("").map((char, index) =>
    <Button 
      key={index} 
      {...keyboardKeyProps}
    >
      {char}
    </Button>
  )

  return (
    <Flex {...containerProps}>
      <Flex {...box0}>

        <Flex {...box1}>
          <Flex {...box1a}> {headerAndDescription} </Flex>
          <Flex {...box1b}> {gameStatus} </Flex>
        </Flex>

        <Flex {...box2}>
          <Flex {...box2a}> {languageChipElements} </Flex>
          <Flex {...box2b}> {wordInput} </Flex>
        </Flex>

        <Flex {...box3}>
          <Flex {...keyboardContainerProps}> {keyboard} </Flex>
        </Flex>

        <Flex {...box4}>
          <Button {...newGameBtnProps}>New Game</Button>
        </Flex>

      </Flex>
    </Flex>
  )
}
