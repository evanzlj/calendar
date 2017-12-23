import React from 'react';
import ReactDOM from 'react-dom';
import App from './components/App';
import Observer from 'eventBus'

// reg in the global
const ob = new Observer();
window.ob = ob;

ReactDOM.render(
  <App />,
  document.getElementById('app')
)
