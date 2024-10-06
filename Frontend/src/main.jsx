import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import App from './App.jsx'
import SignUp from './pages/SignUp.jsx'
import { ChakraProvider } from '@chakra-ui/react'
import './App.css';
import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import {Provider} from 'react-redux';
import appStore ,{persistor} from './utils/appStore.js'
import Login from './pages/Login.jsx'
import VideoPlayer from './pages/VideoPlayer.jsx'
import Channel from './pages/Channel.jsx';
import { PersistGate } from 'redux-persist/integration/react'



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
  },
  {
    path: '/video/:id',
    element:<VideoPlayer/>
  },
  {
    path: '/channel/:id',
    element:<Channel></Channel>
  }
])



createRoot(document.getElementById('root')).render(
  
  <StrictMode>
    <ChakraProvider>
      <Provider store={appStore}>
        <PersistGate loading={null} persistor={persistor}>
          <RouterProvider router={appRouter} />
        </PersistGate>
      </Provider>
    </ChakraProvider>
  </StrictMode>
)
