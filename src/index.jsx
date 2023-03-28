import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './components/App'
import CountryRecipes from './components/CountryRecipes';
import store from './redux/store';
import { Provider } from 'react-redux';

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
    element:
      <CountryRecipes />,
  },
]);

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <Provider store={store}>
      <RouterProvider router={router} />
    </Provider>
  </React.StrictMode>,
)
