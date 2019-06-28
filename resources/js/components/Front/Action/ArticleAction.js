import React, { Component } from 'react'
import axios from "axios";

let uri = '/admin/blog/1';

export class ArticleAction extends Component {
    
    BLOG_FETCH_API() {

        return axios({
            method: "get" , url: uri
        });
       
    }

    
}

export default new ArticleAction()
