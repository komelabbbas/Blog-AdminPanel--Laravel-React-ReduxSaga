import React, { Component } from 'react'

import auth from '../Auth';
import {connect} from 'react-redux';
import ActionTypes from '../../Constant/Constant';

import {NotificationContainer, NotificationManager} from 'react-notifications';
import 'react-notifications/lib/notifications.css';

import Loading from 'react-loading-bar'
import 'react-loading-bar/dist/index.css'

import AdminHeader from '../AdminHeader';
import Navigation from '../Navigation';




 class Category extends Component {

    constructor(props) {
        super(props)
    
        this._AddCategory = this._AddCategory.bind(this)
        this._DeleteCategory = this._DeleteCategory.bind(this)
        
        
      
             this.state = {
              
                category_text : '' ,
                LoadingShow : false ,
             }
    } // end of constructor

    


    componentDidMount(){


        if (auth.isAuthenticated() != false) {
          this.props.LoadCategory()
         
        }
     
    }
  
  

      

    _AddCategory () {
            
        this.setState({ LoadingShow: true })

        if(this.state.category_text === '')
        {
             NotificationManager.error('Please Fill Category' , '' , 1000) ;
        }
        else
        {

          let data = { 'text' : this.state.category_text }
         
          this.props.AddCategory(data)

          this.setState({
                category_text : ''
              })
         
          NotificationManager.success('Category Add Successfully' , '' , 2000);

        } // else
       
        setTimeout(() => {
          this.setState({ LoadingShow: false })
        }, 300);

    } // end of _AddCategory

    _DeleteCategory (id) {

        this.setState({ LoadingShow: true })

       
       this.props.DeleteCategory(id)

       NotificationManager.warning('Category Remove Successfully' , '' , 1000);

       setTimeout(() => {
        this.setState({ LoadingShow: false })
      }, 300);

       
    } // end of _DeleteCategory

    render() {

      if (auth.isAuthenticated() === false) {
        return auth.RedirectTo()
      }
      
      
        return (
        <div>
          
          <AdminHeader />
          <Navigation />   
        
        <div className="main-content">
           
                  {/* Loading Bar Show ************  */}
                  <Loading
                      show={this.state.LoadingShow}
                      color="green"
                    />
                   
          <div className="page-header">

              <h3 className="page-title">Category    </h3>

              <ol className="breadcrumb">
                  <li className="breadcrumb-item"><a href="dashboard/basic.html">Home</a></li>
                  <li className="breadcrumb-item"><a href="users.html">Category</a></li>
              </ol>

              <div className="page-actions">
                <button type="button" className="btn btn-primary" data-toggle="modal" data-target="#myModal"><i className="icon-fa icon-fa-plus" style={{ cursor : 'pointer' }}/> New Category</button>
              </div>

          </div>

          <div className="row">
              <div className="col-sm-12">
                <div className="card">
                    <div className="card-header">
                      
                       <h6>Category </h6>
                        <br/>
                        <div className="card-actions">
                        </div>
                    </div>

                    <div className="card-block">

                            

                            
                    <table className="table">

                        <thead>
                          <tr>
                            <th scope="col"><strong>Category Name</strong></th>
                            <th scope="col"><strong>Action</strong></th>
                          </tr>
                        </thead>

                         <tbody>
                           
                                {
                                typeof this.props.CategoryReducer.data === "undefined" || this.props.CategoryReducer.data == '' ? <tr><td colSpan="2">No Data Available</td></tr>
                                :             
                                this.props.CategoryReducer.data.map((item , index) => (
                                    
                                    <tr key={index} role="row" className="odd">

                                      <td tabIndex="0" className="sorting_1">{item.name}</td>

                                      <td>
                                      
                                        <span className="btn btn-default btn-sm"
                                          
                                            onClick={ 
                                                () =>  
                                                {  
                                                    if(window.confirm('Are you sure you have to Remove this Category ?'))
                                                    {
                                                        this._DeleteCategory(item.id)
                                                    }
                                                }
                                            }
                                            style={{ cursor : 'pointer' }}
                                        >
                                            <i className="icon-fa icon-fa-trash"></i> Delete
                                        </span>
                                            
                                    </td>

                                    </tr>
                            
                                
                              
                                        ))
                                }
                      </tbody>
                    </table>
                      
                    </div>
                </div>
              </div>
          </div>
          <NotificationContainer/> 


          
          <div className="modal fade" id="myModal" role="dialog">
            <div className="modal-dialog modal-lg">
              <div className="modal-content">
                <div className="modal-header">
                  <h4 className="modal-title">Create Category :</h4>
                  
                </div>
                <div className="modal-body">
                    <div className="row">
                    <div className="col-md-2">
                      Category :
                    </div>
                    <div className="col-md-9">
                      <input 
                          type="text" 
                          className="form-control" 
                          name="category_text" 
                          value={this.state.category_text} 
                          onChange={ e => ( this.setState({ category_text : e.target.value  }) )}
                      />  
                    </div>
                    </div>
                    
                      
                </div>
                <div className="modal-footer">
                <button type="button" className="btn btn-success" onClick={this._AddCategory}>Add</button>  
                  <button type="button" className="btn btn-default" data-dismiss="modal">Close</button>
                </div>
              </div>
            </div>
          </div>



    </div>
  </div>
        )
    }
}



function mapStateToProp(state){
  return({
    CategoryReducer: state.CategoryReducer
  })
}

function mapDispatchToProp(dispatch){
  return({

       LoadCategory    :  ()     => {   dispatch({ type: ActionTypes.CATEGORY_DATA_REQUEST })   } ,

       AddCategory     :  (item) => {   dispatch({ type: ActionTypes.CATEGORY_DATA_ADD , data : item})  }  ,

       DeleteCategory  :  (id)   => {   dispatch({ type: ActionTypes.CATEGORY_DATA_DELETE , data : id})  }  ,
      
  })
}


export default connect(mapStateToProp,mapDispatchToProp)(Category);


