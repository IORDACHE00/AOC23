import readInput from "../utils/readInput.js";

const lines = readInput("./input.txt");

const maxCount = {
  red: 12,
  green: 13,
  blue: 14,
};

const values = lines.map((line) => {
  const maxCount = {
    red: 0,
    green: 0,
    blue: 0,
  };

  line
    .split(": ")[1]
    .split("; ")
    .forEach((set) => {
      const plays = set.split(", ");

      return plays.forEach((play) => {
        const [count, color] = play.split(" ");

        if (maxCount[color] < Number(count)) maxCount[color] = Number(count);
      });
    });

  return maxCount.red * maxCount.green * maxCount.blue;
});

const result = values.reduce((sum, curr) => sum + curr);

console.log(`Correct Answer: 54699\nDay 1 Part 1 answer: ${result}`);
