import { useState, useEffect } from "react"
import { Box, Flex, Button, Heading, Text } from "@chakra-ui/react"
import { languages } from "@/data/languages" 
import { words } from "@/data/words"

export default function App() {
  const [currentWord, setCurrentWord] = useState("")
  const [guessedLettersMap, setGuessedLettersMap] = useState(new Map<string, boolean>())

  useEffect(() => { 
    const randomIndex = Math.floor(Math.random() * words.length)
    const randomWord = words[randomIndex]
    setCurrentWord(randomWord)
  }, [])

  const gameWon: boolean = true
  const gameLost: boolean = false
  
  const alphabet: string = "ABCDEFGHIJKLMNOPQRSTUVWXYZ"

  function recordGuessedLetter(letter: string) {
    setGuessedLettersMap(prevMap => {
      const newMap = new Map(prevMap)
      newMap.set(letter, currentWord.includes(letter))
      return newMap
    })
  }

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

  const letterProps = {
    w: 9,
    h: 9,  
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    bg: "#323232",
    color: "#F9F4DA",
    fontWeight: "semibold",
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
    maxW: "420px",
  }

  const keyboardKeyProps = {
    w: 2,
    size: "sm",
    borderRadius: "md",
    color: "#1E1E1E",
    borderColor: "#D7D7D7",
  }
  
  const box4 = {
    flex: 1,
    align: "flex-end",
    justify: "center",
  }

  const newGameBtnProps = {
    display: gameWon || gameLost ? "flex" : "none",
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

  const languageChipElements = languages
    .map(lang => 
      <Text 
        key={lang.name}
        {...languageChipProps}
        {...lang}
      >
        {lang.name}
      </Text>
    )

  const wordLetters = currentWord
    .split("")
    .map((letter, index) => 
      <Text key={index} {...letterProps}>
        {letter}
      </Text>
    )

  const keyboardElements = alphabet
    .split("")
    .map(letter => {
      const isGuessed = guessedLettersMap.has(letter)
      const isCorrect = isGuessed && guessedLettersMap.get(letter)
      
      return (
        <Button 
          key={letter} 
          {...keyboardKeyProps}
          bg={ isGuessed 
            ? isCorrect ? "#10A95B" : "#EC5D49"
            : "#FCBA29"
          }
          onClick={() => recordGuessedLetter(letter)}
        >
          {letter}
        </Button>
      )
    }
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
          <Flex {...box2b}> {wordLetters} </Flex>
        </Flex>

        <Flex {...box3}>
          <Flex {...keyboardContainerProps}> {keyboardElements} </Flex>
        </Flex>

        <Flex {...box4}>
          <Button {...newGameBtnProps}>New Game</Button>
        </Flex>

      </Flex>
    </Flex>
  )
}
