import { StrictMode } from 'react';
import { createRoot } from 'react-dom/client';
import { Amplify } from 'aws-amplify';
import cognitoAuthConfig from './aws-exports'; 
import './index.css';
import App from './App.jsx';


Amplify.configure(cognitoAuthConfig);

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <App />
  </StrictMode>
);
