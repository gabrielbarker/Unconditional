import * as core from "@actions/core";
import * as github from "@actions/github";
import { readdirSync } from "fs";
import ConditionalDetector from "./main/ConditionalDetector";

async function run(): Promise<void> {
  try {
    const mainPath = "./src/main";
    const files = readdirSync(mainPath);
    files.forEach((file) => {
      const path = `${mainPath}/${file}`;
      const cond = new ConditionalDetector(path);
      const positionList = cond
        .getConditionals()
        .map((c) => `\n - ln:${c.getLineNumber()}, col:${c.getColumnNumber()}`)
        .join("");
      console.log(`${file}:${positionList}`);
    });
  } catch (error) {
    core.setFailed(error.message);
  }
}

run();
