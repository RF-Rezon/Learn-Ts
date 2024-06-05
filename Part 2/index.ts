{
  class Person {
    constructor(
      public name: string,
      public work: string,
      public skin_color: string
    ) {}

    about() {
      console.log(
        `This is a ${this.name}. It does ${this.work}. It is ${this.skin_color} colored.`
      );
    }
  }

  class Rahim extends Person {
    constructor(name: string, work: string, skin_color: string) {
      super(name, work, skin_color);
    }

    about() {
      console.log(
        `This is a ${this.name}. It does ${this.work}. It is ${this.skin_color} colored.`
      );
    }
  }

  class Karim extends Person {
    constructor(name: string, work: string, skin_color: string) {
      super(name, work, skin_color);
    }
  }

  const man1 = new Rahim("Rahim", "Businessman", "black");
  console.log(man1.name);

  const man2 = new Karim("Karim", "Job Holder", "black");
}
