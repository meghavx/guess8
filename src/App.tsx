import { useState } from "react"
import { Flex } from "@chakra-ui/react"
import { getRandomWord } from "@/utils"
import { languages } from "@/data/languages" 

import Header from "@/components/Header"
import GameStatus from "@/components/GameStatus"
import LanguageChips from "./components/LanguageChips"
import WordLetters from "./components/WordLetters"
import Keyboard from "./components/Keyboard"
import NewGameButton from "./components/NewGameButton"
import ConfettiDrop from "./components/ConfettiDrop"

export default function App() {
  // State values
  const [currentWord, setCurrentWord] = useState(() => getRandomWord())
  const [guessedLettersMap, setGuessedLettersMap] = useState(new Map<string, boolean>())
  
  // Derived values
  const wrongGuessCount = Array
    .from(guessedLettersMap.values())
    .reduce((acc, val) => val ? acc : acc + 1, 0)
  
  const correctGuessCount = currentWord
    .split("")
    .reduce((acc, letter) => 
      guessedLettersMap.has(letter) ? acc + 1 : acc, 0
    )

  const isWrongGuess = guessedLettersMap.size > 0 
    ? !(Array.from(guessedLettersMap.values()).at(-1) ?? false)
    : false

  const isGameWon: boolean = correctGuessCount === currentWord.length 
  const isGameLost: boolean = wrongGuessCount === currentWord.length
  const gameOver = isGameWon || isGameLost
  
  // Functions
  function recordGuessedLetter(letter: string) {
    const isCorrect = currentWord.includes(letter)

    setGuessedLettersMap(prevMap => {
      const newMap = new Map(prevMap)
      newMap.set(letter, isCorrect)
      return newMap
    })
  }  

  function newGame() {
    setGuessedLettersMap(new Map<string, boolean>())
    setCurrentWord(() => getRandomWord())
  }

  // Layout Props
  const appContainerProps = {
    w: "auto",
    h: "100vh",
    align: "center",
    justify: "center",
    overflow: "hidden",
    bg: "#282726",
  } 

  const gameContainerProps = {
    w: "400px",
    h: "100%",
    direction: "column",
    align: "center",
    justify: "center",
    gap: 4,
    py: "10",
    border: 2,
    borderColor: "white",
  }

  return (
    <Flex {...appContainerProps}>
      <Flex {...gameContainerProps}>
        <ConfettiDrop isGameWon={isGameWon} />  
        <Header />
        <GameStatus 
          isGameWon={isGameWon}
          isGameLost={isGameLost}
          isWrongGuess={isWrongGuess}
          wrongGuessCount={wrongGuessCount} 
        />
        <LanguageChips
          languages={languages} 
          wrongGuessCount={wrongGuessCount} 
        />
        <WordLetters 
          currentWord={currentWord}
          guessedLettersMap={guessedLettersMap}
          isGameLost={isGameLost}
        />
        <Keyboard 
          guessedLettersMap={guessedLettersMap}
          recordGuessedLetter={recordGuessedLetter}
          gameOver={gameOver}
        />
        <NewGameButton 
          gameOver={gameOver} 
          handleClick={newGame} 
        />
      </Flex>
    </Flex>
  )
}