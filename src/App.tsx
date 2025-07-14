import { Box, Flex, Button, Heading, Text } from "@chakra-ui/react"

export default function App() {

  const gameWon: bool = false
  const gameLost: bool = true

  const languages: [string] = [
    "JavaScript",  
    "Python", 
    "Ruby", 
    "Java",
    "TypeScript",
    "Erlang",
    "Haskell",
    "Rust",
    "Assembly",
  ]

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
    gap: 1,
    px: 24,
  }

  const langTagsProps = {
    w: "auto",
    h: 6,
    p: 1,
    bg: "#599137", 
    color: "#F9F4DA",
    rounded: "md",
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

  return (
    // Container
    <Flex {...containerProps}>
      
      {/* Box 0 */}
      <Flex {...box0}>

        {/* Box 1 Header + Game Status */}
        <Flex {...box1}>
          {/* Box 1a Header */}
          <Flex {...box1a}>
            <Heading {...headingProps}>Assembly: Endgame</Heading>
            <Text {...subHeadingProps}>
              {`Guess the word in under 8 attempts to keep the
              programming world safe from Assembly!`}
            </Text>
          </Flex>

          {/* Box 1b Game Status */}
          <Flex {...box1b}>
            { gameWon 
              ? <Box {...gameStatusProps}>
                  <Text fontWeight="semibold">You win!</Text>
                  <Text fontSize="sm">Well done! 🎉</Text>
                </Box>
                  
              : gameLost 
                ? <Box {...gameStatusProps}>
                    <Text fontWeight="semibold">Game over!</Text>
                    <Text fontSize="sm">You lose! Better start learning Assembly 😭</Text>
                  </Box>

                : <Box {...gameStatusProps}>
                    <Text>"Farewell HTML & CSS" 🫡</Text>
                  </Box>  
            }
          </Flex>
        </Flex>

        {/* Box 2 Languages + Word Input */}
        <Flex {...box2}>
          {/* Box 2a Languages */}
          <Flex {...box2a}>
            {languages.map((lang, index) => (
              <Box key={index} {...langTagsProps}>{lang}</Box>
            ))}
          </Flex>

          {/* Box 2b Word Input */}
          <Flex {...box2b}>
            {Array(8)
              .fill('')
              .map(() => 
                <Box {...letterInputProps}></Box>
              )
            }
          </Flex>
        </Flex>

        {/* Box 3 Keyboard */}
        <Flex {...box3}>
          <Flex {...keyboardContainerProps}>
            {alphabet.split("").map((char, index) => (
              <Button key={index} {...keyboardKeyProps}>{char}</Button>
            ))}
          </Flex>
        </Flex>

        {/* Box 4 New Game Button */}
        <Flex {...box4}>
          <Button {...newGameBtnProps}>New Game</Button>
        </Flex>

      </Flex>

    </Flex>
  )
}
