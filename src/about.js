export default function about() {
    const aboutSelected = document.getElementById('about');
    aboutSelected.classList.add('menu-item-selected');

    const content = document.getElementById('content');

        const aboutContainer = document.createElement('div');
        aboutContainer.classList.add('inner-content');

            const h1 = document.createElement('h1');
            h1.textContent = 'Quienes somos';
            aboutContainer.appendChild(h1);

            const aboutText = document.createElement('p');
            aboutText.textContent = `La Areperia trae para sus clientes las mejores recetas 
                                    de la comida colombiana preparadas unicamente una vez el 
                                    cliente las ordena. Dejate seducir por la magia de los 
                                    sabores colombianos.`;
            aboutText.style.padding = '0 20%';
            aboutContainer.appendChild(aboutText);

            const img = document.createElement('img');
            img.src = './images/cocina.jpg';
            img.classList.add('about-img');
            aboutContainer.appendChild(img);

    content.appendChild(aboutContainer);
}