import React from 'react';
import ReactDOM from 'react-dom';

import '../style/app.css';
import Router from './components/Router.jsx';

const mapping = {

    '#profile': <div>Profile (<a href="#">home</a>)</div>,
    '#accounts': <div>Accounts (<a href="#">home</a>)</div>,
    '*': <div>
            <h1>Dashboard</h1>
            <a href="#profile">Profile</a><br/>
            <a href="#accounts">Accounts</a>
        </div>
};

ReactDOM.render(<Router mapping={mapping} />, document.getElementById('content'));
