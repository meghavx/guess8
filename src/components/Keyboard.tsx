import { Flex, Button } from "@chakra-ui/react"
import type { JSX } from "react"

type KeyboardProps = {
  alphabet: string,
  guessedLettersMap: Map<string, boolean>,
  recordGuessedLetter: (letter: string) => void,
  isGameOver: boolean
}

export default function Keyboard(props: KeyboardProps): JSX.Element {
  const keyboardElements: JSX.Element[] = props.alphabet
    .split("")
    .map((letter: string): JSX.Element => {
      const isGuessed: boolean = props.guessedLettersMap.has(letter)
      const isCorrect: boolean = isGuessed && (props.guessedLettersMap.get(letter) ?? false)
      const shouldBeDisabled: boolean = props.guessedLettersMap.has(letter) || props.isGameOver
      
      return (
        <Button 
          key={letter}
          w={1}
          size="sm" 
          opacity={1}
          fontSize="sm"
          color="#1E1E1E"
          bg={isGuessed ? (isCorrect ? "#10A95B" : "#EC5D49") : "#FCBA29"}
          borderRadius="lg"
          onClick={() => props.recordGuessedLetter(letter)}
          disabled={shouldBeDisabled}
        >
          {letter}
        </Button>
      )
    }
  )

  return (
    <Flex 
      flex={3}
      w="100%"
      align="center"
      justify="center"
      wrap="wrap"
      gap={1}
      mb={2}
    > 
      {keyboardElements} 
    </Flex>
  )
}