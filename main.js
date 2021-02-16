window.onload = function() {
  console.log("Hello Rigo from the console!");
  ///////////////// CARD NUMBER SECTION /////////////////
  const number = [2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14]; // array of poker cards
  const indexNum = Math.floor(Math.random() * number.length);
  const numPosition = document.getElementById("number");
  let numAsLetter = ""; // for treating special cases like 11 = "J"

  // Using switch statement for evaluating special cases and setting number[indexNum] as default 
  switch (number[indexNum]) {
    case 11:
      numAsLetter = "J";
      numPosition.innerHTML = numAsLetter;
      break;
    case 12:
      numAsLetter = "Q";
      numPosition.innerHTML = numAsLetter;
      break;
    case 13:
      numAsLetter = "K";
      numPosition.innerHTML = numAsLetter;
      break;
    case 14:
      numAsLetter = "A";
      numPosition.innerHTML = numAsLetter;
      break;
    default:
      numPosition.innerHTML = number[indexNum];
      console.log(number[indexNum]);
      break;
  }
  
  ///////////////// CARD ICONS SECTION /////////////////
  const suit = "♣♦♠♥";
  const indexSuit = Math.floor(Math.random() * suit.length);
  const iconTopPosition = document.getElementById("iconTop");
  const iconBotPosition = document.getElementById("iconBot");
  let suitInverse = "";
  //Using if statements

 
  if(indexSuit == 0 || indexSuit == 3){
     iconTopPosition.innerHTML = suit[indexSuit];
     iconBotPosition.innerHTML = suit[indexSuit];
  }else if(indexSuit == 1) {
    iconTopPosition.innerHTML = suit[indexSuit];  
    iconBotPosition.innerHTML = suit[indexSuit];
  }else{
    iconTopPosition.innerHTML = suit[indexSuit];  
    iconBotPosition.innerHTML = suit[indexSuit];
  }
  // Iconos
  /*
  const palos = "♣♦♠♥";
  const indexIcon = Math.floor(Math.random() * 4);
  switch (palos[indexIcon]) {
    case "♥":
      let parent = document.querySelector(".card");
      document.querySelector(".icon").innerHTML = palos[3];
      document.querySelector("#iconBot").parent.append(iconBot).innerHTML =
        palos[3];

      break;
    case "♦":
      document.querySelector(".icon").innerHTML = palos[1];
      break;
    case "♣":
      document.querySelector(".icon").innerHTML = palos[2];
      break;
    default:
      document.querySelector(".icon").innerHTML = palos[0];
  }*/
};

