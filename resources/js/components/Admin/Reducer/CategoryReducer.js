
import React, { Component } from 'react'
import ActionTypes from '../Constant/Constant';



const INITIAL_STATE = {
 
}

export default (state = INITIAL_STATE , action) => {
    
      
     switch (action.type) {
      
       
        case ActionTypes.CATEGORY_DATA_FETCH:
                return ({
                    data : action.payload 
                })  
        case ActionTypes.CATEGORY_DATA_REQUEST:
                return (
                    state
                )  
        default:
                 return state;
    }

}