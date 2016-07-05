import AuthorApi from '../api/mockAuthorApi';
import Types from "../constants/ActionTypes";
import {beginAjaxCall} from './ajaxStatusActions';

export function loadAuthorsSuccess(authors) {
  return {
    type: Types.LOAD_AUTHORS_SUCCESS,
    authors
  };
}

export function loadAuthors() {
  return dispatch => {
    return AuthorApi.getAllAuthors().then(authors => {
      dispatch(loadAuthorsSuccess(authors));
    }).catch(error => {
      throw(error);
    });
  };
}
