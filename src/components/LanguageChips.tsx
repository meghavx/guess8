import { Flex, Box, Text } from "@chakra-ui/react"
import { languages } from "@/data/languages" 

export default function LanguageChips(props) {
  const languageChipProps = {
    w: "auto",
    h: 6,
    p: 2,
    rounded: "md",
    fontSize: "xs",
    textAlign: "center",
    fontWeight: "semibold",
    overflow: "hidden",
    display: "flex",
    alignItems: "center", 
  }

  const skullOverlayProps = {
    "position": "absolute",
    "top": 0,
    "left": 0,
    "w": "100%",
    "h": "100%",
    "align": "center",
    "justify": "center",
    "fontSize": "0.8rem",
    "bg": "rgba(0,0,0,0.7)",
    "borderRadius": "md",
  }
  
  const languageChipElements = languages
    .map((lang, index) => {
      const isLanguageLost = index < props.wrongGuessCount
      return (
        <Box 
          key={index} 
          display="inline-block"
          position="relative"
        >
          <Text {...languageChipProps} {...lang}> 
            {lang.name} 
          </Text>
          {isLanguageLost && 
            <Flex {...skullOverlayProps}> 💀 </Flex> 
          }
        </Box>
      )
    })
  
  return (
    <Flex 
      flex={1}
      w="100%"
      align="center"
      justify="center"
      wrap="wrap"
      gap={1}
      px={8}
    > 
      {languageChipElements} 
    </Flex>
  )
}