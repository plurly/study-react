import React from 'react';
import ReactDOM from 'react-dom';

import { createStore } from 'redux';
import { Provider } from 'react-redux';

import App from 'components/app/app';

import reducers from 'reducers';
import AppRouter from 'router';

ReactDOM.render(
    <Provider store={createStore(reducers)}>
        <App>
            <AppRouter />
        </App>
    </Provider>,
    document.getElementById('content')
);
