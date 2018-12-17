import { createStore, applyMiddleware } from 'redux';
import reducers from './reducers';
import 'bootstrap/dist/css/bootstrap.css';
import 'bootstrap/dist/css/bootstrap-theme.css';
import './index.css';
import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import { ConnectedRouter } from 'react-router-redux';
import { createBrowserHistory } from 'history';
import registerServiceWorker from './registerServiceWorker';
import ProductsList from "./components/productsList";
import thunk from 'redux-thunk';

const baseUrl = document.getElementsByTagName('base')[0].getAttribute('href');
const history = createBrowserHistory({ basename: baseUrl });
const middleware = applyMiddleware(thunk);
const store = createStore(reducers, middleware);

const rootElement = document.getElementById('app');

ReactDOM.render(
  <Provider store={store}>
    <ConnectedRouter history={history}>
        <ProductsList />
    </ConnectedRouter>
  </Provider>,
  rootElement);

registerServiceWorker();
