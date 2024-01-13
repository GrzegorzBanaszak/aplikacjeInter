const btn = document.getElementById("btn");

btn.addEventListener("click", async () => {
  await getUser();
});

const getUser = async () => {
  const data = await fetch(`https://jsonplaceholder.typicode.com/users/`);
  const user = await data.json();
  displayData(user);
};

const displayData = (data) => {
  const mainPlace = document.getElementById("placeholder");
  data.forEach((elem) => {
    const values = Object.values(elem);
    const placeholder = document.createElement("div");
    placeholder.classList.add("user");
    values.forEach((subElem) => {
      if (!Object.is(subElem)) {
        if (!Array.isArray(subElem)) {
          console.log(subElem);
          const subPlace = document.createElement("div");
          const textNode = document.createTextNode(subElem);

          subPlace.appendChild(textNode);
          placeholder.appendChild(subPlace);
        }
      }
    });
    mainPlace.appendChild(placeholder);
  });
};
