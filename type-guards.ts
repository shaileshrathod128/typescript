function isString(value: unknown): value is string {
  return typeof value === "string";
}

function printLength(value: unknown) {
  if (isString(value)) {
    console.log(value.length);
  } else {
    console.log("Not a string");
  }
}
