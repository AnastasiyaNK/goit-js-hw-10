import { fetchBreeds, fetchCatByBreed } from "./js/cat-api";
import renderCatHtml from "./js/render-cat-html";
import SlimSelect from 'slim-select'
import 'slim-select/dist/slimselect.css';
import { Loading } from 'notiflix/build/notiflix-loading-aio';




const errorEl = document.querySelector(".error")
const selectEl = document.querySelector(".breed-select")

Loading.dots({
  svgColor: '#5897fb',
  svgSize: '130px',
  messageFontSize: '30px',
});

errorEl.style.display = "none";
fetchBreeds().then(breeds => {
    const options = breeds.map(bread => {
        return ` <option value="${bread.id}">${bread.name}</option>`
    }).join("");

    selectEl.insertAdjacentHTML("beforeend", options)
    new SlimSelect({
        select: selectEl
    })
}).catch(() => {
    errorEl.style.display = "block";
}).finally(() => {
    Loading.remove()
});



selectEl.addEventListener("change", onChangeBreeds)
function onChangeBreeds(e) {
    const breedId = e.target.value;
    Loading.dots({
    svgColor: '#5897fb',
    svgSize: '130px',
    messageFontSize: '30px',
});
    
    fetchCatByBreed(breedId).then(catData => {
    const img = catData.url;
    const name = catData.breeds[0].name;
    const description = catData.breeds[0].description;
    const temperament = catData.breeds[0].temperament;
    renderCatHtml(img, name, description,temperament)
   
}).catch(() => {
    errorEl.style.display = "block";
}).finally(() => {
       Loading.remove() 
    }) 
}
