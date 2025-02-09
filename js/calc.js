function viewChecked() {
  let WinClass = document.querySelector('input[name="win-class"]:checked').id;
  let WinType = document.querySelector('input[name="win-type"]:checked').id;
  let Options = document.querySelectorAll('input[name="options"]:checked');
  let Img = document.getElementById("win-img");
  let priceBase = document.getElementById("priceBase");
  let priceOptions = document.getElementById("priceOptions");
  let price = 0;

  for (o of Options) {
    if (o.id) {
      price += windows.winType[WinType].options[o.id];
    }
  };

  priceBase.innerHTML = windows.winType[WinType][WinClass];
  priceOptions.innerHTML = windows.winType[WinType][WinClass] + price;
  Img.innerHTML = windows.winType[WinType].img;
}

let optionsTwo = {
  install: 3870,
  mosquitoNet: 900,
  lowTides: 220,
  sills: 650,
  slopes: 1110
};
let optionsThree = {
  install: 4500,
  mosquitoNet: 900,
  lowTides: 310,
  sills: 920,
  slopes: 1110
};
let optionsBlock = {
  install: 4500,
  mosquitoNet: 900,
  lowTides: 310,
  sills: 650,
  slopes: 1110
};
let windows = {
  winType: {
    twoOne: {
      econom: 8700,
      standart: 11000,
      elite: 12300,
      options: optionsTwo,
      img: '<img src="assets/img/calc/okno_2_1.png" style="height: 80px;">'
    },
    twoTwo: {
      econom: 11700,
      standart: 15100,
      elite: 16600,
      options: optionsTwo,
      img: '<img src="assets/img/calc/okno_2_2.png" style="height: 80px;">'
    },
    threeOne: {
      econom: 12100,
      standart: 14300,
      elite: 16100,
      options: optionsThree,
      img: '<img src="assets/img/calc/okno_3_1.png" style="height: 80px;">'
    },
    threeTwo: {
      econom: 15100,
      standart: 18400,
      elite: 20400,
      options: optionsThree,
      img: '<img src="assets/img/calc/okno_3_2.png" style="height: 80px;">'
    },
    threeThree: {
      econom: 18000,
      standart: 22400,
      elite: 24700,
      options: optionsThree,
      img: '<img src="assets/img/calc/okno_3_3.png" style="height: 80px;">'
    },
    block: {
      econom: 13100,
      standart: 16000,
      elite: 18200,
      options: optionsBlock,
      img: '<img src="assets/img/calc/okno_4_1.png" style="height: 80px;">'
    },
    blockOne: {
      econom: 17100,
      standart: 21100,
      elite: 23500,
      options: optionsBlock,
      img: '<img src="assets/img/calc/okno_4_2.png" style="height: 80px;">'
    },
  },
}
viewChecked();
