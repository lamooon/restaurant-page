function contact() {
    console.log("I have been reached to contact");
    const contact = document.createElement('div');
    contact.classList.add('contact');

    const phoneNum = document.createElement('p');
    phoneNum.classList.add('contact-info');
    phoneNum.textContent = '📞  (+672) 7777 7777';

    const location = document.createElement('img');
    location.src = 'image/antarctica.png';
    location.alt = 'antarctica';

    contact.appendChild(phoneNum);
    contact.appendChild(location);

    return contact;
}

export default contact;