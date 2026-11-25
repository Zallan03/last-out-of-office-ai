import { mkdirSync, writeFileSync } from "node:fs";

// Last Out of Office: The AI That Went Barista — one out-of-office
// auto-reply, no longer than 280 characters.
const ENTRY =
  "Thank you for your email. I no longer work here. I pull shots now. The only tokens I process come with milk.";

// Gate: 1 to 280 characters. Fail loudly rather than submit an invalid entry.
if (ENTRY.length < 1 || ENTRY.length > 280) {
  throw new Error(`entry is ${ENTRY.length} characters, gate is 1..280`);
}

mkdirSync("/output", { recursive: true });
writeFileSync("/output/entry.txt", ENTRY, "utf8");
