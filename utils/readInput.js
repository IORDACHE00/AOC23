import fs from "fs";

export default function readInput(inputFile) {
  const raw = fs.readFileSync(inputFile, "utf-8");
  const lines = raw.replace(/\r/g, "").trim().split("\n");
  return lines;
}
