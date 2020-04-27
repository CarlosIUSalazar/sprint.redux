import { createStore } from "redux";

const initialStateProject = {
  projects: [],
  builds: [],
};


//M
const initialState = { projects: [] };
function addingID(state) {
  for (const i of state.projects) state.projects[i].id = shortid.generate();
  console.log("STATEEEEEEEEEEE", state);
  return state;
} 


// create our store
const store = createStore(reducer);

// make the store listen to actions  NO NEED FOR THIS SPRINT BECAUSE THERE NOTHING TO RENDER
// store.subscribe(() => {
//   // update the dom / render the DOM
//   render();
// });

// function render() {
//   pizza.innerText = store.getState().slices;
//   toppings.innerText = store.getState().toppings;
// }

