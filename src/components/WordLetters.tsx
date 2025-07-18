import { Flex, Text } from "@chakra-ui/react"
import type { JSX } from "react"

type WordLettersProps = {
  currentWord: string,
  guessedLettersMap: Map<string, boolean>,
  isGameLost: boolean,
}

export default function WordLetters(props: WordLettersProps): JSX.Element {
  const letterProps = {
    w: { base: "8", md: "9" },
    h: { base: "8", md: "9" },  
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    bg: "#323232",
    fontWeight: "semibold",
    borderBottom: "xs",
    borderColor: "#F9F4DA",
  }

  const wordLetters: JSX.Element[] = props.currentWord
    .split("")
    .map((letter: string, index: number): JSX.Element => {
        const shouldBeRevealed: boolean = props.guessedLettersMap.has(letter) || props.isGameLost 
        const isMissingLetter: boolean = !props.guessedLettersMap.has(letter)
        const letterColor: string = isMissingLetter ? "#EC5D49" : "#F9F4DA"
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
      flex="2" 
      w={{ base: "90%", md: "100%" }} 
      align="center" 
      justify="center" 
      gap="0.5"
    > 
      {wordLetters} 
    </Flex>
  )
}