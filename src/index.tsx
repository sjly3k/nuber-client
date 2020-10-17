import React from 'react';
import ReactDOM from 'react-dom';
import App from './components/App';
import apolloClient from "./apollo";
import { ApolloProvider } from "react-apollo"

ReactDOM.render(
    <ApolloProvider client={apolloClient}>
        <App />
    </ApolloProvider>,
    document.getElementById('root') as HTMLElement
);