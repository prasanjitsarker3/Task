import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import './index.css'
import { RouterProvider, createBrowserRouter } from 'react-router-dom'
import Home from './components/Home.jsx'
import TabProduct from './components/TabProduct.jsx'
import Search from './components/Search.jsx'
import CounterApp from './components/CounterApp.jsx'
import store from './components/store.js'
import { Provider } from 'react-redux'
import Pant from './components/Pant.jsx'


const router = createBrowserRouter([
  {
    path: "/",
    element: <App></App>,
    children: [
      {
        path: "/",
        element: <Home></Home>
      },
      {
        path: "tab",
        element: <TabProduct></TabProduct>
      }
      ,
      {
        path: "search",
        element: <Search></Search>
      },
      {
        path: "counter",
        element: <CounterApp></CounterApp>
      },
      {
        path:"pant",
        element:<Pant></Pant>
      }
    ]
  }
])
ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <Provider store={store}>
      <RouterProvider router={router}></RouterProvider>
    </Provider>
  </React.StrictMode>,
)
