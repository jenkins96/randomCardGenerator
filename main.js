window.onload = function() {
  console.log("Hello Rigo from the console!");
  const number = [2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14];
  const indexNum = Math.floor(Math.random() * number.length);
  let letter = "";
  // Switch para evaluar los casos especiales y el default que muestre //el valor number
  switch (number[indexNum]) {
    case 11:
      letter = "J";
      document.getElementById("number").innerHTML = letter;
     
      break;
    case 12:
      letter = "Q";
      document.getElementById("number").innerHTML = letter;
      break;
    case 13:
        letter = "K";
      document.getElementById("number").innerHTML = letter;
      break;
    case 14:
      letter = "A";
      document.getElementById("number").innerHTML = letter;
      break;
    default:
        document.getElementById("number").innerHTML = number[indexNum];
      console.log(number[indexNum]);
      break;
  }
  console.log("letter");
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

