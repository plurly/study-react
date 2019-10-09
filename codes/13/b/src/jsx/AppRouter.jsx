import { hot } from 'react-hot-loader/root';

import React from 'react';
import { Switch, Link, Route, BrowserRouter, HashRouter, withRouter } from 'react-router-dom';

import About from './components/About.jsx';
import Contact from './components/Contact.jsx';
import Home from './components/Home.jsx';
import Post from './components/Post.jsx';
import Posts from './components/Posts.jsx';

let name = 'dongheon.shin';
let mode = 'hash'; // 'broswer' or 'hash'

const router = (Component) => {

    class CommonRouter extends React.Component {

        render() {

            return (
                <Component {...this.state} {...this.props}>

                    <ul>
                        <li><Link to="/">Home</Link></li>
                        <li><Link to="/about">About</Link></li>
                        <li><Link to="/posts">Posts</Link></li>
                        <li><Link to="/contact">Contact</Link></li>
                    </ul>

                    <Switch>
                        <Route exact={true} path="/" component={Home} />
                        <Route path="/about" component={About} />
                        <Route exact={true} path="/posts" component={Posts} />
                        <Route path="/posts/:id" component={withRouter(Post)} />
                        <Route path="/contact">
                            <Contact name={name}/>
                        </Route>
                    </Switch>

                </Component>
            );
        }
    };

    return CommonRouter;
};

const AppBrowserRouter = router(BrowserRouter);
const AppHashRouter = router(HashRouter);

export default hot(mode === 'browser' ? AppBrowserRouter : AppHashRouter);
