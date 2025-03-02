import React from 'react';
import { Link } from 'react-router-dom';
import { Authenticator, useAuthenticator } from '@aws-amplify/ui-react';
import '@aws-amplify/ui-react/styles.css'; // Import Amplify UI styles

const LoginForm = () => {
  const { signOut, user } = useAuthenticator((context) => [context.user]);

  // If user is signed in, show a welcome message and a sign-out button
  if (user) {
    return (
      <div className='login-form'>
        <h1>Welcome, {user.username}!</h1>
        <button onClick={signOut}>Sign Out</button>
      </div>
    );
  }

  // If user is not signed in, show the Authenticator for login
  return (
    <div className='login-form'>
      <Authenticator>
        {({ signOut, user }) => (
          <div>
            <h1>Welcome {user?.username}</h1>
            <p>Please sign in to access your account.</p>
          </div>
        )}
      </Authenticator>
      <br />
      <p>
        Don't have an account? <Link to="/register"><br />Register here</Link>
      </p>
    </div>
  );
};

export default LoginForm;
