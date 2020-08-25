import * as core from "@actions/core";
import * as github from "@actions/github";
import ConditionalDetector from "./main/ConditionalDetector";
import FileRetriever from "./main/FileRetriever";

async function run(): Promise<void> {
  try {
    const include = core.getInput("include");
    const exclude = core.getInput("exclude");
    const conditionalLayer = core.getInput("conditionalLayer");
    const max = core.getInput("max");
    console.log("include");
    console.log(include);
    console.log("exclude");
    console.log(exclude);
    console.log("conditionalLayer");
    console.log(conditionalLayer);
    console.log("max");
    console.log(max);
    // const files = await new FileRetriever().getPaths(include, exclude);
    // files.forEach((file) => {
    //   const cond = new ConditionalDetector(file);
    //   const positionList = cond
    //     .getConditionals()
    //     .map((c) => `\n - ln:${c.getLineNumber()}, col:${c.getColumnNumber()}`)
    //     .join("");
    //   console.log(`${file}:${positionList}`);
    // });
  } catch (error) {
    core.setFailed(error.message);
  }
}

run();
