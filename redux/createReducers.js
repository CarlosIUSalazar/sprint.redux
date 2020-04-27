//import { Reducer } from 'redux';
//import initialStateProject from ('.....')
const name = require 'redux';    //redux.createste

function reducer(state = initialState, action) {
  switch (action.type) {
    case 'ADD_PROJECT':
      return { ...state, projects: [...state.projects, addProject(action.payload)] };  //slice method returns a new array leaving the original as it was
    default:
      return state;
  }
}

//ACTION
function addProject(project) {
  return {
    type: "ADD_PROJECT",
    payload: { "id": project.id, "name": project.name, "url": project.url, "buildCommand": project.buildCommand, "language": project.language }
  };
}


