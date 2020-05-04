export class Special<T> {
  #value: T;
  #stack: T[];
  constructor(initial: T) {
    this.#value = initial;
    this.#stack = [];
  }

  get value(): T {
    return this.#value;
  }

  get depth(): number {
    return this.#stack.length;
  }

  push(value: T) {
    this.#stack.push(this.#value);
    this.#value = value;
  }
  pop() {
    if (this.depth === 0) {
      throw new Error("can't pop an unbound special");
    }
    this.#value = this.#stack.pop()!;
  }

  bind<R, F extends () => R>(value: T, f: F): R {
    this.push(value);
    try {
      return f();
    } finally {
      this.pop();
    }
  }
}
