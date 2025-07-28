function identity<T>(value: T): T {
  return value;
}

const num = identity<number>(42);
const str = identity<string>("Hello, world!");
