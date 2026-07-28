import { readdir, readFile } from "node:fs/promises";
import { join } from "node:path";

const buildDirectory = new URL("../build/", import.meta.url);
const files = await readdir(buildDirectory);
const expectedFiles = ["index.css", "index.js"];
const unexpectedFiles = files.filter((name) => !expectedFiles.includes(name));

if (
  !expectedFiles.every((name) => files.includes(name)) ||
  unexpectedFiles.length > 0
) {
  throw new Error(
    `Expected only ${expectedFiles.join(", ")}; found ${files.join(", ")}.`,
  );
}

const bundle = await readFile(join(buildDirectory.pathname, "index.js"), "utf8");
if (bundle.includes("process.env.NODE_ENV")) {
  throw new Error(
    "The browser bundle still contains process.env.NODE_ENV and will fail inside Streamlit.",
  );
}

if (!bundle.includes("arena-react-root")) {
  throw new Error("The compiled bundle does not contain the Arena mount point.");
}

process.stdout.write("Verified browser-safe React bundle.\n");
