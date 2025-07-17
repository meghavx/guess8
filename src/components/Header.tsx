import { Flex, Heading, Text } from "@chakra-ui/react"

export default function Header() {
  return (
    <Flex
      flex={2}
      w="100%"
      direction="column"
      align="center"
      justify="center"
    > 
      <Heading color="#F9F4DA"> Assembly: Endgame </Heading>
      <Text 
        whiteSpace="pre-line"
        textAlign="center"
        color="#8E8E8E"
        fontSize="sm"
        lineHeight="shorter"
      >  
        {`Guess the word in under 8 attempts to keep the
        programming world safe from Assembly!`}
      </Text>
    </Flex>  
  )
}