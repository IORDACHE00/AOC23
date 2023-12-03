import readInput from "../utils/readInput.js";

const lines = readInput("./input.txt");

const values = lines.map((line) => {
  const matches = Array.from(
    line.matchAll(/(?=([0-9]|one|two|three|four|five|six|seven|eight|nine))/g),
    (match) => match[1]
  );

  const numbersMap = {
    one: 1,
    two: 2,
    three: 3,
    four: 4,
    five: 5,
    six: 6,
    seven: 7,
    eight: 8,
    nine: 9,
  };

  const firstMatch = isNaN(parseInt(matches[0]))
    ? numbersMap[matches[0]]
    : matches[0];

  const lastMatch = isNaN(parseInt(matches[matches.length - 1]))
    ? numbersMap[matches[matches.length - 1]]
    : matches[matches.length - 1];

  return Number(`${firstMatch}${lastMatch}`);
});

const result = values.reduce((sum, curr) => sum + curr);

console.log(`Correct Answer: 53855\nDay 1 Part 1 answer: ${result}`);
