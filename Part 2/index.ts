{
  class Device {
    // name: string;
    // work: string;
    // color: string;
    // brand: string;

    constructor(
      public name: string,
      public work: string,
      public color: string,
      public brand: string
    ) {
      // this.name = name;
      // this.work = work;
      // this.color = color;
      // this.brand = brand;
    }

    about() {
      console.log(
        `This is a ${this.name}. It does ${this.work}. It is ${this.color} colored, and ${this.brand} branded.`
      );
    }
  }

  const mobile = new Device("Mobile", "Connect people", "black", "Sumsang");

  console.log(mobile.brand);
  mobile.about();
}
