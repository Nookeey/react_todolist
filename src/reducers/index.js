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
  ]
}

const rootReducer = (state = initaialState, action) => {
  return state
};

export default rootReducer;