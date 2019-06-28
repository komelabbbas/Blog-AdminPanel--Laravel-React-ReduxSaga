import { takeLatest, call, put , takeEvery } from "redux-saga/effects";
import ActionTypes from "../Constant/Constant";
import ArticleAction from "../Action/ArticleAction";






export function* RunSaga() {

     yield takeEvery(ActionTypes.ARTICLE_DATA_REQUEST, GetArticleData);

}

    

  function* GetArticleData(action) {
    
    const response = yield call(ArticleAction.BLOG_FETCH_API);
    action.data.ArticleData(response.data)   

  }
