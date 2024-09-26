// Packages
import React from 'react'
import ReactDOM from 'react-dom/client'
import {BrowserRouter} from 'react-router-dom'
import { ChakraProvider } from '@chakra-ui/react'

// Local Imports 
import App from './App.jsx'
import {AuthContextProvider} from './Contexts/AuthContext.jsx'


ReactDOM.createRoot(document.getElementById('root')).render(
 
    <BrowserRouter>
      <ChakraProvider>
        <AuthContextProvider>
          <App />
        </AuthContextProvider>
      </ChakraProvider>
    </BrowserRouter>

)

