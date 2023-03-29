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
    element:
      <Provider store={store}>
        <App />
      </Provider>,
  },
  {
    path: "country-recipes",
    element:
      <Provider store={store}>
        <CountryRecipes />
      </Provider>,
  },
]);

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>

    <RouterProvider router={router} />

  </React.StrictMode>,
)
