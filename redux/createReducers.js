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
//m
const initialState = { projects: [] };
function addingID(state) {
  for (const i of state.projects) state.projects[i].id = shortid.generate();
  console.log("STAAAAATEEEEEE", state);
  return state;
}


//ACTION
function addProject(project) {
  return {
    type: "ADD_PROJECT",
    payload: { "id": project.id, "name": project.name, "url": project.url, "buildCommand": project.buildCommand, "language": project.language }
  };
}

//2.0
function add_project(content) {
  return { type: "ADD_PROJECT", payload: addingID(content) };
}
