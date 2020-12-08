let input: unknown;
let username: string;

//np
input = 6;
input = "Bas";

// Nope, has to be string
// username = input;

// With check it's possible
if (typeof input === "string") username = input;
