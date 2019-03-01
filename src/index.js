import React from 'react';
import ReactDOM from 'react-dom';
import {BrowserRouter as Router, Route} from 'react-router-dom';
import {createStore} from 'redux';
import {Provider} from 'react-redux';
import reducer from './reducers'
import Homepage from './containters/Homepage/Homepage';
import Company from './containters/Company/Company';
import Portfolio from './containters/Portfolio/Portfolio';
import ContactUs from './containters/ContactUs/ContactUs';
import * as serviceWorker from './serviceWorker';
import 'bootstrap/dist/css/bootstrap.min.css';
import '@fortawesome/fontawesome-free/css/all.css';
import './global.css';

const store = createStore(
    reducer
);
ReactDOM.render(<Provider store={store}>
    <Router>
        <div className="page-templates transparent-header-w t-dark-w ">
            <Route path="/" exact component={Homepage}/>
            <Route path="/company/" component={Company}/>
            <Route path="/portfolio/" component={Portfolio}/>
            <Route path="/contact-us/" component={ContactUs}/>
        </div>
    </Router>
</Provider>, document.getElementById('root'));

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: http://bit.ly/CRA-PWA
serviceWorker.unregister();
