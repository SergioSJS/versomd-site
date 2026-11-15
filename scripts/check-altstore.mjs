// `npm run check:altstore`: the AltStore source made from the committed
// releases copy (src/data/releases.json) has the fields AltStore requires;
// and, when dist/ is built, so does dist/altstore/source.json.
import { readFile } from "node:fs/promises";
import { fileURLToPath } from "node:url";
import { altstoreSource, validateAltstoreSource } from "../src/lib/altstore-data.mjs";

const rel = (p) => fileURLToPath(new URL(p, import.meta.url));
let failed = false;
const report = (label, problems) => {
  if (problems.length) { failed = true; console.error(`${label}: ${problems.join("; ")}`); } else console.log(`${label}: ok`);
};

const releases = JSON.parse(await readFile(rel("../src/data/releases.json"), "utf8"));
report("source from src/data/releases.json", validateAltstoreSource(altstoreSource(releases)));

try {
  const built = JSON.parse(await readFile(rel("../dist/altstore/source.json"), "utf8"));
  report("dist/altstore/source.json", validateAltstoreSource(built));
} catch (e) {
  if (e?.code !== "ENOENT") { failed = true; console.error(`dist/altstore/source.json: ${e.message}`); } else console.log("dist/ not built: skipped");
}
process.exit(failed ? 1 : 0);
