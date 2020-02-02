export default async function fetchAnimais(){
    const animaisJSON = await fetch('./animaisapi.json')
    .then(response => response.json())
    .then(response => response);

    const numGrid = document.querySelector('.numeros-grid');

    animaisJSON.forEach(animal => {
        const divAnimal = createAnimal(animal);
        numGrid.appendChild(divAnimal)
    });

    function createAnimal(animal){
        const div = document.createElement('div');
        div.classList.add('numero-animal');
        div.innerHTML = `<h3>${animal.especie}</h3><span data-numero>${animal.total}</span>`;
        return div;
    }
}