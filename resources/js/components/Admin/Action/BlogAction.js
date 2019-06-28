import React, { Component } from 'react'
import axios from "axios";

let uri = '/admin/blog/1';

export class BlogAction extends Component {
    
    BLOG_FETCH_API() {

        return axios({
            method: "get" , url: uri
        });
       
    }

    BLOG_UPDATE_API(item) {
        
        axios({
            method: "put" , url: uri , data: item
        });
       
    }

    
}

export default new BlogAction()
