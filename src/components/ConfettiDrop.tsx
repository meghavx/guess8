import Confetti from "react-confetti"
import type { JSX } from "react"

export default function ConfettiDrop({ isGameWon }: { isGameWon: boolean }): JSX.Element {
  return (isGameWon ? <Confetti /> : <></>)
}