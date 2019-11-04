const initaialState = {
  projects: [
    { id: 1, name: "Project name 1", status: true },
    { id: 2, name: "Project name 2", status: false },
    { id: 3, name: "Project name 3", status: true },
    { id: 4, name: "Project name 4", status: false },
    { id: 5, name: "Project name 5", status: false },
    { id: 6, name: "Project name 6", status: true },
    { id: 7, name: "Project name 7", status: true },
    { id: 8, name: "Project name 8", status: false },
    { id: 9, name: "Project name 9", status: true },
    { id: 10, name: "Project name 10", status: false },
    { id: 11, name: "Project name 11", status: false },
    { id: 12, name: "Project name 12", status: false },
    { id: 13, name: "Project name 13", status: true },
    { id: 14, name: "Project name 14", status: false },
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
    case ('REMOVE_ITEM'):
      return {
        ...state,
        projects: [
          ...state.projects.filter(item => item.id !== action.payload.id)
        ]
      }
    case ('GET_ITEM_BY_ID'):
      return {
        ...state,
        projects: [
          ...state.projects.filter(item => item.id === action.payload.id)
        ]
      }
    case ('GET_TODOS_BY_PROJECT_ID'):
      return {
        ...state,
        todos: [
          ...state.todos.filter(item => item.projectId === action.payload.id)
        ]
      }
    default:
      return state
  }
};

export default rootReducer;