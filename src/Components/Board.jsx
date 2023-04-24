import { useEffect, useState } from "react"
import "./Board.scss"
import { Box } from "@chakra-ui/react"

export default function Board() {

  //Get coordinates of mouse when clicking and writing to console.
  const [boxPos, setBoxPos] = useState({x: 0, y: 0})
  useEffect(() => {
    console.log(`Coordinates x: ${boxPos.x}, y: ${boxPos.y}`)
  }, [boxPos])
  const  handleOnclick = (event) => {
    setBoxPos({x:event.clientX, y:event.clientY})
  }


  return (
    <section>
      <Box onClick={(event) => {handleOnclick(event)}} cursor="pointer" display="flex" alignItems="center" justifyContent="center" w="100%" h="100%" bgGradient="linear(to-t, green.100, green.50, green.100)"></Box>
      <Box onClick={(event) => {handleOnclick(event)}} cursor="pointer" display="flex" alignItems="center" justifyContent="center" w="100%" h="100%" bgGradient="linear(to-t, green.100, green.50, green.100)"></Box>
      <Box onClick={(event) => {handleOnclick(event)}} cursor="pointer" display="flex" alignItems="center" justifyContent="center" w="100%" h="100%" bgGradient="linear(to-t, green.100, green.50, green.100)"></Box>
      <Box onClick={(event) => {handleOnclick(event)}} cursor="pointer" display="flex" alignItems="center" justifyContent="center" w="100%" h="100%" bgGradient="linear(to-t, green.100, green.50, green.100)"></Box>
      <Box onClick={(event) => {handleOnclick(event)}} cursor="pointer" display="flex" alignItems="center" justifyContent="center" w="100%" h="100%" bgGradient="linear(to-t, green.100, green.50, green.100)"></Box>
      <Box onClick={(event) => {handleOnclick(event)}} cursor="pointer" display="flex" alignItems="center" justifyContent="center" w="100%" h="100%" bgGradient="linear(to-t, green.100, green.50, green.100)"></Box>
      <Box onClick={(event) => {handleOnclick(event)}} cursor="pointer" display="flex" alignItems="center" justifyContent="center" w="100%" h="100%" bgGradient="linear(to-t, green.100, green.50, green.100)"></Box>
      <Box onClick={(event) => {handleOnclick(event)}} cursor="pointer" display="flex" alignItems="center" justifyContent="center" w="100%" h="100%" bgGradient="linear(to-t, green.100, green.50, green.100)"></Box>
      <Box onClick={(event) => {handleOnclick(event)}} cursor="pointer" display="flex" alignItems="center" justifyContent="center" w="100%" h="100%" bgGradient="linear(to-t, green.100, green.50, green.100)"></Box>
    </section>
  )
}
