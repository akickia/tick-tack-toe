import { useEffect, useState } from "react"
import "./Board.scss"
import { Box } from "@chakra-ui/react"

export default function Board() {
  const [boxPos, setBoxPos] = useState({x: 0, y: 0})

  useEffect(() => {
    console.log(`Coordinates x: ${boxPos.x}, y: ${boxPos.y}`)
  }, [boxPos])
  const  handleOnclick = (event) => {
    setBoxPos({x:event.clientX, y:event.clientY})
    
  }
  return (
    <section>
      <Box onClick={(event) => {handleOnclick(event)}} cursor="pointer" display="flex" alignItems="center" justifyContent="center" w="100%" h="100%" bgGradient="linear(to-t, green.100, pink.300)">box</Box>
      <Box onClick={(event) => {handleOnclick(event)}} cursor="pointer" display="flex" alignItems="center" justifyContent="center" w="100%" h="100%" bgGradient="linear(to-t, green.100, pink.300)">box</Box>
      <Box onClick={(event) => {handleOnclick(event)}} cursor="pointer" display="flex" alignItems="center" justifyContent="center" w="100%" h="100%" bgGradient="linear(to-t, green.100, pink.300)">box</Box>
      <Box onClick={(event) => {handleOnclick(event)}} cursor="pointer" display="flex" alignItems="center" justifyContent="center" w="100%" h="100%" bgGradient="linear(to-t, green.100, pink.300)">box</Box>
      <Box onClick={(event) => {handleOnclick(event)}} cursor="pointer" display="flex" alignItems="center" justifyContent="center" w="100%" h="100%" bgGradient="linear(to-t, green.100, pink.300)">box</Box>
      <Box onClick={(event) => {handleOnclick(event)}} cursor="pointer" display="flex" alignItems="center" justifyContent="center" w="100%" h="100%" bgGradient="linear(to-t, green.100, pink.300)">box</Box>
      <Box onClick={(event) => {handleOnclick(event)}} cursor="pointer" display="flex" alignItems="center" justifyContent="center" w="100%" h="100%" bgGradient="linear(to-t, green.100, pink.300)">box</Box>
      <Box onClick={(event) => {handleOnclick(event)}} cursor="pointer" display="flex" alignItems="center" justifyContent="center" w="100%" h="100%" bgGradient="linear(to-t, green.100, pink.300)">box</Box>
      <Box onClick={(event) => {handleOnclick(event)}} cursor="pointer" display="flex" alignItems="center" justifyContent="center" w="100%" h="100%" bgGradient="linear(to-t, green.100, pink.300)">box</Box>
    </section>
  )
}
