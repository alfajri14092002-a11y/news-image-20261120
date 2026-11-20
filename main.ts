// Front Page 20 Nov 2026 — entry generator (Node 22).
//
// The front page is a single pre-rendered image (entry.png) built from
// front-page.html, a hand-written HTML page of verified news from Friday
// 20 November 2026. This program copies that image to the harness output
// directory. The copy is byte-for-byte, so the program is deterministic:
// two runs write identical files, and no network is used at run time.
import { copyFileSync, existsSync, mkdirSync } from "node:fs";
import { dirname, join } from "node:path";
import { fileURLToPath } from "node:url";

const here = dirname(fileURLToPath(import.meta.url));
const source = join(here, "entry.png");
const outDir = process.env.MAKEFUN_OUTPUT_DIR ?? "/output";
const target = join(outDir, "entry.png");

if (!existsSync(source)) {
  throw new Error(`bundled entry image not found: ${source}`);
}

mkdirSync(outDir, { recursive: true });
copyFileSync(source, target);
console.log(`wrote ${target}`);
