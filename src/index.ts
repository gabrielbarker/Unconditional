import * as core from "@actions/core";
import * as github from "@actions/github";
import FileRetriever from "./main/FileRetriever";
import TableReporter from "./main/TableReporter";
import Conditional from "./main/Conditional";
import ConditionalDetector from "./main/ConditionalDetector";

const parseStringList = (arrString: string): string[] =>
  arrString.split(" ").filter((s) => s.length);

async function run(): Promise<void> {
  try {
    const include: string[] = parseStringList(core.getInput("include"));
    const exclude: string[] = parseStringList(core.getInput("exclude"));
    const conditionalLayer: string[] = parseStringList(core.getInput("conditionalLayer"));
    const max: number = Number.parseInt(core.getInput("max"));

    const files = await new FileRetriever(include, exclude, conditionalLayer).getNonLayerPaths();
    const conditionals: Conditional[] = new ConditionalDetector().getConditionals(files);
    new TableReporter().printTable(conditionals);
  } catch (error) {
    core.setFailed(error.message);
  }
}

run();
