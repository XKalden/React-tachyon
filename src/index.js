import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import 'tachyons';
import App from './containers/App';
import registerServiceWorker from './registerServiceWorker';

// redux magic
import { Provider } from 'react-redux';
import { createStore, compose, applyMiddleware, combineReducers } from 'redux';

import { searchRobots, requestRobots } from './reducer'

// redux logger
import { createLogger } from 'redux-logger';

// redux thunk
import thunk from 'redux-thunk';


const logger = createLogger();
const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;

const rootReducer = combineReducers({
    searchRobots, requestRobots
});

const store = createStore(rootReducer,composeEnhancers(applyMiddleware(thunk)));


const app = (
    <Provider store={store}>
        <App/>
    </Provider>
)


ReactDOM.render(app, document.getElementById('root'));
registerServiceWorker();
