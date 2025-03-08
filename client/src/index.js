import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
import LandingPage from './components/LandingPage';
import Signin from './components/Signin';
import Signup from './components/Signup';
import { Route } from 'react-router-dom';
import Dashboard from './components/Dashboard';

import Layout from './components/Layout';
import { createRoot } from 'react-dom/client';
import { createBrowserRouter,createRoutesFromElements, RouterProvider} from 'react-router-dom';
import PostAuction from './components/PostAuction';

const router = createBrowserRouter(
  createRoutesFromElements(
    <Route path='/' element = {<Layout />}>
      <Route path='' element = {<LandingPage />}/>
      <Route path='signin' element = {<Signin />}/>
      <Route path='signup' element = {<Signup />} />
      <Route path='dashboard' element = {<Dashboard />}/>
      <Route path="post-auction" element = {<PostAuction />} />
    </Route>
  )
)

createRoot(document.getElementById('root')).render(
    <RouterProvider router={router} />
)
