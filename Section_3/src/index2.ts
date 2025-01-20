class FluentCalculator {
  private result: number;

  constructor(initialValue: number) {
    this.result = initialValue;
  }

  add(value: number): this {
    this.result += value;
    return this
  }

  substract(value: number): this {
    this.result -= value;
    return this;
  }

  multiply(value: number): this {
    this.result *= value;
    return this;
  }

  divide(value: number): this {
    if (value !== 0) {
      this.result /= value;
    }
    else {
      console.error('Cannot divide by zero');
    }

    return this;
  }

  getResult(): number {
    return this.result;
  }
}

const result = new FluentCalculator(0).add(5).multiply(2).divide(4).substract(1).getResult();
console.log(result);
