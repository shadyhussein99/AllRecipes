import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './components/App'
import CountryRecipes from './components/CountryRecipes';

import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";

const router = createBrowserRouter([
  {
    path: "/",
    element: <App />,
  },
  {
    path: "country-recipes",
    element: <CountryRecipes />,
  },
]);

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>,
)
