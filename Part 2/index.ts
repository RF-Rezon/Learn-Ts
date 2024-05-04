{
  type Person = {
    name: string;
    age: number;
    height: number;
    religious: boolean;
    address: string;
    nationality: string;
  };

  let Rahim: Person = {
    name: "Rahim",
    age: 48,
    height: 10,
    religious: true,
    address: "French",
    nationality: "French",
  };

  let Shafia: Person = {
    name: "Shafia",
    age: 48,
    height: 10,
    religious: true,
    address: "French",
    nationality: "French",
  };
  let NiceLady: Person = {
    name: "Nice Lady Shafia",
    age: 48,
    height: 10,
    religious: true,
    address: "French",
    nationality: "French",
  };

  type array = (a: number, b: number) => number;
  let anArray: array = (a, b) => a + b;

  anArray(1, 1);
}
