const containerCat = document.querySelector(".cat-info")

export default function renderCatHtml(catImg, catName, catDescription, catTemperament) {
    containerCat.innerHTML = `
    <img  class="img" src="${catImg}" alt="${catName}">
      <h2 class="name" >${catName}</h2>
      <p class="descrip" >${catDescription}</p>
      <p class="temperament" >${catTemperament}</p>
    `
}