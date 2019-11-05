// eslint-disable-next-line import/prefer-default-export
export const removeItem = (id) => ({
  type: 'REMOVE_ITEM',
  payload: {
    id
  }
})

export const getItemById = (id) => ({
  type: 'GET_ITEM_BY_ID',
  payload: {
    id
  }
})

export const getTodosByProjectId = (id) => ({
  type: 'GET_TODOS_BY_PROJECT_ID',
  payload: {
    id
  }
})

export const changeTodoItemStatus = (id, projectId, status) => ({
  type: 'CHANGE_TODO_ITEM_STATUS',
  payload: {
    id,
    projectId,
    status
  }
})

export const addProject = (name) => ({
  type: 'ADD_PROJECT',
  payload: {
    name
  }
})