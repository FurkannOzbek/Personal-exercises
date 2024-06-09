// // document.addEventListener("DOMContentLoaded", function () {
// //   fetch("https://jsonplaceholder.typicode.com/users")
// //     .then((data) => {
// //       return data.json();
// //     }0
// //     .then((dataJson) => {
// //       const userList = document.getElementById("users-list");
// //       dataJson.forEach((user) => {
// //         const listItem = document.createElement("li");
// //         listItem.textContent = `${user.name} ${user.email} ${user.website}`;
// //         userList.appendChild(listItem);
// //       });
// //     });
// // });

// document.addEventListener("DOMContentLoaded", function () {
//   fetch("https://jsonplaceholder.typicode.com/photos").then((data) => {
//     return data
//       .json()
//       .then((data) => {
//         let firstTenImg = data.slice(0, 10);
//         return firstTenImg;
//       })
//       .then((data) => {
//         // console.log(data);
//         const imageList = document.getElementById("users-list");
//         data.forEach((data) => {
//           let title = data.title;
//           const listTitle = document.createElement("h1");
//           const listImage = document.createElement("img");
//           listTitle.innerHTML = title;
//           //   listImage.innerHTML = `<p>asd</p>`;
//           listImage.src = data.thumbnailUrl;
//           //   listImage.title = ` ${data.title}`;
//           imageList.appendChild(listTitle);
//           imageList.appendChild(listImage);
//         });
//       });
//   });
// });

// let images = document.querySelectorAll("img");
// images.addEventListener("onclick", asd);

// function asd() {
//   console.log("a");
// }

// document.addEventListener("DOMContentLoaded", function asd() {
//   fetch("https://dog.ceo/api/breeds/image/random")
//     .then((data) => {
//       return data.json();
//     })
//     .then((data) => {
//       const dogImage = document.getElementById("users-list");
//       const image = document.createElement("img");
//       image.src = data.message;
//       dogImage.appendChild(image);
//     });
// });
// function autoRefresh() {
//   window.location = window.location.href;
// }
// setInterval("autoRefresh()", 2000);

document.addEventListener("DOMContentLoaded", function () {
  fetch("https://dog.ceo/api/breeds/list/all")
    .then((data) => {
      return data.json();
    })
    .then((data) => {
      console.log(data);
      const elementDog = document.getElementById("users-list");
      let breeds = data.message;
      console.log(breeds);
      breeds.forEach((data) => {
        const dogBreed = document.createElement("h1");
        dogBreed.innerHTML = `${data.message}`;
        console.log("a");
        elementDog.appendChild(dogBreed);
      });
    });
});
