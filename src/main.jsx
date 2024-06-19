import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import './index.css'
import { ChakraProvider, extendTheme } from "@chakra-ui/react"
import { MyProvider } from './context/context.jsx'

const colors = {
  brand: {
    900: "#242424",
    800: "#242424",
    700: "#242424",
  },
}

const theme = extendTheme({ colors })

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <ChakraProvider theme={theme}>
      <MyProvider>
        <App />
      </MyProvider>
    </ChakraProvider>
  </React.StrictMode>,
)
