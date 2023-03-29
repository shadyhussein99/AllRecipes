import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './components/App'
import FirstRecipeDescription from './components/FirstRecipeDescription'

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
]);

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>,
)
