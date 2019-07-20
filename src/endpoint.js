import api from './axios-config';

export const fetchStudentList = function () {
    return api.http_get('http://api.myjson.com/bins/1dlper');
};
