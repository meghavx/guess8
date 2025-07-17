import { Flex, Text } from "@chakra-ui/react"

export default function WordLetters(props) {
  const letterProps = {
    w: 9,
    h: 9,  
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    bg: "#323232",
    fontWeight: "semibold",
    borderBottom: "xs",
    borderColor: "#F9F4DA",
  }

  const wordLetters = props.currentWord
    .split("")
    .map((letter: string, index: number) => {
        const shouldBeRevealed = props.guessedLettersMap.has(letter) || props.isGameLost 
        const isMissingLetter = !props.guessedLettersMap.has(letter)
        const letterColor = isMissingLetter ? "#EC5D49" : "#F9F4DA"
        return (
          <Text 
            key={index} 
            {...letterProps} 
            color={letterColor}>
            {shouldBeRevealed && letter}
          </Text>
        )
      }
    )

  return (
    <Flex 
      flex={2} 
      w="100%" 
      align="center" 
      justify="center" 
      gap={0.5}
    > 
      {wordLetters} 
    </Flex>
  )
}