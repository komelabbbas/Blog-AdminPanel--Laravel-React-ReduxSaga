
import React, { Component } from 'react'
import ActionTypes from '../Constant/Constant';
import  BlogAction  from '../Action/BlogAction';

const INITIAL_STATE = {
   
}


export default (state = INITIAL_STATE , action) => {
    
      
     switch (action.type) {
      
       
        case ActionTypes.BLOG_DATA_FETCH:
                return ({
                    data : action.payload 
                })  
        case ActionTypes.BLOG_DATA_REQUEST:
                return (
                    state
                )  
        default:
                 return state;
    }

}