import { takeLatest, call, put , takeEvery } from "redux-saga/effects";
import ActionTypes from "../Constant/Constant";
import  CategoryAction  from "../Action/CategoryAction";
import  BlogAction  from "../Action/BlogAction";
import LoginAction  from "../Action/LoginAction";





export function* RunSaga() {
     
     yield takeEvery(ActionTypes.CATEGORY_DATA_REQUEST, GetCategoryData);
   
     yield takeEvery(ActionTypes.CATEGORY_DATA_ADD, AddCategoryData);

     yield takeEvery(ActionTypes.CATEGORY_DATA_DELETE, DeleteCategoryData);


     yield takeEvery(ActionTypes.BLOG_DATA_REQUEST, GetBlogData);

     yield takeEvery(ActionTypes.BLOG_DATA_UPDATE, UpdateBlogData);


     yield takeEvery(ActionTypes.ADMIN_LOGIN_REQUEST, LoginVerify);
  
}

    

  function* GetCategoryData() {
    
     
     const response = yield call(CategoryAction.CATEGORY_FETCH_API);
     const payload = response.data;
     yield put({ type: ActionTypes.CATEGORY_DATA_FETCH, payload });
    
  }

  function* AddCategoryData(action) {
   
     yield call(CategoryAction.CATEGORY_ADD_API , action.data);
     yield call(GetCategoryData);
  
   }

   function* DeleteCategoryData(action) {
   
    yield call(CategoryAction.CATEGORY_DELETE_API , action.data);
    yield call(GetCategoryData);
 
  }


  function* GetBlogData({onSuccess}) {
    
    
    const response = yield call(BlogAction.BLOG_FETCH_API);
    const payload = response.data;
    onSuccess(response.data)
    
    yield put({ type: ActionTypes.BLOG_DATA_FETCH, payload });
  }


 function* UpdateBlogData(action) {
   
  yield call(BlogAction.BLOG_UPDATE_API , action.data);

}


function* LoginVerify(action) {
  
  const response =  yield call(LoginAction.ADMIN_LOGIN_API , action.datas.data);
  const payload = response.data;
  action.datas.onLogin(payload)
}



