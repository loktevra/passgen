import * as React from 'react';
import * as ReactDOM from 'react-dom';
import App from './components/App';

const domContainer = document.createElement('div');

document.body.appendChild(domContainer); 

ReactDOM.render(<App/>, domContainer);

if ('serviceWorker' in navigator) {
  window.addEventListener('load', () => {
    navigator.serviceWorker.register('service-worker.js').then(registration => {
      console.log('SW registered: ', registration);
    }).catch(registrationError => {
      console.log('SW registration failed: ', registrationError);
    });
  });
}
