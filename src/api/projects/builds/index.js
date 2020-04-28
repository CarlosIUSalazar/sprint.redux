// const router = require("express").Router({ mergeParams: true });

// router.get("/", (req, res) => {
//   const { projectId } = req.params;
//   // TODO Get and return all builds of given project
//   res.status(418).json({ message: "Not Implemented" });
// });

// router.post("/", (req, res) => {
//   const { projectId } = req.params;
//   // TODO Trigger a new build for a project. Return immediately with status 200 (don't wait for build to finish).
//   res.status(418).json({ message: "Not Implemented" });
// });

// router.get("/latest", (req, res) => {
//   const { projectId } = req.params;
//   // TODO Retrieve the latest build of a project
//   res.status(418).json({ message: "Not Implemented" });
// });

// router.get("/:buildId", (req, res) => {
//   const { projectId, buildId } = req.params;
//   // TODO Retrieve a single build from a project
//   res.status(418).json({ message: "Not Implemented" });
// });

// module.exports = router;

const router = require("express").Router({ mergeParams: true });
const tmpStorage = [
  {
    buildNumber: 65481, // A continuous number incrementing for each build in a project
    status: "Failed", // One of "Pending" | "Running" | "Success" | "Failed"
    output: "10000 out of 53325 Tests failed.",
    project_id: 252,
  },
  {
    buildNumber: 66680, // A continuous number incrementing for each build in a project
    status: "Pending", // One of "Pending" | "Running" | "Success" | "Failed"
    output: "20000 out of 53325 Tests failed.",
    project_id: 252,
  },
  {
    buildNumber: 75481, // A continuous number incrementing for each build in a project
    status: "Failed", // One of "Pending" | "Running" | "Success" | "Failed"
    output: "10000 out of 63325 Tests failed.",
    project_id: 398,
  }
]
//localhost:3000/api/projects/252/builds/
router.get("/", (req, res) => {
  const { projectId } = req.params;
  // TODO Get and return all builds of given project
  const result = tmpStorage.filter((el) => el.project_id === Number(projectId));
  res.status(200).send(result);
});
router.post("/", (req, res) => {
  const { projectId } = req.params;
  // TODO Trigger a new build for a project. Return immediately with status 200 (don't wait for build to finish).
  const result = {};
  result.buildNumber = 66700;
  result.status = "Running";
  result.output = "Running your tests...";
  result.project_id = projectId;
  tmpStorage.push(result);
  console.log(`Running tests...${JSON.stringify(result)}`);
  res.status(200).end();
});
router.get("/latest", (req, res) => {
  const { projectId } = req.params;
  // TODO Retrieve the latest build of a project
  const sameIdsArr = tmpStorage.filter(
    (el) => el.project_id === Number(projectId)
  );
  res.status(200).send(sameIdsArr[sameIdsArr.length - 1]);
});
router.get("/:buildId", (req, res) => {
  const { projectId, buildId } = req.params;
  console.log("Called");
  // TODO Retrieve a single build from a project
  const sameIdsArr = tmpStorage.filter(
    (el) => el.project_id === Number(projectId)
  );
  console.log("sameIdsArr issss", sameIdsArr);
  const singleBuild = sameIdsArr.find((el) => el.buildNumber === Number(buildId));
  console.log("singleBuild issss", singleBuild);
  res.status(200).send(singleBuild);
});
module.exports = router;