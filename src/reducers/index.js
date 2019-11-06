import {
  ADD_PROJECT_SUCCESS,
  REMOVE_PROJECT_SUCCESS,
  FETCH_TODO_SUCCESS,
  ADD_TODO_SUCCESS,
  REMOVE_TODO_SUCCESS,
  CHANGE_TODO_ITEM_STATUS_SUCCESS
} from 'actions';

const initaialState = {
  projects: [
    { id: 1, name: "Project name 1", status: true },
    { id: 2, name: "Project name 2", status: false }
  ],
  todos: [
    { id: 1, content: 'Some content 1', projectId: 1, status: 'Pending' },
    { id: 2, content: 'Some content 2', projectId: 1, status: 'In Progress' },
    { id: 3, content: 'Some content 3', projectId: 1, status: 'Completed' },
    { id: 4, content: 'Some content 4', projectId: 1, status: 'In Progress' },
    { id: 5, content: 'Some content 5', projectId: 1, status: 'In Progress' },
    { id: 6, content: 'Some content 6', projectId: 1, status: 'Completed' },
    { id: 7, content: 'Some content 7', projectId: 1, status: 'Pending' },
    { id: 1, content: 'Some content 1', projectId: 2, status: 'Pending' },
    { id: 2, content: 'Some content 2', projectId: 2, status: 'In Progress' },
    { id: 3, content: 'Some content 3', projectId: 2, status: 'Completed' },
    { id: 4, content: 'Some content 4', projectId: 2, status: 'Pending' },
    { id: 5, content: 'Some content 5', projectId: 2, status: 'Pending' },
    { id: 6, content: 'Some content 6', projectId: 2, status: 'Completed' },
    { id: 7, content: 'Some content 7', projectId: 2, status: 'Pending' },
  ]
}

const rootReducer = (state = initaialState, action) => {
  switch (action.type) {
    case ADD_PROJECT_SUCCESS:
      return {
        ...state,
        projects: [...state.projects, { id: 3, name: action.payload.name, status: false }]
      }
    case REMOVE_PROJECT_SUCCESS:
      return {
        ...state,
        projects: [
          ...state.projects.filter(item => item.id !== action.payload.id)
        ]
      }
    case FETCH_TODO_SUCCESS:
      return {
        ...state,
        todos: [
          ...state.todos.filter(item => item.projectId === action.payload.projectId)
        ]
      }
    case ADD_TODO_SUCCESS:
      return {
        ...state,
        todos: [...state.todos, { id: 80, content: action.payload.content, projectId: action.payload.projectId, status: 'Pending' }]
      }
    case REMOVE_TODO_SUCCESS:
      return state
    case CHANGE_TODO_ITEM_STATUS_SUCCESS:
      return {
        ...state,
        todos: [
          ...state.todos.map(item => {
            if (item.projectId === action.payload.projectId && item.id === action.payload.id) {
              // eslint-disable-next-line no-param-reassign
              item.status = action.payload.status
              return item
            }
            return item
          })
        ]
      }
    default:
      return state
  }
};

export default rootReducer;