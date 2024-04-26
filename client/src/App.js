

import Main from './pages/Main';

import {BrowserRouter, Route, Routes, RouterProvider, createBrowserRouter, createRoutesFromElements, Navigate} from 'react-router-dom';
// this is for all the constants routes
import { routes } from './constants/routes';
import ErrorComponents from './common/ErrorComponents';
// here Routerprovider takes a prop call router inside it
// createRoutesElement is same as routes

// here in the main routes we have to route the child routes 

const router = createBrowserRouter( 
  createRoutesFromElements(
    <Route>
    <Route path={routes.main.path} element={<Navigate to={`${routes.emails.path}/inbox`}/>} />

        <Route path={routes.main.path} element={<routes.main.element />} >
          <Route path={`${routes.emails.path}/:type`} element={<routes.emails.element/>} errorElement={ErrorComponents}/>
          <Route path={routes.view.path} element={<routes.view.element/>} errorElement={ErrorComponents}/>
        </Route>

    <Route path={routes.invalid.path} element={<Navigate to={`${routes.emails.path}/inbox`}/>}/>

    
    </Route>
  )
)



function App() {
  return (
    <RouterProvider router={router}/>
  );
}

export default App;
