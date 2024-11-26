import React from 'react';
import { Outlet } from 'react-router-dom';


const Layout = ({ children }) => {
  return (
    <div>
      <main>
        <Outlet />
      </main>
      
    </div>
  );
};

export default Layout;

