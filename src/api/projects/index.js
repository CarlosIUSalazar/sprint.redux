const router = require("express").Router();
const builds = require("./builds");
const shortid = require("shortid");

const { store } = require("../../../redux/store");
// const addProject = require("../../../redux/createStore");

const tmpStorage = [
  {
    id: "252",
    name: "vscode",
    url: "git@github.com:Microsoft/vscode.git",
    buildCommand: "yarn && yarn test",
    language: "JavaScript",
  },
  {
    id: "386",
    name: "vscode",
    url: "git@github.com:Apple/vscode.git",
    buildCommand: "yarn && yarn test",
    language: "Python",
  },
  {
    id: "398",
    name: "vscode",
    url: "git@github.com:Apple/vscode.git",
    buildCommand: "yarn && yarn test",
    language: "Python",
  },
];

// GET: localhost:3000/api/projects
router.get("/", (req, res) => {
  // TODO retrieve and send all projects
  res.status(200).send(tmpStorage);
});

// localhost:3000/api/projects/api/projects
router.post("/api/projects", (req, res) => {
  const project = req.body;

  project.id = shortid.generate();

  store.dispatch({
    type: "ADD_PROJECT",
    payload: project,
  });
  // TODO Add new project, give it an id and send it back
  res.send(project);

  //res.status(418).json({ message: "Not Implemented" });
  // res.status(201).end();
});

//localhost:3000/api/projects/214
router.get("/:projectId", (req, res) => {
  console.log(req.params);
  const { projectId } = req.params;
  console.log(projectId);
  // TODO retrieve and send project with given id
  const targetProject = tmpStorage.find((el) => el.id === projectId);
  console.log(targetProject);
  res.status(200).send(targetProject);
});

//localhost:3000/api/projects/252
router.patch("/:projectId", (req, res) => {
  const { projectId } = req.params;
  const { project } = req.body;
  // console.log("project issss", project);
  const result = {};

  const targetArr = tmpStorage.find(el => el.id === projectId);
  // console.log("target issss", targetArr);


  for (const elPassed in project) {
    // console.log("elPassedddddd", elPassed);
    if (project[elPassed] !== targetArr[elPassed]) {
      console.log("I'm innnn!!!!");
      result[elPassed] = project[elPassed];
    } else {
      result[elPassed] = targetArr[elPassed];
    }
  }

  res.status(200).send(result);
});

router.delete("/:projectId", (req, res) => {
  // TODO delete project, return status 200 with no body on success
  const { projectId } = req.params;

  const targetArrIdx = tmpStorage.findIndex((el) => el.id === projectId);

  tmpStorage.splice(targetArrIdx, 1);

  res.status(200).end();
});

router.use("/:projectId/builds", builds);

module.exports = router;