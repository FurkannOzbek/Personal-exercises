// Creating li- h1 and appending them to ul and li , using the data inside a for loop

const podcasts = [
  {
    name: "The mystery om of Johan Klausen Varbourg",
    imageUrl: "https://picsum.photos/536/354",
  },
  {
    name: "Tips about dogs with small legs",
    imageUrl: "https://picsum.photos/536/354",
  },
  {
    name: "You, me, we and us",
    imageUrl: "https://picsum.photos/536/354",
  },
  {
    name: "Breakfast news - Dinner edition",
  },
];

let ul = document.getElementById("ul");
for (let pod of podcasts) {
  let li = document.createElement("li");
  ul.appendChild(li);
  let h1 = document.createElement("h1");
  li.appendChild(h1);
  let img = document.createElement("img");
  li.appendChild(img);

  h1.innerHTML = pod.name;
  if (pod.imageUrl !== undefined) {
    img.setAttribute("src", pod.imageUrl);
  }
}
