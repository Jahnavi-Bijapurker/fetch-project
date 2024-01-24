let total = 5;
let fetchUrl = "https://fakestoreapi.com/products";

function fetchImages() {

  fetch(fetchUrl)
    .then((response) => {
      return response.json();
    })
    .then((data) => {
    //   console.log(data);
      let img_container = document.querySelector("#Img-container");
      img_container.innerHTML = "";
        
      for (let i = 0; i < total; i++) {
        let element = data[i];

        let imgBox = document.createElement("div");
        imgBox.classList.add('ImageBox')

        img_container.appendChild(imgBox);


        let imgTitle = document.createElement("h1");
        imgTitle.innerHTML = element.title;
        imgBox.appendChild(imgTitle);

        let imgElement = document.createElement("img");
        imgElement.src = element.image;
        imgBox.appendChild(imgElement);

        let imgPrice = document.createElement("h1");
        imgPrice.innerHTML = element.price;
        imgBox.appendChild(imgPrice);
      }
    });
}

document.getElementById("loadMore").addEventListener("click", () => {
  total = total + 5;

  fetchImages(total)
})

fetchImages(total);



