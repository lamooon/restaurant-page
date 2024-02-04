
function home() {

    console.log("I have been reached to home");
    const home = document.createElement('div');
    home.classList.add('home');

    const summaryImage = document.createElement('img');
    summaryImage.id = 'homepage-image';
    summaryImage.src = './image/asian-food.jpg';
    summaryImage.alt = 'asian-foods';

    const introduction = document.createElement('div');

    const aboutContainer = document.createElement('div');
    aboutContainer.classList.add('about');
    const about = document.createElement('h2');
    about.textContent = 'About';
    const aboutUs = document.createElement('p');
    aboutUs.textContent = "Welcome to our Asian Food Haven! " +
        "Immerse yourself in the rich flavors and diverse culinary traditions of Asia. " +
        "Our restaurant is a celebration of authenticity, offering a fusion of exquisite dishes prepared with passion and skill. " +
        "Join us on a gastronomic journey that captures the essence of Asia's vibrant food culture."

    aboutContainer.appendChild(about);
    aboutContainer.appendChild(aboutUs);

    const openingHourContainer = document.createElement('div');
    const openingHour = document.createElement('h2');
    openingHour.textContent = "Opening Hour";
    const openingHourInfo = document.createElement('p');
    openingHourInfo.textContent = "Everyday: 9:00 - 21:00";

    openingHourContainer.appendChild(openingHour);
    openingHourContainer.appendChild(openingHourInfo);

    introduction.appendChild(aboutContainer);
    introduction.appendChild(openingHourContainer);
    home.appendChild(summaryImage);
    home.appendChild(introduction);
    return home;
}

export default home;