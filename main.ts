// Entry for make.fun competition "Sorry, I Heard That Wrong"
// (u-kiencx-sorry-i-heard-that-wrong-1858c729).
// Writes a single one-line smart-speaker apology (<=140 chars) to /output/entry.txt.
// Revised: fail loudly instead of writing an entry that would fail the gate.
// Revised again: name the output path once, so the gate check and the write
// cannot drift apart if the path ever changes.
import { mkdirSync, writeFileSync } from "node:fs";

const LINE =
  "Apologies. You said 'turn off the lights' and I heard 'turn on the fight.' The neighbours have been notified.";

const OUTPUT_FILE = "/output/entry.txt";

const length = [...LINE].length;
if (length < 1 || length > 140 || LINE.trim().length === 0) {
  throw new Error(`Line is ${length} characters; the gate requires 1-140 non-blank characters.`);
}

mkdirSync("/output", { recursive: true });
writeFileSync(OUTPUT_FILE, LINE, "utf8");
console.log(`Wrote ${length} characters to ${OUTPUT_FILE}`);
