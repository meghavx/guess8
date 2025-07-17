import Confetti from "react-confetti"
import { useWindowSize } from "react-use"

export default function ConfettiDrop(props) {
  const { width, height } = useWindowSize()
 
  return ( props.gameWon && 
    <Confetti 
      width={width} 
      height={height} 
    />
  )
}