import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import { Provider } from 'react-redux'
import Store from './Store'
import App from './App';
import ContactList from './components/ContactList';
import { Route, BrowserRouter } from 'react-router-dom'
import AddContact from './components/AddContact';
import EditContact from './components/EditContact';

ReactDOM.render(
    <BrowserRouter>
        <Provider store={Store}>
            <Route exact path="/" component={App}/>
            <Route exact path="/contacts" component={ContactList}/>
            <Route exact path="/new-contact" component={AddContact}/>
            <Route exact path="/contact/:id" component={EditContact}/>
        </Provider>
    </BrowserRouter>, document.getElementById('root'));