import header from './header'
import about from './about'
import menu from './menu'
import location from './location'

header();
about();

function clearNavSelection() {
    document.querySelectorAll('.menu-item').forEach(menuItem => 
        menuItem.classList.remove('menu-item-selected'));
}

document.querySelectorAll('.menu-item').forEach(button => 
    button.addEventListener('click', function(e) {
        clearNavSelection();
        document.getElementById('content').removeChild(document.querySelector('.inner-content'));
        switch(e.target.id) {
            case 'about':
                about();
            break;
            case 'menu':
                menu();
            break;
            case 'location':
                location();
            break;
        }
    })
);