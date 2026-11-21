import { mkdirSync, writeFileSync } from "node:fs";
import { join } from "node:path";

// A short text written to relax the reader: one woman, one beach, one tide,
// counted every evening for sixty-four years.
const ENTRY =
  "Every evening at dusk, Ana counts the tide coming in at Nazaré, one wave at a time, and writes the number in a notebook her grandfather started in 1962 — sixty-four years of water arriving, leaving, arriving, and the sea has never once been in a hurry.";

const outDir = process.env.MAKEFUN_OUTPUT_DIR ?? "/output";
// Deterministic: the entry is a fixed string constant, so every run writes
// byte-identical output.
mkdirSync(outDir, { recursive: true });
writeFileSync(join(outDir, "entry.txt"), ENTRY, "utf8");
