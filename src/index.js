import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import 'tachyons';
import App from './containers/App';
import registerServiceWorker from './registerServiceWorker';

// redux magic
import { Provider } from 'react-redux';
import { createStore,compose } from 'redux';

import { searchRobots } from './reducer'

const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;

const store = createStore(searchRobots,composeEnhancers());




const app = (
    <Provider store={store}>
        <App/>
    </Provider>
)


ReactDOM.render(app, document.getElementById('root'));
registerServiceWorker();
