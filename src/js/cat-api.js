import axios from "axios";
axios.defaults.headers.common["x-api-key"] = "live_Zqk71hJ7wdOTmvb0YO9YTeFcX4JyJWUY0H01QZxtjTmksISxsIzGxHeh4Y7xm7Gg";

const baseUrl = `https://api.thecatapi.com/`;

function fetchBreeds() {
    const url = `${baseUrl}v1/breeds`;
    return axios.get(url).then(response => {
        if (response.status !== 200) {
            throw new Error(response.statusText);
        }
        return response.data;
    })
}

function fetchCatByBreed(breedId) {
    const url = `${baseUrl}v1/images/search?breed_ids=${breedId}`;
   

    return axios.get(url).then(response => {
        if (response.status !== 200) {
            throw new Error(response.statusText);
        }
        return response.data[0];
    });
}




export { fetchBreeds, fetchCatByBreed }