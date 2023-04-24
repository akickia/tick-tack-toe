import Board from "./Board";
import { Heading } from "@chakra-ui/react";

export default function Main() {
  return (
    <article>
      <Heading textAlign="center" p="2rem"> Tick tack toe</Heading>
      <Board />
    </article>
  )
}
