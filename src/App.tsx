import React from 'react';
import { RouterProvider } from 'react-router';
import appRouter from './routes';

function App() {
  return <RouterProvider router={appRouter} />;
}

export default App;
