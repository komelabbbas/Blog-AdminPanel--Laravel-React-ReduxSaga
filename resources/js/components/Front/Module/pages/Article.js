import React, { Component } from 'react'

import Moment from 'react-moment';
import 'moment-timezone';
import {connect} from 'react-redux';
import ActionTypes from '../../Constant/Constant';



export class Article extends Component {

        constructor(props) {
            super(props)
        
            this.state = {
                blog : [] ,
                CategoryName : ''
            }
        }
        

    componentDidMount(){

        this.props.LoadArticle({
            ArticleData : (result) => {
                if(result != '')
                {
                    this.setState({
                        blog : result ,
                        CategoryName : result.category.name
                        },
                    )
                }
             }
        })

    }

   

    render() {
        
        let path = '/images/'+this.state.blog.photo ;

        const cat = {
            float :  'right', 
            paddingRight : '20px' ,
            fontStyle: 'italic' ,
        }

        return (
            <div id="BlogStyle">
               
                    <p className="dateformat"> 
                        {
                            typeof this.state.blog.updated_at != 'undefined' &&
                            <Moment format="MMMM DD, YYYY">{ this.state.blog.updated_at }</Moment>
                        }
                        
                        <span style={cat}>{ this.state.CategoryName }</span>
                    </p>
                
                    <h3>{this.state.blog.title}</h3>

                    <div className="content">
                        <p>{this.state.blog.description}</p>
                    </div>

                    { typeof this.state.blog.photo != 'undefined' &&  
                    
                        <div className="imageeffect">
                            <img src={path} alt="Image"/>
                        </div> 
                    }
               
              
            </div>
        )
    }
}



function mapStateToProp(state){
    return({
      ArticleReducer: state.ArticleReducer
    })
  }
  
  function mapDispatchToProp(dispatch){
    return({
  
         LoadArticle    :  (data)     => {   dispatch({ type: ActionTypes.ARTICLE_DATA_REQUEST , data })   } ,
         
    })
  }
  
  
export default connect(mapStateToProp,mapDispatchToProp)(Article);

