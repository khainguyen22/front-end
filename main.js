
document.addEventListener('DOMContentLoaded', () => {
    let nav_menu = document.querySelector('#nav-menu');
    let box_menu = document.querySelector('#box-menu');
    let nav_search = document.querySelector('#nav-search');
    let box_search = document.querySelector('#box-search');
    let back_to_top = document.querySelector('.back_to_top');

    nav_search.addEventListener('click', () => {
        box_search.classList.toggle('box-search-active');
    });

    nav_menu.addEventListener('click', () => {
        box_menu.classList.toggle('box-menu-active');
    });
    
    window.addEventListener('scroll', function() {
        console.log('window.scrollY',window.scrollY);
        if (window.scrollY > 200) {
            back_to_top.classList.remove('hidden');
        } else {
            back_to_top.classList.add('hidden');
        }
    });
    back_to_top.addEventListener('click', () => {
        window.scrollTo({ top: 0, behavior: 'smooth' });
    });
});