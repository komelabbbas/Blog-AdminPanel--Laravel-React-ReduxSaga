import React, { Component } from 'react'
import axios from "axios";

let uri = '/admin/category/';

export class CategoryAction extends Component {
    
    CATEGORY_FETCH_API() {

        return axios({
            method: "get" , url: uri + '0'
        });
    }

    CATEGORY_ADD_API(item) {
        
        axios({
            method: "post" , url: uri , data: item
        });
       
    }


    CATEGORY_DELETE_API(id) {

         axios({
            method: "delete" , url: uri + id ,
        });
    
    }
    
}

export default new CategoryAction()
