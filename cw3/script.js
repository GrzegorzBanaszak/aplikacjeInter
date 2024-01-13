const main = document.getElementById("main");
const buttons = document.getElementById("buttons");
const layouts = [
  {
    blockNumbers: 3,
    classes: [],
  },
  {
    blockNumbers: 3,
    classes: ["l2-b1"],
  },
  {
    blockNumbers: 6,
    classes: [],
  },
  {
    blockNumbers: 6,
    classes: ["l4-b1", "l4-b2", "l4-b3", "l4-b4", "l4-b5", "l4-b6"],
  },
  {
    blockNumbers: 5,
    classes: ["l5-b1", "l5-b2", "l5-b3", "l5-b4", "l5-b5"],
  },
  {
    blockNumbers: 6,
    classes: ["l6-b1", "l6-b2", "l6-b3", "l6-b4", "l6-b5", "l6-b6"],
  },
  {
    blockNumbers: 5,
    classes: ["l7-b1", "l7-b2", "l7-b3", "l7-b4", "l7-b5"],
  },
  {
    blockNumbers: 7,
    classes: ["l8-b1", "l8-b2", "l8-b3", "l8-b4", "l8-b5", "l8-b6", "l8-b7"],
  },
  {
    blockNumbers: 10,
    classes: [
      "l9-b1",
      "l9-b2",
      "l9-b3",
      "l9-b4",
      "l9-b5",
      "l9-b6",
      "l9-b7",
      "l9-b8",
      "l9-b9",
      "l9-b10",
    ],
  },
];

function renderButtons() {
  Array.from({ length: layouts.length }).forEach((_, index) => {
    const btn = document.createElement("div");
    btn.classList.add("button");
    btn.innerText = index + 1;
    btn.addEventListener("click", () => {
      render(index);
    });
    buttons.append(btn);
  });
}

function render(number) {
  clearNodes();
  const layout = layouts[number];
  main.classList.remove(main.classList[1]);
  main.classList.add(`layout-${number + 1}`);
  Array.from({ length: layout.blockNumbers }).forEach((_, index) => {
    const div = document.createElement("div");
    div.classList.add("block");
    if (layouts[number].classes[index]) {
      div.classList.add(layouts[number].classes[index]);
    }
    main.append(div);
  });
}

function clearNodes() {
  while (main.firstChild) {
    main.removeChild(main.firstChild);
  }
}

render(0);
renderButtons();
