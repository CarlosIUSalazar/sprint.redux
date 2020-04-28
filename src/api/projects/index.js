const router = require("express").Router();
const builds = require("./builds");
const shortid = require("shortid");


router.get("/", (req, res) => {
  // TODO retrieve and send all projects
  res.status(418).json({ message: "Not Implemented" });
});

router.post("/api/projects", (req, res) => {
  const { project } = req.body;
  // TODO Add new project, give it an id and send it back.
  // const returnObject = {
  //   id: shortid.generate(), // We use a string generated with shortid, but you are free to use another datatype
  //   name: "vscode",
  //   url: "git@github.com:Microsoft/vscode.git",
  //   buildCommand: "yarn && yarn test",
  //   language: "JavaScript",
  // }
  store.dispatch(add_project(project)); //?? M aybe

  res.send(project);
  console.log("RPROOOOOJECT", project);
  //res.status(418).json({ message: "Not Implemented" });
  // res.status(201).end();
});


// app.post("/api/types", (request, response) => {
//   const newType = "Saiyan";
//   pokeData.types.push(newType);
//   response.send(pokeData.types);
//   // console.log(pokeData.pokemon.length)
//   //response.status(201).end();
// });

router.get("/:projectId", (req, res) => {
  const { projectId } = req.params;
  // TODO retrieve and send project with given id
    console.log("PROOOOJJEEECT :>> ", req.body);
    
    store.dispatch({ type: "GET_PROJECT", id: projectId })  //Maybe?
    
    const data = store.getState();

  res.status(418).json({ message: "Not Implemented" });
});

router.patch("/:projectId", (req, res) => {
  const { projectId } = req.params;
  const { project } = req.body;
  // TODO edit a projects information. Make sure to validate whats being sent!
  // store.dispatch({ type: "UPDATE_PROJECT", id: projectId, body: project })
  res.status(418).json({ message: "Not Implemented" });
});

router.delete("/:projectId", (req, res) => {
  const { projectId } = req.params;
  // TODO delete project, return status 200 with no body on success
  res.status(418).json({ message: "Not Implemented" });
});

router.use("/:projectId/builds", builds);

module.exports = router;
