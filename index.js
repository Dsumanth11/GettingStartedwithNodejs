// path core module
// generating path from path module
const path = require("path");
const pathlocation = path.join(
  "abc",
  "BittuSumanth",
  "FirstProject",
  "index.txt"
);
console.log(pathlocation);

// getting started with nodejs
// using third party packages
// date-fns
const addDays = require("date-fns/addDays");

const date = addDays(new Date(2021, 01, 20), 20);
console.log(date);
