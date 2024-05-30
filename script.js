function saveSelectedModel(model) {
    localStorage.setItem('selectedModel', model);
}


function getSelectedModel() {
    return localStorage.getItem('selectedModel');
}


function clearSelectedModel() {
    localStorage.removeItem('selectedModel');
}


function filterCarsByModel(model) {
    const filteredCars = CARS.filter(car => car.model === model);
    document.querySelector('.root').innerHTML = ''; 
    filteredCars.forEach((car) => {
        const card = new Card(car);
        card.render();
    });
    if (filteredCars.length > 0) {
        document.querySelector('.card').scrollIntoView({ behavior: 'smooth' });
    }
    saveSelectedModel(model);
}


document.querySelectorAll('.car-type-btn').forEach(button => {
    button.addEventListener('click', (event) => {
        const model = event.target.getAttribute('data-model');
        filterCarsByModel(model);
    });
});

document.addEventListener('DOMContentLoaded', () => {
    const savedModel = getSelectedModel();
    if (savedModel) {
        filterCarsByModel(savedModel);
    }
});

document.addEventListener('DOMContentLoaded', () => {
    const bookingForm = document.getElementById('bookingForm');

    bookingForm.addEventListener('submit', (event) => {
        event.preventDefault();
        alert('Ваш тест-драйв успішно заброньовано!');
        bookingForm.reset();
    });

    const testDriveDate = document.getElementById('testDriveDate');
    const today = new Date().toISOString().split('T')[0];
    testDriveDate.setAttribute('min', today);
});

