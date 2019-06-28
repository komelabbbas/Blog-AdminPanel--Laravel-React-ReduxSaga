
import React, { Component } from 'react'
import ActionTypes from '../Constant/Constant';



const INITIAL_STATE = {
 
}

export default (state = INITIAL_STATE , action) => {
    
      
     switch (action.type) {
      
       
        case ActionTypes.ADMIN_LOGIN:
                return ({
                    data : action.payload 
                })  
        case ActionTypes.ADMIN_LOGIN_REQUEST:
                return (
                    state
                )  
        default:
                 return state;
    }

}