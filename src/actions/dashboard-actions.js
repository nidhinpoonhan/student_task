import { FETCH_STUDENT_LIST, SEARCHED_STUDENT_LIST } from "../constants/action-types";
import * as apis from '../endpoint';
import _ from 'lodash';

export function fetchStudentList() {
    return (dispatch) => {
        dispatch({ type: FETCH_STUDENT_LIST.PENDING });
        return apis.fetchStudentList()
            .then((response) => {
                dispatch({ type: FETCH_STUDENT_LIST.SUCCESS, payload: _.get(response, 'data', {}) });
                return response;
            })
            .catch((error) => {
                dispatch({ type: FETCH_STUDENT_LIST.ERROR });
                return error;
            });
    }
}

export function searchList(value) {
    return (dispatch) => {
        dispatch({ type: SEARCHED_STUDENT_LIST, payload: value });
    }
}