const btn = document.getElementById("btn");

btn.addEventListener("click", async () => {
  await getUser();
});

const getUser = async () => {
  const data = await fetch(`https://jsonplaceholder.typicode.com/users`);
  const user = await data.json();
  displayData(user);
};

const displayData = (data) => {
  const mainPlaceholder = document.getElementById("placeholder");
  while (mainPlaceholder.firstChild) {
    mainPlaceholder.removeChild(mainPlaceholder.firstChild);
  }
  data.forEach((user) => {
    const userValues = Object.values(user);
    const userDiv = document.createElement("div");
    userDiv.classList.add("user");
    userValues.forEach((userValue) => {
      if (typeof userValue !== "object") {
        const userValueDiv = document.createElement("div");
        const userValueData = document.createTextNode(userValue);
        userValueDiv.appendChild(userValueData);
        userDiv.appendChild(userValueDiv);
      }
    });
    mainPlaceholder.appendChild(userDiv);
  });
};
