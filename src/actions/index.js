export const FETCH_REQUEST = 'FETCH_REQUEST';

/**
 * PROJECT
 */

export const FETCH_PROJECTS_SUCCESS = 'FETCH_PROJECTS_SUCCESS';
export const FETCH_PROJECTS_FAILURE = 'FETCH_PROJECTS_FAILURE';

export const ADD_PROJECT_REQUEST = 'ADD_PROJECT_REQUEST';
export const ADD_PROJECT_SUCCESS = 'ADD_PROJECT_SUCCESS';
export const ADD_PROJECT_FAILURE = 'ADD_PROJECT_FAILURE';

export const REMOVE_PROJECT_REQUEST = 'REMOVE_PROJECT_REQUEST';
export const REMOVE_PROJECT_SUCCESS = 'REMOVE_PROJECT_SUCCESS';
export const REMOVE_PROJECT_FAILURE = 'REMOVE_PROJECT_FAILURE';

/**
 * TODO
 */

export const FETCH_TODO_SUCCESS = 'FETCH_TODO_SUCCESS';
export const FETCH_TODO_FAILURE = 'FETCH_TODO_FAILURE';

export const ADD_TODO_REQUEST = 'ADD_TODO_REQUEST';
export const ADD_TODO_SUCCESS = 'ADD_TODO_SUCCESS';
export const ADD_TODO_FAILURE = 'ADD_TODO_FAILURE';

export const REMOVE_TODO_REQUEST = 'REMOVE_TODO_REQUEST';
export const REMOVE_TODO_SUCCESS = 'REMOVE_TODO_SUCCESS';
export const REMOVE_TODO_FAILURE = 'REMOVE_TODO_FAILURE';

export const CHANGE_TODO_ITEM_STATUS_REQUEST = 'CHANGE_TODO_ITEM_STATUS_REQUEST';
export const CHANGE_TODO_ITEM_STATUS_SUCCESS = 'CHANGE_TODO_ITEM_STATUS_SUCCESS';
export const CHANGE_TODO_ITEM_STATUS_FAILURE = 'CHANGE_TODO_ITEM_STATUS_FAILURE';

/**
 * PROJECT
 */

export const fetchProjects = () => (dispatch) => {
  dispatch({ type: FETCH_REQUEST })
}

export const addProject = (name) => {
  return {
    type: ADD_PROJECT_SUCCESS,
    payload: {
      name
    }
  }
}

export const removeProject = (id) => {  
  return {
    type: REMOVE_PROJECT_SUCCESS,
    payload: {
      id
    }
  }
}

/**
 * TODO
 */

export const fetchTodo = (projectId) => {
  return {
    type: FETCH_TODO_SUCCESS,
    payload: {
      projectId
    }
  }
}

export const addTodo = (content, projectId) => {
  return {
    type: ADD_TODO_SUCCESS,
    payload: {
      content,
      projectId
    }
  }
}

export const removeTodo = (id) => {
  return {
    type: REMOVE_TODO_SUCCESS,
    payload: {
      id
    }
  }
}

export const changeTodoItemStatus = (id, projectId, status) => {
  let newStatus = '';
  if (status === 'Pending') {
    newStatus = 'In Progress'
  } else if (status === 'In Progress') {
    newStatus = 'Completed'
  }
  return {
    type: CHANGE_TODO_ITEM_STATUS_SUCCESS,
    payload: {
      id,
      projectId,
      status: newStatus
    }
  }
}
