import React from 'react';
import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import Lobby from './Pages/Start/Lobby';
import Chat from './Pages/Chat/chat';

const router = createBrowserRouter([
  {
    path: '/',
    element: <Lobby />,
  },
  {
    path: '/chat',
    element: <Chat />,
  },
]);
export default function App() {
  return <RouterProvider router={router} />;
}
