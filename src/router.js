import React from 'react';
import {
    BrowserRouter as Router,
    Route,
    Link
} from 'react-router-dom'
import Loadable from 'react-loadable'

const loading = () => <div>加载中...</div>
const App = () => (
    <Router>
        <div>
            <ul>
                <li>
                    <Link to="/">Home</Link>
                </li>
                <li>
                    <Link to="/about">About</Link>
                </li>
                <li>
                    <Link to="/topics">Topics</Link>
                </li>
            </ul>
            <hr />
            <Route exact path="/" component={Loadable({
                loader: ()=> import('./pages/Index/index'),
                loading: loading
            })} />
            <Route path="/about" component={Loadable({
                loader: () => import('./pages/About/index'),
                loading: loading
            })} />
            <Route path="/topics" component={Loadable({
                loader: () => import('./pages/Topics/index'),
                loading: loading
            })} />
        </div>
    </Router>
);
export default App;

