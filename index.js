const fs = require("fs");
const path = require("path");

function runTest(x){
  const solutionDir = path.dirname(x);
  const challengeDir = path.dirname(solutionDir);
  const configPath = path.join(challengeDir, "config.json");
  const data = JSON.parse(fs.readFileSync(configPath, "utf8"));

  const solution = require(x);
  console.log(`\nRunning ${path.basename(x)}...`);
  console.log(`Function: ${data.function}`);
  console.log(`Tests: 7\n`);

  let passed = 0;
  data.tests.forEach((test, index) => {
    try {
      const result = solution(test.input);
}
