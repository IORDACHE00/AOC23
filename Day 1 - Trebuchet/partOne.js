import readInput from "../utils/readInput.js";

const lines = readInput("./input.txt");

const values = lines.map((line) => {
  const first = line.split("").find((value) => !Number.isNaN(Number(value)));
  const last = line.split("").findLast((value) => !Number.isNaN(Number(value)));

  return Number(first + last);
});

const result = values.reduce((sum, curr) => sum + curr, 0);

console.log(`Correct Answer: 54634\nDay 1 Part 1 answer: ${result}`);
