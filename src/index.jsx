import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './components/App'
import About from './components/About'
import FirstRecipeDescription from './components/recipesDescription/FirstRecipeDescription'
import SecondRecipeDescription from './components/recipesDescription/SecondRecipeDescription'
import ThirdRecipeDescription from './components/recipesDescription/ThirdRecipeDescription'
import FourthRecipeDescription from './components/recipesDescription/FourthRecipeDescription'
import FifthRecipeDescription from './components/recipesDescription/FifthRecipeDescription'
import SixthRecipeDescription from './components/recipesDescription/sixthRecipeDescription'

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
    path: "first-recipe-description",
    element: <FirstRecipeDescription />,
  },
  {
    path: "second-recipe-description",
    element: <SecondRecipeDescription />,
  },
  {
    path: "third-recipe-description",
    element: <ThirdRecipeDescription />,
  },
  {
    path: "fourth-recipe-description",
    element: <FourthRecipeDescription />,
  },
  {
    path: "fifth-recipe-description",
    element: <FifthRecipeDescription />,
  },
  {
    path: "sixth-recipe-description",
    element: <SixthRecipeDescription />,
  },
  {
    path: "about",
    element: <About />,
  },
]);

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>,
)
