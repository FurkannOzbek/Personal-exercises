function imgIns(imageUrl, elementToAppendImageTo) {
  let img = document.createElement("img");

  elementToAppendImageTo.appendChild(img);

  img.setAttribute("src", imageUrl);
}

imgIns("https://picsum.photos/536/354", document.querySelector("body"));
