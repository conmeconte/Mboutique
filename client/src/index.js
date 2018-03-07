import React from 'react';
import ReactDOM from 'react-dom';
import App from './components/app';
import {BrowserRouter as Router} from 'react-router-dom';
import 'materialize-css/dist/css/materialize.min.css';
import { createStore, applyMiddleware} from 'redux'; 
import  promise  from 'redux-promise'; 
import { Provider } from 'react-redux'; 
import reducers from './reducers'; 


const createStoreWithMiddleware= applyMiddleware(promise)(createStore);

ReactDOM.render(
    <Provider store={createStoreWithMiddleware(reducers)}>
        <Router>
            <App />
        </Router>
    </Provider>,
    document.getElementById('root')
);
