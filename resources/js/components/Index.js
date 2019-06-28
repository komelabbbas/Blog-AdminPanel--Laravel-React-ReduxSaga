import React, { Component } from 'react';
import ReactDOM from 'react-dom';

import FrontApp from './Front/FrontApp';
import AdminApp from './Admin/AdminApp';


import {Provider} from 'react-redux';
import FrontStore from './Front/Store';
import AdminStore from './Admin/Store';





export default class Index extends Component {

    
    render() {

        
        return (
            <div>
               

           
            </div>
        );
    }
}

if (document.getElementById('FRONT-REACTJS')) {
    ReactDOM.render(
        <Provider store={FrontStore}>
            <FrontApp />
        </Provider> 
        ,
         document.getElementById('FRONT-REACTJS')
    );
}

if (document.getElementById('ADMIN-REACTJS')) {
    ReactDOM.render(
        <Provider store={AdminStore}>
            <AdminApp />
        </Provider> 
         , 
        document.getElementById('ADMIN-REACTJS')
    );
}

