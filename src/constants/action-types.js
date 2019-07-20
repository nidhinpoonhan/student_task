const asyncActionType = (type) => ({
  PENDING: `${type}_PENDING`,
  SUCCESS: `${type}_SUCCESS`,
  ERROR: `${type}_ERROR`,
});

export const LOGIN = asyncActionType('LOGIN');
export const FETCH_STUDENT_LIST = asyncActionType('FETCH_STUDENT_LIST ');
export const SEARCHED_STUDENT_LIST = 'SEARCHED_STUDENT_LIST';
