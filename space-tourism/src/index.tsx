import React from 'react';
import ReactDOM from 'react-dom/client';
import { ChakraBaseProvider,} from '@chakra-ui/react'
import App from './App';

const root = ReactDOM.createRoot(
  document.getElementById('root') as HTMLElement
);
root.render(
  <React.StrictMode>
    <ChakraBaseProvider>
    <App />
    </ChakraBaseProvider>
  </React.StrictMode>
);
