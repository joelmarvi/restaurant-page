export default function location() {
    const locationSelected = document.getElementById('location');
    locationSelected.classList.add('menu-item-selected');

    const content = document.getElementById('content');

        const locationContainer = document.createElement('div');
        locationContainer.classList.add('inner-content');

            const h1 = document.createElement('h1');
            h1.textContent = 'Encuentranos!';
            locationContainer.appendChild(h1);

            const map = document.createElement('div');
            map.id = 'map';
            map.innerHTML = '<iframe src="https://www.google.com/maps/embed?pb=!1m14!1m8!1m3!1d15695.855576003978!2d-75.5516921!3d10.4244399!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x0%3A0x51f25f72fab1a38!2sPlaza%20Santo%20Domingo!5e0!3m2!1sen!2sno!4v1587534507742!5m2!1sen!2sno" width="100%" height="100%" frameborder="0" style="border:0;" allowfullscreen=""></iframe>'
            locationContainer.appendChild(map);

            const h3 = document.createElement('h3');
            h3.textContent = 'Horario';
            locationContainer.appendChild(h3);

            const MTWR = document.createElement('p');
            MTWR.textContent = 'Lunes - Jueves: 11:30am - 9pm';
            locationContainer.appendChild(MTWR);

            const FS = document.createElement('p');
            FS.textContent = 'Viernes - Sabado: 11:30am - 10pm';
            locationContainer.appendChild(FS);

            const U = document.createElement('p');
            U.textContent = 'Domingo: 12pm - 9pm';
            locationContainer.appendChild(U);

        content.appendChild(locationContainer);        
}