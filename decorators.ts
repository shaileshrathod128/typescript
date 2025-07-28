function Log(target: any, key: string, descriptor: PropertyDescriptor) {
  const original = descriptor.value;
  descriptor.value = function (...args: any[]) {
    console.log(`Calling ${key} with`, args);
    return original.apply(this, args);
  };
}

class Calculator {
  @Log
  add(a: number, b: number) {
    return a + b;
  }
}

new Calculator().add(5, 3);
