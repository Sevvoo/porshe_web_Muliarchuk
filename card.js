class Card {
    constructor(car) {
        this.name = car.name;
        this.img = car.img;
        this.model = car.model;
        this.power = car.power;
        this.speed = car.speed;
        this.here = car.here;
    }
    render() {
        const root = document.querySelector('.root');
        const div = document.createElement('div');
        div.classList.add('card');
        div.innerHTML = `
            <img class="card-img" src="${this.img}">
            <h3 class="card-title">${this.name}</h3>
            <h3 class="card-model">${this.model}</h3>
            <div class="card-btn-set">
                <a href="All cars Pages/${this.model}/${this.name}.html" class="card-link">More Info</a>
                <button class="card-btn">наявність: ${this.here}</button>
                <button class="card-btn">${this.power}</button>
                <button class="card-btn">Макс.км/год: ${this.speed}</button>                  
            </div>
        `;
        root.append(div);
    }
}

function filterCarsByModel(model) {
    const filteredCars = CARS.filter(car => car.model === model);
    document.querySelector('.root').innerHTML = ''; // Очистити існуючі картки
    filteredCars.forEach((car) => {
        const card = new Card(car);
        card.render();
    });
    if (filteredCars.length > 0) {
        document.querySelector('.card').scrollIntoView({ behavior: 'smooth' });
    }
}

document.querySelectorAll('.car-type-btn').forEach(button => {
    button.addEventListener('click', (event) => {
        const model = event.target.getAttribute('data-model');
        filterCarsByModel(model);
    });
});
