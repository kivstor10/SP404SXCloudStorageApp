import { useEffect, useState } from 'react';
import axios from 'axios';
import { RouterProvider } from 'react-router-dom';
import { router } from './router';

function App() {

  return (
    <>
    <RouterProvider router={router}></RouterProvider>
    </>
  );
}

export default App;