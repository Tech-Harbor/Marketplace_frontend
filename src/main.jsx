import React from 'react';
import ReactDOM from 'react-dom/client';
import { BrowserRouter } from 'react-router-dom';
import { Provider } from 'react-redux';
import { GoogleOAuthProvider } from '@react-oauth/google';
import { ApolloClient, InMemoryCache, ApolloProvider } from '@apollo/client';
import store from './redux/store.js';
import App from './App.jsx';
import './index.css';

const client = new ApolloClient({
  uri: 'https://api.oranger.store/graphql',
  cache: new InMemoryCache(),
});

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <GoogleOAuthProvider clientId="584185876042-ofr859md8gjs2l2aqjjhvjlpphpgsbd6.apps.googleusercontent.com">
      <ApolloProvider client={client}>
        <Provider store={store}>
          <BrowserRouter>
            <App />
          </BrowserRouter>
        </Provider>
      </ApolloProvider>
    </GoogleOAuthProvider>
  </React.StrictMode>
);
