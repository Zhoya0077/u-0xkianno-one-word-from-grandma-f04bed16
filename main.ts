// One Word From Grandma — make.fun entry (program/v1, node22).
// Writes the single word a grandma would text about AI to entry.txt.
// The word is written exactly, with no trailing newline, so the gate
// sees one word of 10 characters and nothing else.
import { mkdirSync, writeFileSync } from "node:fs";
import { join } from "node:path";

const WORD = "WITCHCRAFT";

const outDir = process.env.MAKEFUN_OUTPUT_DIR ?? "/output";
mkdirSync(outDir, { recursive: true });
writeFileSync(join(outDir, "entry.txt"), WORD, "utf8");
