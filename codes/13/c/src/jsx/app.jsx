import React from 'react';
import ReactDOM from 'react-dom';

import '../style/app.css';

import jquery from 'jquery';
import Backbone from 'backbone';

import AppRouter from './AppRouter.jsx';

import About from './components/About.jsx';
import Contact from './components/Contact.jsx';
import Home from './components/Home.jsx';
import Post from './components/Post.jsx';
import Posts from './components/Posts.jsx';

let name = 'dongheon.shin';
let content = document.getElementById('content');

const Router = Backbone.Router.extend({

    routes: {

        '': 'home',
        'about': 'about',
        'contact': 'contact',
        'posts/:id': 'post',
        'posts': 'posts',
    },

    about: function() {
        ReactDOM.render(<AppRouter><About /></AppRouter>, content);
    },

    contact: function() {
        ReactDOM.render(<AppRouter><Contact name={name}/></AppRouter>, content);
    },

    home: function() {
        ReactDOM.render(<AppRouter><Home /></AppRouter>, content);
    },

    posts: function() {
        ReactDOM.render(<AppRouter><Posts /></AppRouter>, content);
    },

    post: function(id) {
        ReactDOM.render(<AppRouter><Post id={id} /></AppRouter>, content);
    },

});

// Router
let router = new Router();
Backbone.history.start();
