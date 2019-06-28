import React, { Component } from 'react'
import axios from "axios";

let uri = '/adminlogin';

export class LoginAction extends Component {
    
    ADMIN_LOGIN_API(data) {
        
       
        return axios({
            method: "post" , url: uri , data: data
        });
       
    }

}

export default new LoginAction()
