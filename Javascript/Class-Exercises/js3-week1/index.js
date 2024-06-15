// GET A RANDOM DOG IMAGE & NEW IMG EVERY 2 Sec

document.addEventListener("DOMContentLoaded", function asd() {
  // Fetching the random imag eand return it as json to be able to read it.
  fetch("https://dog.ceo/api/breeds/image/random")
    .then((data) => {
      return data.json();
    })
    // Then creating image element and set src to the fetched data.
    .then((data) => {
      const dogImage = document.getElementById("users-list");
      const image = document.createElement("img");
      image.src = data.message;
      // Connecting our div with created image element
      dogImage.appendChild(image);
    });
});
// Function for refreshing every 2 seconds
function autoRefresh() {
  window.location = window.location.href;
}
setInterval("autoRefresh()", 2000);

// LISTING ALL RACES

// Fetch the list of data
document.addEventListener("DOMContentLoaded", function () {
  fetch("https://dog.ceo/api/breeds/list/all")
    .then((response) => response.json())
    .then((data) => {
      // Same process as we did before about creating element and connecting it to the div
      const elementDog = document.getElementById("users-list");
      // Here I tried to use breeds.forEach() method but I couldnt use it. With some research I found out that in the fetched object dog breeds holds as keys so
      // So I had to use Object.keys() method.
      let breeds = Object.keys(data.message);
      breeds.forEach((breed) => {
        const dogBreed = document.createElement("h1");
        dogBreed.innerHTML = breed;
        elementDog.appendChild(dogBreed);
      });
    })
    .catch((err) => {
      console.log("Oh noooo!!");
      console.log(err);
    });
});

// PICK RANDOM DOG PICTURE FROM THE LIST AND DISPLAY ITS NAME UNDER

// First of all I fetch the list from the API.
document.addEventListener("DOMContentLoaded", function () {
  fetch("https://dog.ceo/api/breeds/list/all")
    .then((response) => response.json())
    .then((data) => {
      // Names were defined as object keys in the fetched data so to be able to use them I had to use Object.keys method.
      let breeds = Object.keys(data.message);
      // Picking a random breed
      const randomBreed = breeds[Math.floor(Math.random() * breeds.length)];
      return randomBreed;
    })
    .then((breed) => {
      // For fetch the randomed breed I had to use template literals to be able to fetch data with variable
      return fetch(`https://dog.ceo/api/breed/${breed}/images/random`)
        .then((response) => response.json())
        .then((dogData) => {
          // Creating the elements I will use for image and the title and connecting them with the div we will use.
          const elementDog = document.getElementById("users-list");
          const randomDogElement = document.createElement("img");
          const randomDogElementTitle = document.createElement("h1");
          randomDogElementTitle.textContent = breed;
          randomDogElement.src = dogData.message;
          elementDog.appendChild(randomDogElement);
          elementDog.appendChild(randomDogElementTitle);
        });
    })
    .catch((err) => {
      console.log("Oh noooo!!");
      console.log(err);
    });
});
