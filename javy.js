const plansza = document.getElementById("plansza");
const boxes = Array.from(document.getElementsByClassName("box"));
const restart1 = document.getElementById("restart1");
const txt1 = document.getElementById("txt1");
const pole = [null, null, null, null, null, null, null, null, null];
const O_TEXT = "O";
const X_TEXT = "X";
let Gracz1 = O_TEXT;

const utowrzplansze = () => {
  boxes.forEach((box, index) => {
    let styleString = "";
    if (index < 3) {
      styleString += `border-bottom: 3px solid var(--RED);`;
    }
    if (index % 3 === 0) {
      styleString += `border-right: 3px solid var(--RED);`;
    }
    if (index % 3 === 2) {
      styleString += `border-left: 3px solid var(--RED);`;
    }
    if (index > 5) {
      styleString += `border-top: 3px solid var(--RED);`;
    }
    box.style = styleString;

    box.addEventListener("click", boxklik);
  });
};

function boxklik(e) {
  const id = e.target.id;
  if (!pole[id]) {
    pole[id] = Gracz1;
    e.target.innerText = Gracz1;
    if (zwyciestwo(Gracz1)) {
      playText.innerHTML = `${Gracz1} wins!!`;
      return;
    }
    Gracz1 = Gracz1 === O_TEXT ? X_TEXT : O_TEXT;
  }
}

const zwyciestwo = (gracz) => {

  if (pole[0] === gracz) {
    if (pole[1] === gracz && pole[2] === gracz) {
      console.log(`${gracz} wins up top`);
      return true;
    }
    if (pole[3] === gracz && pole[6] === gracz) {
      console.log(`${gracz} wins on the left`);
      return true;
    }
    if (pole[4] === gracz && pole[8] === gracz) {
      console.log(`${gracz} wins on the diagonal`);
      return true;
    }
  }

  if (pole[8] === gracz) {
    if (pole[2] === gracz && pole[5] === gracz) {
      console.log(`${gracz} wins on the right`);
      return true;
    }
    if (pole[7] === gracz && pole[6] === gracz) {
      console.log(`${gracz} wins on the bottom`);
      return true;
    }
  }

  if (pole[4] === gracz) {
    if (pole[3] === gracz && pole[5] === gracz) {
      console.log(`${gracz} wins on the middle horizontal`);
      return true;
    }
    if (pole[1] === gracz && pole[7] === gracz) {
      console.log(`${gracz} wins on the middle vertical`);
      return true;
    }
  }
};

restart1.addEventListener("click", () => {
  pole.forEach((space, index) => {
    pole[index] = null;
  });
  boxes.forEach((box) => {
    box.innerText = "";
  });
  txt1.innerHTML = `Let's Play!!`;

  Gracz1 = O_TEXT;
});

drawBoard();
