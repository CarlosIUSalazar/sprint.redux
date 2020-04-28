const createStore = require("redux").createStore;

const initialStateProject = {
  projects: [],
  builds: [],
};

// eslint-disable-next-line no-undef
function reducer(state = initialStateProject, action) {
  switch (action.type) {
    case "ADD_PROJECT":
      return {
        ...state,
        projects: [...state.projects, [...initialStateProject.projects, action.payload]],
      }; //slice method returns a new array leaving the original as it was
    default:
      return state;
  }
}

//ACTION
const addProject = (project) => {
  return {
    type: "ADD_PROJECT",
    payload: {
      id: project.id,
      name: project.name,
      url: project.url,
      buildCommand: project.buildCommand,
      language: project.language,
    },
  };
}

// create our store
const store = createStore(reducer);

module.exports = {
  store,
};

// make the store listen to actions  NO NEED FOR THIS SPRINT BECAUSE THERE NOTHING TO RENDER
// store.subscribe(() => {
//   // update the dom / render the DOM
//   render();
// });

// function render() {
//   pizza.innerText = store.getState().slices;
//   toppings.innerText = store.getState().toppings;
// }