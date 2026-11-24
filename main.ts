// Say What Actually Broke — one line of honest software error copy.
//
// Deterministic by design: the line is hardcoded below. No randomness,
// no clock, no network, no model calls, no environment secrets — the
// program only writes that one line to /output/entry.txt.
import { mkdirSync, writeFileSync } from "node:fs";

const LINE =
  "Your file never actually saved — the button just enjoyed the applause. Copy your work somewhere safe, then save again and actually watch it happen.";

mkdirSync("/output", { recursive: true });
writeFileSync("/output/entry.txt", LINE, "utf8");
