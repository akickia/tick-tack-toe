import Footer from './Components/Footer'
import Main from './Components/Main'
import { ChakraProvider, extendTheme } from '@chakra-ui/react'


function App() {
  //Add fonts
  const theme = extendTheme({
    fonts: {
      heading: `'Bruno Ace SC', cursive`,
      body:  `'Open Sans', sans-serif`,
    }
  })

  return (
    <ChakraProvider theme={theme}>  
      <Main></Main>
      <Footer />
    </ChakraProvider>
  )
}

export default App
