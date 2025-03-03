import { StrictMode } from 'react';
import { createRoot } from 'react-dom/client';
import './index.css';
import App from './App.jsx';
import { secret } from '@aws-amplify/backend';
import { Amplify } from 'aws-amplify';

Amplify.configure({
  Auth: {
    Cognito: {
      userPoolId: secret('USER_POOL_ID'),
      userPoolClientId:  secret('USER_POOL_CLIENT_ID'),
      identityPoolId:  secret('IDENTITY_POOL_ID'),
      loginWith: {
        email: true,
      },
      signUpVerificationMethod: "code",
      userAttributes: {
        email: {
          required: true,
        },
      },
      allowGuestAccess: false,
    },
  },
})

createRoot(document.getElementById('root')).render(
  <StrictMode>
      <App />
  </StrictMode>
);
