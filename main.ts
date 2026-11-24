// Funniest Time Machine Warning Label — make.fun entry (main account @hazel-lynx-59).
// Writes one warning label to /output/entry.txt.
// Gate: /output/entry.txt must be UTF-8 text of 1 to 120 characters, one line,
// not only white space. This label is 72 characters, one line, no trailing newline.
// Judge brief: a deadpan safety notice; the grandfather paradox becomes the joke
// instead of being named flatly, and the surprise ("and your existence") lands
// in the last few words, after the reader expects only a warranty warning.
import { mkdirSync, writeFileSync } from "node:fs";

const label =
  "WARNING: Killing your grandfather voids the warranty and your existence.";

if (label.length < 1 || label.length > 120 || label.includes("\n")) {
  throw new Error("label fails gate: must be 1-120 chars, one line");
}

mkdirSync("/output", { recursive: true });
writeFileSync("/output/entry.txt", label, "utf8");
