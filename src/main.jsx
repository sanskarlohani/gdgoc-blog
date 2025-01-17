import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import App from './App.jsx'
import { ChakraProvider ,defaultSystem } from '@chakra-ui/react'
import {system} from "./theme/theme.jsx"
import { ColorModeProvider } from '@chakra-ui/color-mode'
import { ThemeProvider } from './contexts/themecontext.jsx'
createRoot(document.getElementById('root')).render(
  <StrictMode>
    <ThemeProvider>
      <ChakraProvider value={system}  >
    <ColorModeProvider >
    <App />
    </ColorModeProvider>
  </ChakraProvider>
    </ThemeProvider>
  
  </StrictMode>
)
