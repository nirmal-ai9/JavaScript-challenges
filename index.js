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
  let failed = [];
  data.tests.forEach((test, index) => {
    try {
      const result = solution(test.input);
      if (result === test.expected) {
        console.log(`✓ Test ${index + 1} passed`);
        passed++;
      } else {
        console.log(`✗ Test ${index + 1} failed`);
        failed.push(index);
      }
    } catch (error) {
      console.log(`✗ Test ${index + 1} failed`);
    }
  });

  if (failed.length === 0) {
    console.log("\nAll tests passed");
  } else {
    failed.forEach((e) => {
      console.log(`${data.function}(${data.tests[e].input}) should return ${data.tests[e].expected}`);
    });
  }
}

module.exports = runTest;
