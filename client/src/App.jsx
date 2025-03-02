import { useEffect, useState } from 'react';
import axios from 'axios';
import { RouterProvider } from 'react-router-dom';
import { router } from './router';
import { Authenticator } from '@aws-amplify/ui-react';  // Import Authenticator
import '@aws-amplify/ui-react/styles.css';  // Import styles for the authenticator

function App() {
  return (
    <Authenticator>
      {({ signOut, user }) => (
        <>
          <div>
            <h1>Welcome, {user?.username}</h1> {/* Show the username */}
            <button onClick={signOut}>Sign Out</button> {/* Provide sign-out option */}
          </div>
          <RouterProvider router={router} />
        </>
      )}
    </Authenticator>
  );
}

export default App;
