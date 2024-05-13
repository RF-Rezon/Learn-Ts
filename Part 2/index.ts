{
  let carFunc = <X, Y extends keyof X>(a: X, b: Y) => {
    let totalModel = a[b];

    console.log(totalModel);
  };

  let car = {
    color: "White",
    name: "Lambourghini",
    model: "Sian",
    Price: 3,
  };

  carFunc(car, "color");
}
