import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import registerServiceWorker from './registerServiceWorker';
import { Provider } from 'react-redux';
import { createStore } from 'redux';
import reducer from './reducers';
import Results from './components/results';
let store = createStore(reducer);

function render() {
ReactDOM.render(
   <div>
    <App store={store} />
    <Results store={store}/>
</div>
  , document.getElementById('root'));
registerServiceWorker();
}


store.subscribe(render)
render()
