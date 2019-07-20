import { handleActions } from 'redux-actions';
import { FETCH_STUDENT_LIST, SEARCHED_STUDENT_LIST } from '../constants/action-types';

var studentReducer = handleActions({
    [FETCH_STUDENT_LIST.PENDING]: (state, action) => {
        return {
            ...state,
            awaitingResponse: true
        };
    },
    [FETCH_STUDENT_LIST.SUCCESS]: (state, action) => {
        return {
            ...state,
            awaitingResponse: false,
            studentList: action.payload,
            searchedList: action.payload,
        };
    },
    [FETCH_STUDENT_LIST.ERROR]: (state, action) => {
        return {
            ...state,
            awaitingResponse: false,
        };
    },
    [SEARCHED_STUDENT_LIST]: (state, action) => {
        let searchKey = action.payload;
        let searchedList = {};
        if (state.studentList && searchKey) {
            searchedList = Object.keys(state.studentList).reduce((searchList, item) => {
                let name = state.studentList[item].name.toLocaleLowerCase();
                if (name.startsWith(searchKey.toLocaleLowerCase())) {
                    searchList[item] = state.studentList[item]
                }
                return searchList;
            }, {});
        } else {
            searchedList = state.studentList;
        }
        return {
            ...state,
            searchedList
        }
    }
}, {
        awaitingResponse: false,
        studentList: {},
        searchedList: {}
    });

export {
    studentReducer
}
