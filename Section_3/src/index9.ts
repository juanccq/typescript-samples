class FakeFinal {
  message: string;

  private constructor(msg: string){
    this.message = msg;
  }

  static create(msg: string): FakeFinal {
    return new FakeFinal(msg);
  }
}

const final: FakeFinal = FakeFinal.create('our message');
console.log(final.message);


