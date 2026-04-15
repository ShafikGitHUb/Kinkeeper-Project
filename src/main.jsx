import { StrictMode } from 'react'
import './index.css'
import { RouterProvider } from 'react-router/dom'
import { createBrowserRouter } from 'react-router';
import { createRoot } from 'react-dom/client';
import Root from './LayOut/Root';
import Apps from './pages/timeline/Timeline';
import InstallApps from './pages/Stats/Stats';
import Homepage from './pages/homepage/Homepage';
import Timeline from './pages/timeline/Timeline';
import Stats from './pages/Stats/Stats';
import FriendsDetails from './pages/FriendsDetails/FriendsDetails';

const router = createBrowserRouter([
  {
    path: "/",
    element: <Root></Root>,
    children: [
      { 
        index:true, 
        element: <Homepage></Homepage>
       },
       {
        path:"/timeline",
        element:<Timeline></Timeline>,
       },
       {
        path:"/stats",
        element:<Stats></Stats>,
       },{
        path:"/friend/:id",
        element:<FriendsDetails></FriendsDetails>
       },
      ],
      errorElement:<h2>Page Not Found</h2>
  },
]);

createRoot(document.getElementById('root')).render(
  <StrictMode>
 <RouterProvider router={router}/>
  </StrictMode>,
)
