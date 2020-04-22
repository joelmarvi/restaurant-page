export default function menu() {
    const products = ['Arepas', 'Empanadas', 'Platos Fuertes', 'Sopas', 'Bebidas', 'Postres'];
    const productsUrls = ['./images/arepas.jpg', './images/empanadas.jpg', './images/bandeja.jpg', './images/sancocho.jpg', './images/lulada.jpg', './images/flan.jpg'];

    const menuSelected = document.getElementById('menu');
    menuSelected.classList.add('menu-item-selected');

    const content = document.getElementById('content');

        const menuContainer = document.createElement('div');
        menuContainer.classList.add('inner-content');

            const h1 = document.createElement('h1');
            h1.textContent = 'Nuestro Menu';
            menuContainer.appendChild(h1);

            for (let i = 0; i < products.length; i++) {
                const productItem = document.createElement('div');
                productItem.classList.add('product-item');

                const productPicture = document.createElement('div');
                productPicture.classList.add('product-picture');
                productPicture.style.backgroundImage = `url('${productsUrls[i]}')`;

                const productName = document.createElement('h2');
                productName.classList.add('product-name');
                productName.innerHTML = products[i];

                productItem.appendChild(productPicture);
                productItem.appendChild(productName);
                menuContainer.appendChild(productItem);
            }
        content.appendChild(menuContainer);
}