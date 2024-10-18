import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import './index.css'

import { Provider } from 'react-redux'
import { createBrowserRouter, RouterProvider } from 'react-router-dom'
import store from './store/store.js'
import Recipes from './page/Recipes.jsx'
import Bookmarks from './page/Bookmarks.jsx'
import DetailsRecipes from './page/DetailsRecipes.js'

const router = createBrowserRouter([
  {
    path: "/",
    element: <App></App>
  },
  {
    path: "/recipes",
    element: <Recipes></Recipes>
  },
  {
    path: "/bookmarks",
    element: <Bookmarks></Bookmarks>
  },
  {
    path: "/details/:detailsID",
    element: <DetailsRecipes></DetailsRecipes>
  },
  
])

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <Provider store={store}>
      <RouterProvider router={router}></RouterProvider>
    </Provider>
  </React.StrictMode>,
)
