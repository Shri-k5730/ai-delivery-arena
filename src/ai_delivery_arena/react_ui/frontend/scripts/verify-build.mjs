import { readdir, readFile } from "node:fs/promises";
import { join } from "node:path";

const buildDirectory = new URL("../build/", import.meta.url);
const files = await readdir(buildDirectory);
const scriptFiles = files.filter((name) => name.endsWith(".js"));

if (scriptFiles.length !== 1) {
  throw new Error(
    `Expected one compiled JavaScript asset, found ${scriptFiles.length}.`,
  );
}

const bundle = await readFile(join(buildDirectory.pathname, scriptFiles[0]), "utf8");
if (bundle.includes("process.env.NODE_ENV")) {
  throw new Error(
    "The browser bundle still contains process.env.NODE_ENV and will fail inside Streamlit.",
  );
}

if (!bundle.includes("arena-react-root")) {
  throw new Error("The compiled bundle does not contain the Arena mount point.");
}

process.stdout.write("Verified browser-safe React bundle.\n");
