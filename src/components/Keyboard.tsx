import { Flex, Button } from "@chakra-ui/react"

export default function Keyboard(props) {
  const alphabet: string = "ABCDEFGHIJKLMNOPQRSTUVWXYZ"

  const keyboardElements = alphabet
    .split("")
    .map(letter => {
      const isGuessed = props.guessedLettersMap.has(letter)
      const isCorrect = isGuessed && props.guessedLettersMap.get(letter)
      const shouldBeDisabled = props.guessedLettersMap.has(letter) || props.gameOver
      
      return (
        <Button 
          key={letter} 
          w={1}
          opacity={1}
          fontSize="sm"
          color="#1E1E1E"
          bg={isGuessed ? (isCorrect ? "#10A95B" : "#EC5D49") : "#FCBA29"}
          border={2}
          borderRadius="lg"
          borderStyle="solid"
          borderColor="#FCBA29"
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