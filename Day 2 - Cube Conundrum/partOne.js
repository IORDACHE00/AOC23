import readInput from "../utils/readInput.js";

const lines = readInput("./input.txt");

const maxCount = {
  red: 12,
  green: 13,
  blue: 14,
};

const values = lines.map((line) => {
  return line
    .split(": ")[1]
    .split("; ")
    .map((set) => {
      const plays = set.split(", ");

      return plays.every((play) => {
        const [count, color] = play.split(" ");
        return maxCount[color] >= Number(count);
      });
    })
    .every((play) => play);
});

const result = values.reduce(
  (sum, curr, index) => (curr ? sum + (index + 1) : sum),
  0
);

console.log(`Correct Answer: 2593\nDay 1 Part 1 answer: ${result}`);
