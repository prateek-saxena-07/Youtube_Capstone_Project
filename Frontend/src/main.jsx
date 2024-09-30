import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import App from './App.jsx'
import SignUp from './pages/SignUp.jsx'
import { ChakraProvider } from '@chakra-ui/react'
import './App.css';
import { createBrowserRouter,RouterProvider } from 'react-router-dom';
import Login from './pages/Login.jsx'



const appRouter = createBrowserRouter([
  {
    path: '/',
    element: <App />
    
  },
  {
    path: '/signup',
   element:<SignUp/>
  },
  {
    path: '/login',
    element:<Login></Login>
  }
])



createRoot(document.getElementById('root')).render(
  
  <ChakraProvider>
      <RouterProvider router={appRouter}>
    <StrictMode>
      <App />
    </StrictMode>
      </RouterProvider>
  </ChakraProvider>
)
