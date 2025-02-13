import React from 'react';
import ReactDOM from 'react-dom/client';  // Use react-dom/client for createRoot

const App = () => {
    return <h1>Hello, React 19!</h1>;
};

const root = document.getElementById('root');
if (root) {
    ReactDOM.createRoot(root).render(<App />);
}
