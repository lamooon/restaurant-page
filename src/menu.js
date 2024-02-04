function createMenu(name, price) {
    const item = document.createElement('div');

    const title = document.createElement('h2');
    title.textContent = name;

    const priceTag = document.createElement('h3');
    priceTag.textContent = `$${price}`;

    const image = document.createElement('img');
    image.src = `image/${name.toLowerCase()}.jpg`;
    image.alt = name;

    item.appendChild(image);
    item.appendChild(title);
    item.appendChild(priceTag);

    return item;
}

function menu() {
    console.log("I have been reached to menu");
    const main = document.createElement('div');
    main.classList.add('menu');
    const friedRice = createMenu("Fried rice", 9.99);
    const pho = createMenu("Pho", 7.99);
    const sushi = createMenu("Sushi", 14.99);
    main.appendChild(friedRice);
    main.appendChild(pho);
    main.appendChild(sushi);

    return main;
}

export default menu;