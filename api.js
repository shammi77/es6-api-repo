// array of object

const loadDogs = () => {
    fetch('https://api.thedogapi.com/v1/breeds')
        .then(res => res.json())
        .then(data => displayDog(data));
}
const displayDog = (doglist) => {
    const main = document.getElementById("main");
    const first10Element = doglist.slice(0, 10);
    for (const dogs of first10Element) {
        const div = document.createElement('div');
        div.className = "col-lg-4"
        console.log(dogs.name);
        div.innerHTML = `
         <h2>${dogs.name}</h2>
         <p>${dogs.temperament}</p>
         <h4>${dogs.weight.imperial}</h4>
         <img width="300px" height="200px" src="${dogs.image.url}">
         </img>

        `
        console.log(div);
        main.appendChild(div)
    }
}